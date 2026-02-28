import React from "react";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h1 className={styles.contactTitle}>Let&rsquo;s Connect</h1>
        <p className={styles.contactSubtitle}>
          I&rsquo;m always open to discussing new opportunities, collaborations, or ideas.
        </p>

        <div className={styles.contactGrid}>

          <a
            href="mailto:faheemchh779@gmail.com"
            className={styles.contactCard}
          >
            <div className={styles.icon}>📧</div>
            <h3>Email</h3>
            <p>faheemchh779@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/faheem-95772830b"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <div className={styles.icon}>💼</div>
            <h3>LinkedIn</h3>
            <p>Connect professionally</p>
          </a>

          <a
            href="https://github.com/ChFaheem22"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <div className={styles.icon}>💻</div>
            <h3>GitHub</h3>
            <p>Explore my repositories</p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contacts;
