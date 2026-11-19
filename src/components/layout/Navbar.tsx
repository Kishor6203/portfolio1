
import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { personal, navItems } from '../../data/personal';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      let current = 'Home';

      for (const name of navItems) {
        const el = document.getElementById(name.toLowerCase());

        if (el && el.getBoundingClientRect().top < 150) {
          current = name;
        }
      }

      setActive(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner wrap">
        <a className="brand" href="#home" onClick={close}>
          <span>KK</span>
          <b>Kishor Kumar</b>
        </a>

        <nav
          className={open ? 'nav-links open' : 'nav-links'}
          aria-label="Main navigation"
        >
          {navItems.map(n => (
            <a
              key={n}
              className={active === n ? 'active' : ''}
              href={`#${n.toLowerCase()}`}
              onClick={close}
            >
              {n}
            </a>
          ))}

          <a className="nav-resume" href={personal.resume} download>
            Resume <Download size={14} />
          </a>
        </nav>

        <button
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
