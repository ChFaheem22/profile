import styles from './Education.module.css';
import Reveal from '../components/reveal';

export const metadata = {
  title: 'Education',
  description: 'Academic background and certifications.',
};

const educationData = [
  {
    degree: 'ICS - Intermediate in Computer Science',
    institution: 'Punjab College',
    year: '2021 - 2023',
    description:
      'Studied computer science, maths and physics. Graduated with distinction.',
    coursework: ['Computer Science', 'Mathematics', 'Physics'],
  },
  {
    degree: 'B.Sc. in Software Engineering',
    institution: 'Riphah International University',
    year: '2023 - Present',
    description:
      'Coursework covers data structures, system design and web development. Outside class I build frontend and full-stack projects, such as QuickServe and DriveGo.',
    coursework: [
      'Data Structures & Algorithms',
      'Software Requirements Engineering',
      'Database Systems',
      'Web Application Development',
    ],
  },
];

const certifications = [
  {
    title: 'Operating Systems Basics Certification',
    provider: 'Cisco Networking Academy',
    year: '2026',
    description:
      'Covers process management, memory, file systems and security basics.',
  },
  {
    title: 'Software Engineering: Modeling Software Systems using UML',
    provider: 'The Hong Kong University of Science and Technology',
    year: '2025',
    description:
      'Learned to model system architecture and workflows with UML diagrams.',
  },
  {
    title: 'JavaScript Essentials 2 Certification',
    provider: 'Cisco Networking Academy',
    year: '2025',
    description:
      'Covers functions, arrays, objects and async JavaScript.',
  },
];

const Education = () => {
  return (
    <section className={styles.educationSection}>
      <span className="eyebrow">Academic record</span>
      <h1 className={styles.title}>Education</h1>

      <div className={styles.cardGrid}>
        {educationData.map((edu, index) => (
          <Reveal key={index} delay={index * 0.06}>
            <div className={styles.card}>
              <div className={styles.header}>
                <h2 className={styles.degree}>{edu.degree}</h2>
                <p className={styles.institution}>{edu.institution}</p>
                <p className={styles.year}>{edu.year}</p>
              </div>
              <p className={styles.description}>{edu.description}</p>

              {edu.coursework && (
                <div className={styles.coursework}>
                  <p className={styles.courseworkLabel}>Coursework</p>
                  <ul>
                    {edu.coursework.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <h2 className={styles.certTitle}>Certifications</h2>

      <div className={styles.certGrid}>
        {certifications.map((cert, index) => (
          <Reveal key={index} delay={index * 0.07}>
            <div className={styles.certCard}>
              <h3 className={styles.certName}>{cert.title}</h3>
              <p className={styles.certProvider}>
                {cert.provider} <span className={styles.certYear}>· {cert.year}</span>
              </p>
              <p className={styles.certDesc}>{cert.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Education;
