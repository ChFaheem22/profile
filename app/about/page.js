import Image from "next/image";
import styles from "./About.module.css";

const skillsData = [
  { skill: "HTML/CSS", level: 90 },
  { skill: "JavaScript ", level: 85 },
  { skill: "React.js", level: 80 },
  { skill: "Next.js", level: 75 },
  { skill: "Git & GitHub", level: 85 },
];

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.profileBox}>
          <Image
            src="/pic-2.jpeg"
            alt="Profile Image"
            width={350}
            height={450}
            className={styles.profileImg}
          />
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
          <h1 className={styles.title}>About Me</h1>
          <p>
            I&rsquo;m Faheem, a <b>Frontend Developer</b> and Software
            Engineering student with a strong focus on building modern,
            responsive, and scalable web applications. I transform ideas into
            clean, intuitive digital experiences.
          </p>
          <p>
            My primary expertise is in <b>React.js</b> and <b>Next.js</b>,
            crafting reusable components, smooth interactions, and optimized
            architectures.
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

          <div className={styles.skillsBox}>
            <h2 className={styles.skillsTitle}>My Skills</h2>
            <div className={styles.skillsGrid}>
              {skillsData.map((item, index) => (
                <div key={index} className={styles.skillCard}>
                  <div className={styles.skillLabel}>
                    <span className={styles.skillName}>{item.skill}</span>
                    <span>{item.level}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div
                      className={styles.skillFill}
                      style={{ "--skill-width": "90%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
