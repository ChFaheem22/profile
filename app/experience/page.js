import styles from "./Experience.module.css";
import Reveal from "../components/reveal";

export const metadata = {
  title: "Experience",
  description:
    "Professional experience across frontend development, humanitarian work, and software development.",
};

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Descon",
    duration: "August 2026 – September 2026",
    points: [
      "Learned software development fundamentals and programming best practices.",
      "Developed a foundational understanding of database concepts and data management.",
      "Strengthened C programming skills, including variables, data types, loops, and functions.",
      "Practiced problem-solving and logical thinking through programming exercises.",
      "Gained exposure to software development workflows and technical concepts.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Humanity Alliance Organization, Lahore",
    duration: "July 2025 – October 2025",
    points: [
      "Developed responsive user interfaces using React.js and modern CSS.",
      "Converted Figma designs into reusable and scalable UI components.",
      "Optimized website performance and improved load speed.",
      "Used Git and GitHub for version control, branch management, and collaborative development workflows.",
      "Participated in code reviews and maintained clean code practices.",
    ],
  },

  {
    role: "Humanitarian and Community Development",
    company: "Alkhidmat Foundation Pakistan",
    duration: "June 2026 – August 2026",
    points: [
      "Supported humanitarian initiatives and community development activities.",
      "Assisted with organizing community programs and coordinating related activities.",
      "Contributed to activities aimed at addressing community needs and promoting social welfare.",
      "Supported day-to-day tasks and coordination related to assigned projects.",
    ],
  },
];

const Experience = () => {
  return (
    <section className={styles.experience}>
      <div className={styles.container}>
        <span className="eyebrow">WORK HISTORY</span>
        <h1 className={styles.title}>Professional Experience</h1>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <Reveal key={i} delay={i * 0.06}>
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
