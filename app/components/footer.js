import Link from 'next/link';
import { FileText } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const links = [
  {
    id: 1,
    icon: <FaGithub size={17} />,
    href: 'https://github.com/ChFaheem22',
    label: 'GitHub',
  },
  {
    id: 2,
    icon: <FaLinkedin size={17} />,
    href: 'https://linkedin.com/in/faheemch22',
    label: 'LinkedIn',
  },
  {
    id: 3,
    icon: <FaInstagram size={17} />,
    href: 'https://www.instagram.com/___faheem._',
    label: 'Instagram',
  },
  {
    id: 4,
    icon: <FileText size={17} />,
    href: '/cv.pdf',
    label: 'Resume',
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <span className="copy">
          © {new Date().getFullYear()} Faheem -{' '}
          <Link href="/contact">Let&apos;s build something amazing.</Link>
        </span>

        <div className="socials">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="social-icon"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;