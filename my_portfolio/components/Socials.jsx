import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/da%C3%AFba-benamara-949574298/",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            className={iconStyles}
            aria-label="lien vers linkedin"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
