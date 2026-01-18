import React from "react";
import { Link } from "react-router-dom";
import styles from "./CourseCard.module.css";
import { Book, User, Users } from "lucide-react";

const CourseCard = ({
  id,
  image,
  category,
  author,
  title,
  price,
  lessons,
  students,
  rating,
}) => {
  return (
    <Link to={`/course/${id}`} className={styles.link}>
      <article className={styles.card}>
        <div className={styles.media}>
          <img src={image || "/course-placeholder.jpg"} alt="course" />
          <span className={styles.price}>{price ? `$${price}` : "Free"}</span>
        </div>

        <div className={styles.body}>
          <div className={styles.meta}>
            <span className={styles.category}>{category}</span>
            <span className={styles.dot}>•</span>
            <span className={styles.author}>{author}</span>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.rating}>
            {"★".repeat(Math.round(rating || 5))}{" "}
            <span className={styles.reviews}>(10 Reviews)</span>
          </div>
          <div className={styles.footer}>
            <div className={styles.lessons}>
              <Book size={15} />
              {lessons || 12} Lessons
            </div>
            <div className={styles.students}>
              <Users size={15} />
              {students || 20} Students
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CourseCard;
