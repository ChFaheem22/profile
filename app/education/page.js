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
      'Built a strong foundation in computer science, mathematics, and analytical thinking. Graduated with distinction.',
    coursework: ['Computer Science', 'Mathematics', 'Physics'],
  },
  {
    degree: 'B.Sc. in Software Engineering',
    institution: 'Riphah International University',
    year: '2023 - Present',
    description:
      'Focused on data structures, system design, and modern web development. Alongside academic coursework, I actively build real-world frontend applications with an emphasis on performance, scalability, and user experience.',
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
      'Gained a solid understanding of operating system concepts, including process management, memory management, file systems, and security, enabling effective system administration and troubleshooting.',
  },
  {
    title: 'Software Engineering: Modeling Software Systems using UML',
    provider: 'The Hong Kong University of Science and Technology',
    year: '2025',
    description:
      'Developed expertise in representing software system architecture and workflows using UML diagrams, improving clarity and maintainability of designs.',
  },
  {
    title: 'JavaScript Essentials 2 Certification',
    provider: 'Cisco Networking Academy',
    year: '2025',
    description:
      'Developed strong skills in modern JavaScript, including functions, arrays, objects, and asynchronous programming, for dynamic and responsive web development.',
  },
];

const Education = () => {
  return (
    <section className={styles.educationSection}>
      <span className="eyebrow">ACADEMIC RECORD</span>
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
