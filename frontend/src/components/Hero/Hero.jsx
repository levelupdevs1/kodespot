import React from "react";
import styles from "./Hero.module.css";
import Button from "../ui/Button/Button";

const Hero = ({ title, subtitle, ctaText }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.actions}>
          <Button variant="primary" size="lg" to="/signup">
            {ctaText || "Explore Courses"}
          </Button>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.visual} aria-hidden>
          <div className={styles.circle}></div>
          <div className={styles.decor}></div>
          <img src="/hero-person.png" alt="Learner" className={styles.person} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
