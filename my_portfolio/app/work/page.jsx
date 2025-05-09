"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsGithub } from "react-icons/bs";
import { BiSolidRightArrow } from "react-icons/bi";
import { AiOutlineSolution } from "react-icons/ai";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Booki",
    title: "p1",
    desc: "Premier projet : intégration d'un site fictif pour Booki, une plateforme de réservation d'hébergements et d'activités, réalisée avec HTML et CSS.  Vous pouvez voir le site et le code dans les liens ci-dessous.",
    stack: [{ name: "Html" }, { name: "Css" }],
    image: "/assets/work/p1.png",
    live: "https://daiba-yume.github.io/Project_2/#",
    github: "https://github.com/Daiba-yume/Project_2",
  },
  {
    num: "02",
    category: "OhMyFood",
    title: "p2",
    desc: "Deuxième projet : développer un site 'mobile first' pour la startup Ohmyfood, permettant aux clients de composer leur repas à l'avance dans des restaurants gastronomiques à Paris, en intégrant des fonctionnalités de réservation et un système de menu personnalisé.",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "Sass" }],
    image: "/assets/work/p2.png",
    live: "https://daiba-yume.github.io/Project_3_OhMyFood/",
    github: "https://github.com/Daiba-yume/Project_3_OhMyFood",
  },
  {
    num: "03",
    category: "GameOn",
    title: "p3",
    desc: "Troisième projet : finaliser un formulaire d'inscription en ajoutant le JavaScript nécessaire pour valider les champs, gérer les erreurs et envoyer les données, sur un site déjà maquetté en HTML/CSS.",
    stack: [{ name: "JavaScript" }],
    image: "/assets/work/p3.png",
    live: "https://gameon-delta.vercel.app/",
    github: "https://github.com/Daiba-yume/Project_4",
  },
  {
    num: "04",
    category: "Fisheye ",
    title: "p4",
    desc: "Quatrième projet : créer un prototype pour FishEye, un site pour photographes. Intégration des maquettes en HTML, CSS et JavaScript. Affichage dynamique des médias depuis un fichier JSON avec le pattern Factory. Le site doit être accessible, sans erreur, et navigable au clavier.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/work/p4.png",
    live: "https://daiba-yume.github.io/Project_6/index.html",
    github: "https://github.com/Daiba-yume/Project_6",
  },
  {
    num: "05",
    category: "Les petits plats",
    title: "p5",
    desc: "Cinquième projet : développer un moteur de recherche performant pour leur site de recettes en implémentant deux versions de l'algorithme (avec boucles natives et programmation fonctionnelle), en comparant leurs performances et en fournissant une documentation détaillée.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/work/p5.png",
    live: "https://lespetitsplats-steel.vercel.app/",
    github: "https://github.com/Daiba-yume/Project_7_LPP",
  },
  {
    num: "06",
    category: "Learn@Home",
    title: "p6",
    desc: "Sixième projet :  cadrer le projet de site web pour Learn@Home, une association de soutien scolaire, en réalisant des diagrammes de cas d'usage, des user stories, des maquettes du site, ainsi qu'un Kanban pour organiser le développement du projet.",
    stack: [{ name: "Kanban" }, { name: "Figma" }, { name: "User stories" }],
    image: "/assets/work/p6.png",
    solutions: [
      {
        name: "Notion",
        url: "https://www.notion.so/1514ec73bcf58083afc6dc6cc254367f?v=790b8bb6324c41779fa057ff0a4d0f92&pvs=4",
      },
      {
        name: "Figma",
        url: "https://www.figma.com/design/OorGgzB0zEVwrgttdAa9bn/Learn-Home?node-id=0-1&t=9D5U97kwsurkiR0q-1",
      },
      {
        name: "User Stories",
        url: "https://drive.google.com/file/d/1kd2Du3D2CIFkDf0eVKpq2lHdSfYO2NDg/view?usp=sharing",
      },
      {
        name: "Diagramme",
        url: "https://drive.google.com/file/d/1CYAzX-qpwWdH88y5Zs0XSHrGSvPv0zXg/view?usp=sharing",
      },
    ],
  },
  {
    num: "07",
    category: "Kasa",
    title: "p7",
    desc: "Septième projet :refonte de la plateforme Kasa, développer l'application React en suivant les maquettes Figma, en intégrant les composants et fonctionnalités spécifiés, tout en respectant les contraintes techniques et de design.",
    stack: [{ name: "React" }, { name: "Sass" }, { name: "JavaScript" }],
    image: "/assets/work/p7.png",
    live: "https://kasa-eight-tau.vercel.app/",
    github: "https://github.com/Daiba-yume/Project_11",
  },
  {
    num: "08",
    category: "Nina Carducci",
    title: "p8",
    desc: "Huitième projet : optimiser le site en améliorant les performances, le référencement local avec Schema.org, l'accessibilité, et corriger quelques bugs sur la galerie et les filtres de catégorie. Ainsi qu'un rapport détaillant les actions faites. ",
    stack: [{ name: "Lighthouse" }, { name: "Wave" }, { name: "SEO" }],
    image: "/assets/work/p8.png",
    live: "https://daiba-yume.github.io/Projet_5_D-buggez-et-optimisez-un-site-de-photographe/",
    github:
      "https://github.com/Daiba-yume/Projet_5_D-buggez-et-optimisez-un-site-de-photographe",
  },
  {
    num: "09",
    category: "Qwenta",
    title: "p9",
    desc: "Neuvième projet : planifiez le développement du site d'un' client, mise en place d'une solution technique et un tableau Kanban.",
    stack: [{ name: "Notion" }],
    image: "/assets/work/p9.png",
    solutions: [
      {
        name: "Notion",
        url: "https://www.notion.so/8464aed190944d3595296f2ad2a16308?v=9f39268449b7481387a8feec7f1a5242&pvs=4",
      },
      {
        name: "Solution Technique",
        url: "https://drive.google.com/file/d/12sxcel5qylYGiDsNJAGHQ1YC96ph431_/view?usp=sharing",
      },
    ],
  },
  {
    num: "10",
    category: "ArgentBank",
    title: "p10",
    desc: "Dixième projet : créer l'application web complète et responsive avec React, phase 1 qui concerne l'authentification des utilisateurs avec React, Redux et l'intégration des API back-end existantes, suivie de la phase 2 sur les transactions à spécifier via Swagger. Pour se connecter, mettre l'identifiant et mot de passe suivant : tony@stark.com /  password123",
    stack: [
      { name: "React" },
      { name: "Sass" },
      { name: "JavaScript" },
      { name: "Redux" },
    ],
    image: "/assets/work/p10.png",
    live: "https://argentbank-five.vercel.app/",
    github: "https://github.com/Daiba-yume/Project_13_AB",
  },
  {
    num: "11",
    category: "SportSee",
    title: "p11",
    desc: "Onzième projet : créer la nouvelle page profil utilisateur avec React. Cette page suivra les sessions d'activité et les calories brûlées. Le projet inclut des graphiques (Recharts). Le Live project utilise les données mockées, mais si vous souhaitez voir les données API vous pouvez télécharger le repo.",
    stack: [
      { name: "React" },
      { name: "Sass" },
      { name: "JavaScript" },
      { name: "Recharts" },
      { name: "Axios" },
    ],
    image: "/assets/work/p11.png",
    live: "https://sportsee-nine.vercel.app/",
    github: "https://github.com/Daiba-yume/Project_12_SS",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-lavender group-hover:text-accent transition-all duration-500 capitalize italic">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.desc}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-stack">
                      {item.name}
                      {/* remove the last "," */}
                      {index != project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button*/}
                {project.live && project.github ? (
                  <>
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="direction demo projet"
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BiSolidRightArrow className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                    {/* project github button */}
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="direction github"
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </>
                ) : (
                  project.solutions && (
                    <div className="flex gap-4">
                      {project.solutions.map((solution, index) => (
                        <Link
                          key={index}
                          href={solution.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="direction solution technique"
                        >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                <AiOutlineSolution className="text-white text-3xl group-hover:text-accent" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{solution.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                      ))}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px]  relative group flex justify-center items-center bg-pink-50/20 rounded-md overflow-hidden">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full  h-full">
                        <Image
                          src={project.image}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="top"
                          alt={project.num}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-md"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
