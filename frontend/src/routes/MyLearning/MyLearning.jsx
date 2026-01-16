import React, { useState } from "react";
import Container from "../../components/layouts/Container/Container";
import Button from "../../components/ui/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterTabs from "../../components/FilterTabs/FilterTabs";
import { Search } from "lucide-react";
import styles from "./MyLearning.module.css";

const enrolledCourses = [
  {
    id: 1,
    title: "Mastering Web Design & Development",
    image: "/course1.jpg",
    category: "Design",
    author: "Mark Jones",
    progress: 15,
    rating: 5,
    lessons: 12,
    students: 10,
  },
  {
    id: 2,
    title: "JavaScript & Interactive Web Interfaces",
    image: "/course2.jpg",
    category: "Development",
    author: "Maria Garcia",
    progress: 0,
    rating: 5,
    lessons: 15,
    students: 100,
  },
  {
    id: 3,
    title: "Responsive Web Design Essentials",
    image: "/course3.jpg",
    category: "Design",
    author: "John Smith",
    progress: 25,
    rating: 5,
    lessons: 8,
    students: 20,
  },
  {
    id: 4,
    title: "Mastering Web Design & Development",
    image: "/course1.jpg",
    category: "Design",
    author: "Mark Jones",
    progress: 60,
    rating: 5,
    lessons: 12,
    students: 10,
  },
  {
    id: 5,
    title: "JavaScript & Interactive Web Interfaces",
    image: "/course2.jpg",
    category: "Development",
    author: "Maria Garcia",
    progress: 40,
    rating: 5,
    lessons: 15,
    students: 100,
  },
  {
    id: 6,
    title: "Responsive Web Design Essentials",
    image: "/course3.jpg",
    category: "Design",
    author: "John Smith",
    progress: 80,
    rating: 5,
    lessons: 8,
    students: 20,
  },
];

const MyLearning = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = enrolledCourses.filter((course) => {
    const matchesCategory =
      activeFilter === "All" || course.category === activeFilter;
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className={styles.root}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Container>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <p className={styles.subtitle}>Your enrolled courses</p>
              <h1 className={styles.title}>Continue your learning journey</h1>
            </div>
            <div className={styles.heroRight}>
              <div className={styles.heroImage}>
                <img src="/hero-person.jpg" alt="Learning" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Courses Section */}
      <section className={styles.coursesSection}>
        <Container>
          {/* Filter and Search */}
          <div className={styles.controlsContainer}>
            <div className={styles.filterControl}>
              <label>Filter</label>
              <select className={styles.selectFilter} defaultValue="recent">
                <option value="recent">Recent Accessed</option>
                <option value="progress">Most Progress</option>
                <option value="date">Enrollment Date</option>
              </select>
            </div>

            <div className={styles.searchControl}>
              <input
                type="text"
                placeholder="Search for courses"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <Search size={20} className={styles.searchIcon} />
            </div>

            <div className={styles.filterTabs}>
              <FilterTabs active={activeFilter} onFilter={setActiveFilter} />
            </div>
          </div>

          {/* Courses Grid */}
          <div className={styles.coursesGrid}>
            {filtered.map((course) => (
              <div
                key={course.id}
                className={`${styles.courseCard} ${
                  course.progress > 0 ? styles.inProgress : ""
                }`}
              >
                <div className={styles.courseImage}>
                  <img src={course.image} alt={course.title} />
                </div>

                <div className={styles.courseBody}>
                  <div className={styles.courseMeta}>
                    <span className={styles.category}>{course.category}</span>
                    <span className={styles.dot}>•</span>
                    <span className={styles.author}>{course.author}</span>
                  </div>

                  <h3 className={styles.courseTitle}>{course.title}</h3>

                  <div className={styles.progressContainer}>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <span className={styles.progressText}>
                      {course.progress}% complete
                    </span>
                  </div>

                  <div className={styles.courseFooter}>
                    <Button
                      variant={course.progress > 0 ? "primary" : "secondary"}
                      size="sm"
                      fullWidth
                      to={`/course/${course.id}/learn`}
                    >
                      {course.progress > 0 ? "Resume Course" : "Start Course"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className={styles.paginationContainer}>
            <div className={styles.pagination}>
              <button className={styles.paginationBtn} title="Previous">
                ←
              </button>
              <button className={`${styles.paginationBtn} ${styles.active}`}>
                01
              </button>
              <button className={styles.paginationBtn}>02</button>
              <button className={styles.paginationBtn}>03</button>
              <button className={styles.paginationBtn}>04</button>
              <button className={styles.paginationBtn} title="Next">
                →
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <Container>
        <section className={styles.cta}>
          <h2>Teach the world online</h2>
          <p>
            Create an online video course, reach students across the globe, and
            earn money
          </p>
          <Button variant="primary" size="md">
            Teach on KodeSpot
          </Button>
        </section>
      </Container>
    </main>
  );
};

export default MyLearning;
