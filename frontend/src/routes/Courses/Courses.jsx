import React, { useState } from "react";
import Container from "../../components/layouts/Container/Container";
import Hero from "../../components/Hero/Hero";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterTabs from "../../components/FilterTabs/FilterTabs";
import CourseCard from "../../components/CourseCard/CourseCard";
import Pagination from "../../components/Pagination/Pagination";
import Button from "../../components/ui/Button/Button";
import styles from "./Courses.module.css";

const coursesData = [
  {
    id: 1,
    title: "Mastering Web Design & Development",
    image: "/course1.jpg",
    category: "Design",
    author: "Mark Jones",
    price: 0,
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
    price: 100,
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
    price: 150,
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
    price: 0,
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
    price: 100,
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
    price: 150,
    rating: 5,
    lessons: 8,
    students: 20,
  },
];

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered =
    activeFilter === "All"
      ? coursesData
      : coursesData.filter((c) => c.category === activeFilter);

  const heroTitle = `Our online courses<br/><strong>Best eLearning Technical Training Classes.</strong>`;

  return (
    <main className={styles.root}>
      <Container>
        <Hero title={heroTitle} subtitle="" />
      </Container>

      <section className={styles.explore}>
        <Container>
          <div className={styles.header}>
            <h3>Popular courses</h3>
            <SearchBar />
          </div>

          <FilterTabs active={activeFilter} onFilter={setActiveFilter} />

          <div className={styles.grid}>
            {filtered.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>

          <Pagination
            active={currentPage}
            total={4}
            onPageChange={setCurrentPage}
          />
        </Container>
      </section>

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

export default Courses;
