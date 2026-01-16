import React from "react";
import styles from "./FilterTabs.module.css";

const FilterTabs = ({
  tabs = ["All", "Development", "Business", "Design", "Marketing"],
  active = "All",
  onFilter,
}) => {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`${styles.tab} ${active === tab ? styles.active : ""}`}
          onClick={() => onFilter && onFilter(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
