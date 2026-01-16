import React from "react";
import styles from "./FeaturesGrid.module.css";

const items = [
  {
    id: 1,
    title: "Flexible schedule",
    text: "Learn at your own pace with on-demand lessons that fit your busy lifestyle.",
  },
  {
    id: 2,
    title: "Pocket friendly",
    text: "Affordable courses with flexible payment options.",
  },
  {
    id: 3,
    title: "Expert Instructor",
    text: "Learn from industry professionals with years of real-world experience.",
  },
  {
    id: 4,
    title: "Project-Based Learning",
    text: "Build your portfolio with hands-on projects.",
  },
  {
    id: 5,
    title: "Interactive Content",
    text: "Engage with dynamic tutorials, quizzes, and coding challenges.",
  },
  {
    id: 6,
    title: "Up-to-Date Curriculum",
    text: "Stay ahead with courses that reflect the latest industry trends.",
  },
];

const FeaturesGrid = () => {
  return (
    <section className={styles.features}>
      <h2 className={styles.heading}>Online learning wherever and whenever</h2>
      <div className={styles.grid}>
        {items.map((it) => (
          <div key={it.id} className={styles.item}>
            <div className={styles.num}>{it.id}</div>
            <h4>{it.title}</h4>
            <p>{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
