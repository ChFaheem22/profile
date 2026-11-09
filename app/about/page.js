import Image from 'next/image';
import styles from './About.module.css';
import Reveal from '../components/reveal';

export const metadata = {
  title: 'About',
  description:
    'Frontend developer and software engineering student in Lahore, building React, Next.js and Flutter apps.',
};

const timeline = [
  {
    year: '2023',
    title: 'Started coding',
    desc: 'Built my first websites with HTML, CSS and JavaScript.',
  },
  {
    year: '2023 – 2024',
    title: 'Frontend Development',
    desc: 'Learned React, components and state management, and started building interfaces.',
  },
  {
    year: '2024',
    title: 'Full-Stack Development',
    desc: 'Moved into the MERN stack and built apps with APIs, auth and databases.',
  },
  {
    year: '2024 – 2025',
    title: 'Cross-Platform Apps',
    desc: 'Started building mobile apps with Flutter and Firebase.',
  },
  {
    year: '2025',
    title: 'Frontend Developer Internship',
    desc: 'Built React interfaces and reusable components from Figma designs at Humanity Alliance.',
  },
  {
    year: 'Today',
    title: 'Final year and open to work',
    desc: 'Finishing my B.Sc. and looking for frontend internships and freelance projects.',
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
          <span className="eyebrow">About me</span>

          <h1 className={styles.title}>
            I write the part of the app people actually <span style={{ color: 'var(--accent)' }}>click.</span>
          </h1>

          <p className={styles.p}>
            I&apos;m Faheem. I&apos;m a software engineering student at Riphah
            International University in Lahore, and most of my time goes into
            frontend work with React, Next.js and Flutter.
          </p>

          <p className={styles.p}>
            I like building reusable components and keeping code readable
            enough that someone else can pick it up. On my internship at
            Humanity Alliance I turned Figma designs into components and worked
            on load speed.
          </p>

          <p className={styles.p}>
            Outside class I build full-stack projects with the MERN stack, like
            QuickServe, a service-booking platform with auth, bookings and
            reviews.
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
          <h2 className={styles.sectionTitle}>How I got here</h2>
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
            <Reveal key={cat.title} delay={i * 0.06}>
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
