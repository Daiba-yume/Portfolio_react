"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaSass,
  FaVuejs,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import { SiRedux } from "react-icons/si";

const about = {
  title: "About me",
  desc:
    "Après quelques années à chercher ma voie, j'ai enfin découvert une véritable passion : le développement web.\n" +
    "Aujourd'hui, je me forme activement aux technologies clés comme JavaScript, React et l'utilisation des API, avec l'ambition de créer des sites modernes, accessibles et efficaces.\n\n",
  info: [
    /*  {
      filedName: "Name",
      filedValue: "Daïba Benamara",
    },
    {
      filedName: "Email",
      filedValue: "daiba.bnm@gmail.com",
    }, */
    {
      filedName: "Localisation",
      filedValue: "Paris",
    },
    {
      filedName: "Langues",
      filedValue: "French, English",
    },
  ],
};

/* Experience data */
const experience = {
  title: "My experience",
  desc: "Mes différents chemins d'apprentissage en continu :",
  items: [
    {
      company: "OpenClassrooms",
      position: "Développeur d'application JavaScript React",
      duration: "2024 - En cours",
    },
    {
      company: "OpenClassrooms",
      position: "Développeur web",
      duration: "2022-2023",
    },
    {
      company: "Doranco",
      position: "Développeur web et web mobile",
      duration: "2021-2022",
    },
    {
      company: "Hermès / Adexcel / PLD Europe",
      position: "Préparatrice de commande",
      duration: "2019-2020",
    },
    {
      company: "Particulier",
      position: "Babysitter",
      duration: "2017-2018",
    },
  ],
};
/* Education data */
const education = {
  title: "Diplômes",
  desc: "Parcours scolaire :",
  items: [
    {
      institution: "OpenClassrooms",
      degree: "Diplôme RNCP de niveau 5 (Développeur intégrateur web)",
      duration: "2022-2023",
    },
    {
      institution: "Lycée Jacques Brel",
      degree: "Baccalauréat Science Économique et sociales",
      duration: "2017-2018",
    },
  ],
};
/* Skills data */
const Skills = {
  title: "My skills",
  desc: "Ce que j’utilise pour coder, apprendre et progresser :",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
      color: "#e34c26",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
      color: "#264de4",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      color: "#f0db4f",
    },
    {
      icon: <FaReact />,
      name: "React.js",
      color: "#61dafb",
    },
    {
      icon: <FaSass />,
      name: "Sass",
      color: "#cd6799",
    },
    {
      icon: <FaVuejs />,
      name: "Vue.js",
      color: "#42b883",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      color: "#f1502f",
    },
    {
      icon: <FaGithub />,
      name: "Github",
      color: "#fff",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
      color: "#a259ff",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
      color: "#764ABC",
    },
    {
      icon: <FaNpm />,
      name: "Npm",
      color: "#CB3837",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 mt-12"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl overline mb-8 mt-12 font-playfair italic">
          Resume
        </h1>
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.desc}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-lg flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-base max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-sm">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full rounded-xl">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.desc}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-lg flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-base max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{Skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {Skills.desc}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md-grid-cols-4 gap-4 xl:gap-[30px]">
                  {Skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group hover:bg-[#2f2f36]">
                              <div
                                className="text-6xl transition-all duration-300  group-hover:scale-125"
                                style={{ color: skill.color }}
                              >
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p
                  className="max-w-[900px] text-white/60 mx-auto xl:mx-0"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {about.desc}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-xl">{item.filedName}</span>
                        <span className="text-white/60">{item.filedValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
