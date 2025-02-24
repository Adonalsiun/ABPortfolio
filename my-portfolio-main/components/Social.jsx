import { Icon } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  {
    Icon: <FaGithub />,
    path: "https://github.com/Adonalsiun",
  },
  {
    Icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/arynbht/",
  },
  {
    Icon: <FaYoutube />,
    path: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    Icon: <FaTwitter />,
    path: "https://x.com/?lang=en",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link href={item.path} key={index} className={iconStyles}>
          {item.Icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
