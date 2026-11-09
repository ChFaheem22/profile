'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, FileText, Monitor, Smartphone, Layers, PenTool, Gauge, Users } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import RoleCycle from './components/role-cycle';
import Reveal from './components/reveal';
import Counter from './components/counter';

const stack = ['React', 'Next.js', 'Node.js', 'MongoDB', 'Flutter', 'Python'];

const services = [
  {
    icon: Monitor,
    title: 'Frontend Development',
    desc: 'Interfaces in React and Next.js, built from Figma files.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Flutter apps with Firebase sign-in and storage. DriveGo is one example.',
  },
  {
    icon: Layers,
    title: 'Full-Stack (MERN)',
    desc: 'MongoDB, Express, React and Node. Auth, bookings and dashboards, as in QuickServe.',
  },
  {
    icon: PenTool,
    title: 'UI Implementation',
    desc: 'Turning designs into components that can be reused across a project.',
  },
  {
    icon: Gauge,
    title: 'Performance',
    desc: 'Improved website load speed during my frontend internship at Humanity Alliance.',
  },
  {
    icon: Users,
    title: 'Teamwork',
    desc: 'Git branches, pull requests and code reviews on team projects.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Home = () => {
  return (
    <main className="home-container">
      <section className="hero">
        <div className="hero-content">
          <motion.div className="badge" variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="pulse" /> Open to freelance and internship work
          </motion.div>

          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}>
            Frontend <span style={{ color: 'var(--accent)' }}>Engineer</span>
          </motion.h1>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={2}>
            <RoleCycle />
          </motion.div>

          <motion.p className="tagline" variants={fadeUp} initial="hidden" animate="show" custom={3}>
            I build web and mobile apps with React, Next.js, Flutter and the
            MERN stack, from interface work to full products with a backend.
          </motion.p>

          <motion.div className="tech-row" variants={fadeUp} initial="hidden" animate="show" custom={4}>
            <span>React</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>MERN Stack</span>
            <span>Flutter</span>
          </motion.div>

          <motion.div className="buttons" variants={fadeUp} initial="hidden" animate="show" custom={5}>
            <Link className="btn primary" href="/projects">
              View My Work
            </Link>
            <a className="btn outline" href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              <FileText size={16} /> Resume
            </a>
          </motion.div>

          <motion.div className="icon-row" variants={fadeUp} initial="hidden" animate="show" custom={6}>
            <a href="https://github.com/ChFaheem22" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
            <a href="https://linkedin.com/in/faheemch22" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
            <a href="mailto:faheemchh779@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </motion.div>

          <motion.div className="stats-row" variants={fadeUp} initial="hidden" animate="show" custom={7}>
            <div className="stat">
              <div className="num">6+</div>
              <div className="label">Projects Shipped</div>
            </div>
            <div className="stat">
              <div className="num">3</div>
              <div className="label">Internships</div>
            </div>
            <div className="stat">
              <div className="num">4+</div>
              <div className="label">Web, mobile &amp; AI</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-window">
            <div className="hero-window-header">
              <div className="hero-window-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="hero-window-title">Faheem Profile</span>
            </div>
            <div className="image-container">
              <Image
                src="/pic-4.jpeg"
                alt="Faheem - Frontend Developer"
                className="profile-img"
                width={400}
                height={500}
                priority
              />
            </div>
            <div className="hero-window-footer">
              <div className="hero-window-status">
                <span className="dot" />
                <span>Open to work</span>
              </div>
              <span>Lahore, Pakistan</span>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="stack-strip">
        <div className="container">
          <span className="label">Core stack</span>
          <div className="pills">
            {stack.map((s) => (
              <span className="pill" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <Reveal className="section-head">
          <span className="eyebrow">by the numbers</span>
          <h2>Quick facts</h2>
        </Reveal>
        <div className="counters-grid">
          <Counter value={6} suffix="+" label="Projects" />
          <Counter value={15} suffix="+" label="Technologies" />
          <Counter value={2} label="Live demos" />
          <Counter value={3} suffix="+" label="Years Learning" />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal className="section-head">
          <span className="eyebrow">What I work on</span>
          <h2>Skills I use on real work</h2>
        </Reveal>
        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="service-card">
                <div className="icon"><s.icon size={20} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="contact-cta">
        <Reveal>
          <div className="cta-content">
            <h3>Have something to build?</h3>
            <p>Freelance work, an internship, or a project you want a second opinion on.</p>
            <Link className="btn primary" href="/contact">
              Get in touch
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default Home;
