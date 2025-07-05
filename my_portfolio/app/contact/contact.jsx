"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/* import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; */

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { PiHandshakeFill } from "react-icons/pi";

const info = [
  /* {
    icon: <FaPhoneAlt />,
    title: "Mobile",
    desc: "07-81-91-75-88",
  }, */
  {
    icon: <FaEnvelope />,
    title: "Email",
    desc: "daiba.bnm@gmail.com",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl overline mb-8 mt-12 font-playfair italic">
          Contact me
        </h1>
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              action="https://formspree.io/f/xldbdqoj"
              method="POST"
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent flex items-center gap-5">
                Let's work together <PiHandshakeFill />
              </h3>

              <p className="text-white/60">
                Mon profil vous intéresse ? N'hésitez pas à me contacter pour
                discuter de vos projets.
              </p>

              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="Prénom"
                  name="firstname"
                  required
                />
                <Input
                  type="lastname"
                  placeholder="Nom"
                  name="lastname"
                  required
                />
                <Input type="email" placeholder="Email" name="email" required />
                <Input
                  type="phone"
                  placeholder="Mobile"
                  name="phone"
                  required
                />
              </div>
              {/* select */}
              {/*  <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">Web Development</SelectItem>
                    <SelectItem value="mst">Web Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Écrivez votre message ici."
                name="message"
                required
              />
              {/* btn */}
              <Button
                size="md"
                className="max-w-40"
                aria-label="envoyer le formulaire"
              >
                Envoyer
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.desc}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
