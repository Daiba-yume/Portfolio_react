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
} from "react-icons/fa";

const about = {
  title: "About me",
  desc: "Après quelques hésitations, j’ai enfin trouvé ma voie dans le développement web. Débutante passionnée, j’apprends HTML, CSS, JavaScript, React et SCSS. Mon objectif : créer des sites clairs, réactifs et agréables à utiliser.",
  info: [
    {
      filedName: "Name",
      filedValue: "Daïba Benamara",
    },
    {
      filedName: "Mobile",
      filedValue: "(+31) 7-81-91-75-88",
    },
    {
      filedName: "Email",
      filedValue: "daiba.bnm@gmail.com",
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
  desc: "Mon chemin d’apprentissage en continu :",
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
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javaScript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaSass />,
      name: "sass",
    },
    {
      icon: <FaVuejs />,
      name: "vue.js",
    },
    {
      icon: <FaGitAlt />,
      name: "git",
    },
    {
      icon: <FaGithub />,
      name: "github",
    },
    {
      icon: <FaFigma />,
      name: "figma",
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
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
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
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx_0">
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
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx_0">
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
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
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
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.desc}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
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
