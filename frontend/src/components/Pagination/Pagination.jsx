import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ total = 4, active = 1, onPageChange }) => {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      <button className={styles.btn} aria-label="prev">
        ←
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`${styles.page} ${active === page ? styles.active : ""}`}
          onClick={() => onPageChange && onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button className={styles.btn} aria-label="next">
        →
      </button>
    </div>
  );
};

export default Pagination;
