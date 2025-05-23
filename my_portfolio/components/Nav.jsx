"use client";

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
const Nav = () => {
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <a
          href={link.path}
          key={index}
          className="capitalize font-medium hover:text-accent transition-all"
          aria-label={`Lien vers ${link.name}`}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
