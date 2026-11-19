
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personal, navItems } from '../../data/personal';

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-main">
        <div>
          <a className="brand" href="#home">
            <span>KK</span>
            <b>Kishor Kumar</b>
          </a>

          <p>
            Frontend Engineer crafting reliable, thoughtful digital experiences.
          </p>
        </div>

        <div className="footer-nav">
          {navItems
            .filter(n => ['About', 'Skills', 'Projects', 'Contact'].includes(n))
            .map(n => (
              <a key={n} href={`#${n.toLowerCase()}`}>
                {n}
              </a>
            ))}
        </div>

        <div className="socials">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>

          <a href={`mailto:${personal.email}`} aria-label="Email">
            <Mail />
          </a>

          <a href="#home" aria-label="Back to top">
            <ArrowUp />
          </a>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>
          © {new Date().getFullYear()} Kishor Kumar. All rights reserved.
        </span>

        <span>
          Designed with intention. Built with React.
        </span>
      </div>
    </footer>
  );
}
