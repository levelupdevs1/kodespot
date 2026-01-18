import React from "react";
import styles from "./Testimonials.module.css";
import Testimonial1 from "../../assets/testimonial1.jpg";
import Testimonial2 from "../../assets/testimonial2.png";
import Testimonial3 from "../../assets/testimonial3.jpg";

const reviews = [
  {
    id: 1,
    name: "Abbey Christianna",
    role: "Student at UNILORIN",
    image: Testimonial1,
  },
  {
    id: 2,
    name: "Chizoba Nkemelu",
    role: "Student at Ambrose Ali University",
    image: Testimonial2,
  },
  {
    id: 3,
    name: "Ibrahim Yuuusuf",
    role: "Student at Ambrose FUTA",
    image: Testimonial3,
  },
];

const Testimonials = () => (
  <section>
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
