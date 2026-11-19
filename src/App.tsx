
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Achievements } from './components/sections/Achievements';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';

import { personal } from './data/personal';

import './index.css';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename="/portfolio1">
        <Helmet>
          <title>
            {personal.name} — {personal.role}
          </title>

          <meta
            name="description"
            content="Frontend Engineer with 3.5+ years of experience building scalable, high-performance React and TypeScript applications."
          />

          <meta
            property="og:title"
            content="Kishor Kumar — Frontend Engineer"
          />

          <meta
            property="og:description"
            content="Building scalable, high-performance and intuitive digital experiences."
          />

          <meta
            property="og:type"
            content="website"
          />
        </Helmet>

        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Education />
          <Contact />
        </main>

        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}
