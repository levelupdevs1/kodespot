import React from "react";
import styles from "./Hero.module.css";
import Button from "../ui/Button/Button";

const Hero = ({ title, pretitle, subtitle, ctaText, image }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <p className={styles.subtitle}>{pretitle}</p>
        <h1
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.actions}>
          {ctaText && (
            <Button variant="secondary" size="lg" to="/signup">
              {ctaText}
            </Button>
          )}
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.visual} aria-hidden>
          <img src={image} alt="Hero_image" className={styles.person} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
