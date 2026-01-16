import React from "react";
import styles from "./Testimonials.module.css";

const reviews = [
  {
    id: 1,
    name: "Abbey Christianna",
    role: "Student at UNILORIN",
    image: "/testi1.jpg",
  },
  {
    id: 2,
    name: "Chizoba Nkemelu",
    role: "Student at Ambrose Ali University",
    image: "/testi2.jpg",
  },
  {
    id: 3,
    name: "Ibrahim Yuuusuf",
    role: "Student at Ambrose FUTA",
    image: "/testi3.jpg",
  },
];

const Testimonials = () => (
  <section className={styles.testimonials}>
    <h2 className={styles.heading}>Over 100+ people trust us</h2>
    <div className={styles.list}>
      {reviews.map((r) => (
        <figure key={r.id} className={styles.card}>
          <img src={r.image} alt={r.name} />
          <figcaption>
            <strong>{r.name}</strong>
            <div className={styles.role}>{r.role}</div>
          </figcaption>
        </figure>
      ))}
    </div>
    <div className={styles.cta}>See all reviews by our students →</div>
  </section>
);

export default Testimonials;
