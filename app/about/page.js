import Image from 'next/image';
import styles from './About.module.css';
import Reveal from '../components/reveal';

export const metadata = {
  title: 'About',
  description:
    'Frontend Developer & Software Engineering student passionate about building modern, scalable, and high-performance digital experiences.',
};

const timeline = [
  {
    year: '2023',
    title: 'Started My Development Journey',
    desc: 'Discovered web development and built my first responsive websites using HTML, CSS, and JavaScript.',
  },
  {
    year: '2023 – 2024',
    title: 'Modern Frontend Development',
    desc: 'Focused on React, component-driven architecture, state management, and creating engaging user interfaces.',
  },
  {
    year: '2024',
    title: 'Full-Stack Development',
    desc: 'Expanded into the MERN stack, building complete web applications with APIs, authentication, and databases.',
  },
  {
    year: '2024 – 2025',
    title: 'Cross-Platform Apps',
    desc: 'Started developing mobile applications with Flutter and Firebase while exploring scalable app architecture.',
  },
  {
    year: '2025',
    title: 'Frontend Developer Internship',
    desc: 'Contributed to production-ready React applications, collaborated with teams, and transformed designs into polished user experiences.',
  },
  {
    year: 'Today',
    title: 'Building & Growing',
    desc: 'Continuously creating modern digital products while expanding my full-stack expertise and pursuing Software Engineering.',
  },
];

const skillCategories = [
  {
    title: 'Frontend Engineering',
    skills: ['React.js', 'Next.js', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend & Mobile',
    skills: [
      'Flutter',
      'Dart',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Firebase',
    ],
  },
  {
    title: 'Development Tools',
    skills: ['Git', 'GitHub', 'Python', 'VS Code', 'Figma'],
  },
];

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.profileBox}>
          <div className={styles.imgFrame}>
            <Image
              src="/pic-2.jpeg"
              alt="Faheem - Frontend Developer"
              width={350}
              height={450}
              className={styles.profileImg}
            />
          </div>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadBtnDesktop}
          >
            Download Resume
          </a>
        </div>

        <div className={styles.infoBox}>
          <span className="eyebrow">ABOUT ME</span>

          <h1 className={styles.title}>
            Building
            <span className="gradText"> digital experiences </span>
            that are
            <span className="gradText"> fast</span>,
            <span className="gradText"> scalable</span>, and
            <span className="gradText"> unforgettable</span>.
          </h1>

          <p className='p'>
            I&rsquo;m <b>Faheem</b>, a <b>Frontend Developer</b> and Software
            Engineering student passionate about turning ambitious ideas into
            modern, responsive, and high-performance web applications that
            people genuinely enjoy using.
          </p>

          <p className='p'>
            I specialize in <b>React.js</b>, <b>Next.js</b>, and{' '}
            <b>Flutter</b>, building reusable component systems, seamless user
            experiences, and scalable applications with clean, maintainable
            code. Every interface I create is designed with performance,
            accessibility, and long-term growth in mind.
          </p>

          <p className={styles.p}>
            Beyond writing code, I love solving real-world problems through
            technology. Every project strengthens my engineering mindset,
            expands my <b>full-stack development</b> knowledge, and pushes me
            to create products that combine thoughtful design with exceptional
            user experiences.
          </p>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadBtn}
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className={styles.timelineSection}>
        <Reveal>
          <h2 className={styles.sectionTitle}>Journey So Far</h2>
        </Reveal>

        <div className="timeline-wrap">
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="timeline-item">
                <div className="timeline-rail">
                  <div className="timeline-dot" />
                  <div className="timeline-line" />
                </div>

                <div className="timeline-content">
                  <div className="year">{item.year}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className={styles.skillsSection}>
        <Reveal>
          <h2 className={styles.sectionTitle}>Technologies I Work With</h2>
        </Reveal>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.08}>
              <div className="skill-cat-card">
                <h3>{cat.title}</h3>

                <div className="skill-chip-list">
                  {cat.skills.map((skill) => (
                    <span className="skill-chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;