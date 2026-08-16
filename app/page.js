'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import RoleCycle from './components/role-cycle';
import Reveal from './components/reveal';
import Counter from './components/counter';

const stack = ['React', 'Next.js', 'Node.js', 'MongoDB', 'Flutter', 'Python'];

const services = [
  {
    icon: '🖥️',
    title: 'Frontend Development',
    desc: 'Responsive, accessible interfaces built with React and Next.js, from Figma to production.',
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    desc: 'Cross-platform mobile apps with Flutter, backed by Firebase authentication and storage.',
  },
  {
    icon: '🔗',
    title: 'Full-Stack (MERN)',
    desc: 'End-to-end features across MongoDB, Express, React and Node — auth, bookings, dashboards.',
  },
  {
    icon: '🎨',
    title: 'UI Implementation',
    desc: 'Turning designs into pixel-accurate, reusable component systems with clean state management.',
  },
  {
    icon: '⚡',
    title: 'Performance',
    desc: 'Faster load times and smoother interactions through profiling and practical optimization.',
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    desc: 'Git-based workflows, code reviews, and clear communication through the full project lifecycle.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' },
  }),
};

const Home = () => {
  return (
    <main className="home-container">
      <motion.div
        className="hero-orb hero-orb-1"
        animate={{ x: [0, 26, 0], y: [0, -18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero-orb hero-orb-2"
        animate={{ x: [0, -22, 0], y: [0, 20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <section className="hero">
        <div className="hero-content">
          <motion.span className="badge" variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="pulse" /> available_for_freelance_and_internships
          </motion.span>

          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}>
            Frontend <span className="gradText">Engineer</span>
          </motion.h1>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={2}>
            <RoleCycle />
          </motion.div>

          <motion.p className="tagline" variants={fadeUp} initial="hidden" animate="show" custom={3}>
            Crafting fast, modern and user-focused web &amp; mobile experiences —
            from React interfaces to full MERN-stack products.
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
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/faheemch22" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} />
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
              <div className="num">1</div>
              <div className="label">Internship</div>
            </div>
            <div className="stat">
              <div className="num">3+</div>
              <div className="label">Stacks — Web, Mobile, AI</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
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
          <div className="floating-card top">
            <span className="dot" />
            Open to work
          </div>
          <div className="floating-card bottom">📍 Lahore, Pakistan</div>
        </motion.div>
      </section>

      <div className="stack-strip">
        <div className="container">
          <span className="label">core stack —</span>
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
          <h2>A quick snapshot</h2>
        </Reveal>
        <div className="counters-grid">
          <Counter value={6} suffix="+" label="Projects" />
          <Counter value={15} suffix="+" label="Technologies" />
          <Counter value={100} suffix="%" label="Responsive" />
          <Counter value={3} suffix="+" label="Years Learning" />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal className="section-head">
          <span className="eyebrow">what i do</span>
          <h2>Practical skills, applied to real problems</h2>
        </Reveal>
        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="service-card">
                <div className="icon">{s.icon}</div>
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
            <h3>Let&apos;s build something amazing together.</h3>
            <p>Interested in collaborating or discussing a project opportunity?</p>
            <Link className="btn white-btn" href="/contact">
              Let&apos;s Connect
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default Home;
