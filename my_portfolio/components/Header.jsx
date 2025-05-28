import Link from "next/link";
import { Button } from "./ui/button";
// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className="fixed w-full bg-primary z-50 py-8  text-white">
      <div className="container mx auto flex justify-between items-center">
        {/* logo */}
        <Link href="/" aria-label="direction acceuil">
          <h1 className="text-4xl font-semibold">
            Daïba<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <a href="#contact" aria-label="direction contact">
            <Button aria-label="embauchez moi">Contact</Button>
          </a>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
export default Header;
