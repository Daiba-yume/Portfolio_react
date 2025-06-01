"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from "react";

const links = [
  {
    name: "home",
    path: "#home",
  },
  /*  {
    name: "services",
    path: "#services",
  }, */
  {
    name: "resume",
    path: "#resume",
  },
  {
    name: "work",
    path: "#work",
  },
  {
    name: "contact",
    path: "#contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Required for accessibility */}
        <SheetTitle>
          <span className="sr-only">Menu mobile</span>
        </SheetTitle>
        <SheetDescription>
          <span className="sr-only">Liste des liens de navigation</span>
        </SheetDescription>

        {/* logo */}
        <div className="mt-32 mb-32 text-center text-2xl">
          <a href="/" aria-label="direction acceuil">
            <h1 className="text-4xl font-semibold">
              Daïba <span className="text-accent">.</span>
            </h1>
          </a>
        </div>

        {/* Titre invisible pour l'accessibilité */}
        <h2 className="sr-only">Nav mobile</h2>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <a
                href={link.path}
                key={index}
                onClick={() => setOpen(false)}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
                aria-label="lien de navigation"
              >
                {link.name}
              </a>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
