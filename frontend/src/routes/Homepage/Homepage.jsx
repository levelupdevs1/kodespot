import React from "react";
import Container from "../../components/layouts/Container/Container";
import Hero from "../../components/Hero/Hero";
import CourseCard from "../../components/CourseCard/CourseCard";
import FeaturesGrid from "../../components/Features/FeaturesGrid";
import Testimonials from "../../components/Testimonials/Testimonials";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const heroTitle = `Empower Your <strong>Tech</strong> Journey`;

  return (
    <main>
      <Container>
        <Hero
          title={heroTitle}
          subtitle={
            "Learn cutting-edge skills in coding, data science, AI, and more from industry experts."
          }
          ctaText="Explore Courses"
        />
      </Container>

      <section className={styles.popular}>
        <Container>
          <h2 className={styles.sectionTitle}>Popular courses</h2>
          <div className={styles.filters}>
            All <span className={styles.sep}>|</span> Development{" "}
            <span className={styles.sep}>|</span> Business{" "}
            <span className={styles.sep}>|</span> Design
          </div>

          <div className={styles.courseList}>
            <CourseCard
              title="Mastering Web Design & Development"
              image="/course1.jpg"
              category="Design"
              author="Mark Jones"
              price={0}
              rating={5}
              lessons={12}
              students={10}
            />
            <CourseCard
              title="JavaScript & Interactive Web Interfaces"
              image="/course2.jpg"
              category="Development"
              author="Maria Garcia"
              price={100}
              rating={5}
              lessons={15}
              students={100}
            />
            <CourseCard
              title="Responsive Web Design Essentials"
              image="/course3.jpg"
              category="Design"
              author="John Smith"
              price={150}
              rating={5}
              lessons={8}
              students={20}
            />
          </div>

          <div className={styles.explore}>Explore all courses →</div>
        </Container>
      </section>

      <Container>
        <FeaturesGrid />
      </Container>

      <Container>
        <Testimonials />
      </Container>

      <Container>
        <section className={styles.promoSplit}>
          <div className={styles.promoLeft}>
            <div className={styles.promoVisual} aria-hidden>
              <div className={styles.promoCircle}></div>
              <img src="/promo-person.jpg" alt="student" />
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
            <div style={{ marginTop: 12 }}>
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
