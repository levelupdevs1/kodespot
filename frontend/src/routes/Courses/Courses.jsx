import React, { useState } from "react";
import Container from "../../components/layouts/Container/Container";
import Hero from "../../components/Hero/Hero";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterTabs from "../../components/FilterTabs/FilterTabs";
import CourseCard from "../../components/CourseCard/CourseCard";
import Pagination from "../../components/Pagination/Pagination";
import Button from "../../components/ui/Button/Button";
import styles from "./Courses.module.css";
import Course1 from "../../assets/course1.jpg";
import Course2 from "../../assets/course2.jpg";
import Course3 from "../../assets/course3.jpg";
import HeroImage from "../../assets/hero_image_2.png";
import Cta from "../../components/Cta/Cta";

const coursesData = [
  {
    id: 1,
    title: "Mastering Web Design & Development",
    image: Course1,
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
    image: Course2,
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
    image: Course3,
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
    image: Course1,
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
    image: Course2,
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
    image: Course3,
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

  return (
    <main className={styles.root}>
      <Container>
        <Hero
          pretitle={"Our online courses"}
          title={`Best eLearning <strong>Technical Training</strong> Classes.`}
          subtitle=""
          ctaText={""}
          image={HeroImage}
        />
      </Container>

      <section className={styles.explore}>
        <Container>
          <div className={styles.header}>
            <h3>Popular courses</h3>
            <SearchBar />
            <FilterTabs active={activeFilter} onFilter={setActiveFilter} />
          </div>

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

      <section className={styles.ctaBox}>
        <Cta />
      </section>
    </main>
  );
};

export default Courses;
