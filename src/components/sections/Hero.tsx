
import { motion, useReducedMotion } from 'framer-motion';

import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Sparkles,
} from 'lucide-react';

import { personal } from '../../data/personal';

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="hero section-pad"
    >
      <div className="hero-grid wrap">
        <motion.div
          className="hero-copy"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <div className="availability">
            <i /> Available for Frontend Opportunities
          </div>

          <p className="hero-kicker">HELLO, I'M</p>

          <h1>
            Kishor Kumar<span className="period">.</span>
          </h1>

          <h2>
            Frontend Engineer
            <span className="violet"> &amp; UI Builder</span>
          </h2>

          <p className="hero-description">
            I build scalable, high-performance, and intuitive web
            applications using React, TypeScript, and modern
            frontend technologies.
          </p>

          <div className="hero-actions">
            <a
              className="button primary"
              href="#projects"
            >
              Explore my work
              <ArrowUpRight size={17} />
            </a>

            <a
              className="button secondary"
              href={personal.resume}
              download
            >
              Download resume
            </a>
          </div>

          <div className="hero-social">
            <span>CONNECT</span>

            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
            >
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          <div className="portrait-frame">
            <img
              src={personal.profileImage}
              alt="Kishor Kumar portrait"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display =
                  'none';
              }}
            />

            <div className="portrait-fallback">
              <span>KK</span>
              <small>YOUR PHOTO GOES HERE</small>
            </div>

            <div className="portrait-caption">
              <span className="caption-dot" />
              Building for the web
            </div>
          </div>

          <div className="float-chip chip-react">
            <span>⚛</span> React
          </div>

          <div className="float-chip chip-ts">
            TS <b>TypeScript</b>
          </div>

          <div className="float-chip chip-js">
            JS <b>JavaScript</b>
          </div>

          <div className="float-chip chip-redux">
            <Sparkles size={14} /> Redux Toolkit
          </div>

          <div className="visual-note">
            <span>03.5+</span>
            <small>
              YEARS OF
              <br />
              EXPERIENCE
            </small>
          </div>
        </motion.div>
      </div>

      <div className="hero-bottom wrap">
        <span>BASED IN BANGALORE, INDIA</span>

        <a href="#about">
          SCROLL TO EXPLORE
          <ArrowDownRight size={15} />
        </a>

        <span>OPEN TO GREAT WORK</span>
      </div>
    </section>
  );
}
