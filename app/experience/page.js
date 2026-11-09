import styles from "./Experience.module.css";
import Reveal from "../components/reveal";

export const metadata = {
  title: "Experience",
  description:
    "Internships and volunteer work, with what I did in each role.",
};

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Descon",
    duration: "August 2026 – September 2026",
    points: [
      "Learned core programming and software development practices.",
      "Studied database basics and data management.",
      "Practiced C: variables, data types, loops and functions.",
      "Worked through programming exercises to build problem-solving habits.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Humanity Alliance Organization, Lahore",
    duration: "July 2025 – October 2025",
    points: [
      "Built responsive interfaces in React.js and CSS.",
      "Turned Figma designs into reusable UI components.",
      "Improved website load speed through performance fixes.",
      "Used Git and GitHub for branches and team collaboration.",
      "Took part in code reviews.",
    ],
  },

  {
    role: "Humanitarian and Community Development",
    company: "Alkhidmat Foundation Pakistan",
    duration: "June 2026 – August 2026",
    points: [
      "Supported humanitarian and community development work.",
      "Helped organize community programs.",
      "Coordinated day-to-day tasks for assigned projects.",
    ],
  },
];

const Experience = () => {
  return (
    <section className={styles.experience}>
      <div className={styles.container}>
        <span className="eyebrow">Work history</span>
        <h1 className={styles.title}>Professional Experience</h1>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className={styles.card}>
                <div className={styles.cardHead}>
                  <h2 className={styles.role}>{exp.role}</h2>
                  <span className={styles.duration}>{exp.duration}</span>
                </div>

                <h3 className={styles.company}>{exp.company}</h3>

                {exp.points.length > 0 && (
                  <ul className={styles.list}>
                    {exp.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
