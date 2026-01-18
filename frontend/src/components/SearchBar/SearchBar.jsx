import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <div className={styles.wrap}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search for courses"
        value={query}
        onChange={handleChange}
      />
      <button className={styles.icon} aria-label="search">
        <Search size={16} />
      </button>
    </div>
  );
};

export default SearchBar;
