import { Button } from "@/components/ui/button";
import { GiArrowWings } from "react-icons/gi";
//components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Work from "./work/work";
import Resume from "./resume/resume";
import Contact from "./contact/contact";

const Home = () => {
  return (
    <>
      <section id="home" className="h-full pt-32">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl ">Développeuse Web React/JS</span>
              <h1 className="h1  mb-6 pt-8">
                Hello,
                <br />
                je suis
                <span className="text-accent">
                  <strong> Daïba Benamara</strong>
                </span>
              </h1>
              <p className="max-w-[900px] mb-9 text-white/80">
                <strong>
                  Je crée des sites interactifs et agréables à utiliser. Chaque
                  projet est une nouvelle occasion d'apprendre et de
                  m'améliorer.
                </strong>
              </p>
              {/* btn and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-10">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 px-6 py-4 h-[56px]"
                  aria-label="Voir mon cv"
                >
                  <a
                    href="https://drive.google.com/file/d/1yP0ZLg7rFC3S1jciAdSrS3gXjCc6_iBO/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir mon CV
                  </a>
                  <GiArrowWings className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Socials
                    containerStyles="flex gap-8"
                    iconStyles="w-12 h-12  border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
      <section id="resume" className="scroll-mt-32">
        <Resume />
      </section>
      <section id="work" className="scroll-mt-32">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
