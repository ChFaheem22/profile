import Image from 'next/image';
import styles from './About.module.css';
import Reveal from '../components/reveal';

export const metadata = {
  title: 'About',
  description: 'Frontend developer and Software Engineering student — background, journey and skills.',
};

const timeline = [
  { year: '2023', title: 'Started Web Development', desc: 'First steps into HTML, CSS and JavaScript.' },
  { year: '2023 – 2024', title: 'React', desc: 'Learned component-based UI development and modern React patterns.' },
  { year: '2024', title: 'MERN Stack', desc: 'Extended into full-stack development — MongoDB, Express, React, Node.' },
  { year: '2024 – 2025', title: 'Flutter', desc: 'Picked up cross-platform mobile development with Flutter & Firebase.' },
  { year: '2025', title: 'Frontend Developer Internship', desc: 'Humanity Alliance Organization — production React interfaces.' },
  { year: 'Now', title: 'Frontend Developer', desc: 'Building fast, scalable web & mobile apps, and studying Software Engineering.' },
];

const skillCategories = [
  { title: 'Frontend', skills: ['React', 'Next.js', 'JavaScript', 'HTML / CSS'] },
  { title: 'Mobile & Backend', skills: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'] },
  { title: 'Tools', skills: ['Git & GitHub', 'Python', 'VS Code', 'Figma'] },
];

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.profileBox}>
          <div className={styles.imgFrame}>
            <Image
              src="/pic-2.jpeg"
              alt="Profile Image"
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
            Building clean, <span className="gradText">scalable</span> web &amp; mobile apps
          </h1>
          <p>
            I&rsquo;m Faheem, a <b>Frontend Developer</b> and Software
            Engineering student with a strong focus on building modern,
            responsive, and scalable web applications. I transform ideas
            into clean, intuitive digital experiences.
          </p>
          <p>
            My primary expertise is in <b>React.js</b> and <b>Next.js</b>,
            crafting reusable components, smooth interactions, and
            optimized architectures — extended into mobile with{' '}
            <b>Flutter</b>.
          </p>
          <p>
            Alongside academics, I actively work on real-world projects to
            improve problem-solving skills and <b>full-stack understanding</b>.
            I am always keen to learn, innovate, and tackle challenging
            opportunities.
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
          <h2 className={styles.sectionTitle}>My journey</h2>
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
          <h2 className={styles.sectionTitle}>Skills</h2>
        </Reveal>
        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.08}>
              <div className="skill-cat-card">
                <h3>{cat.title}</h3>
                <div className="skill-chip-list">
                  {cat.skills.map((s) => (
                    <span className="skill-chip" key={s}>
                      {s}
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
