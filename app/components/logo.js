import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      icon: <FaGithub />,
      href: "https://github.com/ChFaheem22",
      label: "GitHub",
      color: "#333" // GitHub Black
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/faheem-95772830b",
      label: "LinkedIn",
      color: "#0077b5" // LinkedIn Blue
    },
    {
      id: 3,
      icon: <FaInstagram />,
      href: "https://www.instagram.com/___faheem._?igsh=MXZyOHQ2NXc3MHJ3cw==",
      label: "Instagram",
      color: "#E1306C" // Instagram Pink
    }
  ];

  return (
    <div className="social-wrapper">
      {links.map((link) => (
        <a 
          key={link.id}
          href={link.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon"
          aria-label={link.label}
          style={{ '--hover-color': link.color }} // Pass color to CSS
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;