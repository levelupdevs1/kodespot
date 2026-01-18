import React from "react";
import styles from "./Hero.module.css";
import Button from "../ui/Button/Button";
import HeroImage from "../../assets/hero_image_1.png";

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
          <Button variant="secondary" size="lg" to="/signup">
            {ctaText || "Explore Courses"}
          </Button>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.visual} aria-hidden>
          <img src={HeroImage} alt="Hero_image" className={styles.person} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
