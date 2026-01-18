import React from "react";
import Container from "../../components/layouts/Container/Container";
import Hero from "../../components/Hero/Hero";
import CourseCard from "../../components/CourseCard/CourseCard";
import FeaturesGrid from "../../components/Features/FeaturesGrid";
import Testimonials from "../../components/Testimonials/Testimonials";
import styles from "./Homepage.module.css";
import Course1 from "../../assets/course1.jpg";
import Course2 from "../../assets/course2.jpg";
import Course3 from "../../assets/course3.jpg";
import FooterImage from "../../assets/semi_footer_image.png";
import HeroImage from "../../assets/hero_image_1.png";

const Homepage = () => {
  const courses = [
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
  ];

  return (
    <main>
      <Container>
        <Hero
          title={`Empower Your <strong>Tech</strong> Journey`}
          subtitle={
            "Learn cutting-edge skills in coding, data science, AI, and more from industry experts."
          }
          ctaText="Explore Courses"
          image={HeroImage}
        />
      </Container>

      <section className={styles.popular}>
        <Container>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Popular courses</h2>
            <div className={styles.filters}>
              All <span className={styles.sep}>|</span> Development{" "}
              <span className={styles.sep}>|</span> Business{" "}
              <span className={styles.sep}>|</span> Design
            </div>
          </div>

          <div className={styles.courseList}>
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                image={course.image}
                category={course.category}
                author={course.author}
                price={course.price}
                rating={course.rating}
                lessons={course.lessons}
                students={course.students}
              />
            ))}
          </div>

          <div className={styles.explore}>Explore all courses →</div>
        </Container>
      </section>

      <Container>
        <FeaturesGrid />
      </Container>

      <section className={styles.testimonials}>
        <Container>
          <Testimonials />
        </Container>
      </section>

      <Container>
        <section className={styles.promoSplit}>
          <div className={styles.promoLeft}>
            <div className={styles.promoVisual} aria-hidden>
              <img src={FooterImage} alt="student" />
            </div>
          </div>
          <div className={styles.promoRight}>
            <h2>Premium learning experience</h2>
            <p>Providing amazing online courses.</p>
            <ul>
              <li>Master skills that matter to you</li>
              <li>Connect with effective methods</li>
              <li>Increase your learning skills</li>
            </ul>
            <div>
              <a className={styles.ctaLink} href="#">
                Explore Courses
              </a>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Homepage;
