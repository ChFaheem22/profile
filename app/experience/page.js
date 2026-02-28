import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section className={styles.experience}>
      <div className={styles.container}>
        <h1 className={styles.title}>Professional Experience</h1>

        <div className={styles.card}>
          <h2 className={styles.role}>Frontend Developer Intern</h2>
          <h3 className={styles.company}>Humanity Alliance Organization, Lahore</h3>
          <span className={styles.duration}>
            July 2025 – October 2025
          </span>

          <ul className={styles.list}>
            <li>
              Developed responsive user interfaces using React.js and modern CSS.
            </li>
            <li>
              Converted Figma designs into reusable and scalable UI components.
            </li>
            <li>
              Optimized website performance and improved load speed.
            </li>
            <li>
              Used Git and GitHub for version control, branch management, and collaborative development workflows.
            </li>
            <li>
              Participated in code reviews and maintained clean code practices.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
