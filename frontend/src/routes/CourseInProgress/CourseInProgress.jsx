import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../../components/layouts/Container/Container";
import Button from "../../components/ui/Button/Button";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  X,
  PlayCircle,
  Check,
  CheckCircle,
  HelpCircle,
  Zap,
  CircleArrowRight,
} from "lucide-react";
import styles from "./CourseInProgress.module.css";
import Cta from "../../components/Cta/Cta";

// Mock course data
const courseData = {
  id: 1,
  title: "Mastering Web Design & Development",
  image: "/course1-large.jpg", // Placeholder
  description:
    "The course is structured to transform your understanding of web design and development into a hands-on skillset that can be directly applied to real-world projects.",
  learnings: [
    "Foundational Learning",
    "Interactive and Practical",
    "Modern Tools and Techniques",
    "Project-Based Learning",
    "Expert-Led Sessions",
  ],
  curriculum: [
    {
      id: 1,
      title: "Introduction to Web Design",
      duration: "13m 20s",
      lessons: [
        {
          id: 1,
          title: "What is Web Design?",
          duration: "5:30",
          completed: true,
        },
        {
          id: 2,
          title: "Tools and Software",
          duration: "8:15",
          completed: true,
        },
      ],
    },
    {
      id: 2,
      title: "Mastering CSS",
      duration: "1h 31m 20s",
      lessons: [
        {
          id: 3,
          title: "CSS Fundamentals",
          duration: "12:45",
          completed: true,
        },
        {
          id: 4,
          title: "Responsive Design",
          duration: "10:20",
          completed: false,
        },
        {
          id: 5,
          title: "Advanced Styling Techniques",
          duration: "15:30",
          completed: false,
        },
      ],
    },
    {
      id: 3,
      title: "JavaScript for Interactive Web Experiences",
      duration: "45m 10s",
      lessons: [
        { id: 6, title: "JS Basics", duration: "10:00", completed: false },
        {
          id: 7,
          title: "DOM Manipulation",
          duration: "15:00",
          completed: false,
        },
      ],
    },
  ],
};

const CourseInProgress = () => {
  const { id } = useParams();
  const [currentLesson, setCurrentLesson] = useState(3); // Start with CSS Fundamentals active mock
  const [activeTab, setActiveTab] = useState("Overview");
  const [openSections, setOpenSections] = useState({ 2: true }); // Mocking section 2 open by default

  const course = courseData;

  // Flattened lessons list for navigation logic
  const allLessons = course.curriculum.flatMap((section) => section.lessons);
  const currentLessonIndex = allLessons.findIndex(
    (l) => l.id === currentLesson
  );
  const currentLessonData = allLessons[currentLessonIndex];

  const handlePrev = () => {
    if (currentLessonIndex > 0) {
      setCurrentLesson(allLessons[currentLessonIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentLessonIndex < allLessons.length - 1) {
      setCurrentLesson(allLessons[currentLessonIndex + 1].id);
    }
  };

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const tabs = ["Overview", "Q&A", "Announcements", "Reviews"];

  return (
    <main className={styles.root}>
      {/* Header */}
      <header className={styles.header}>
        <Container>
          <div className={styles.headerContent}>
            <div className={styles.headerLeft}>
              <Link to="/my-learning" className={styles.backLink}>
                <ArrowLeft size={16} />
                <span>{course.title}</span>
              </Link>
              <h1 className={styles.courseTitle}>
                {currentLessonData?.title || "Lesson Title"}
              </h1>
            </div>

            <div className={styles.headerControls}>
              <button
                className={styles.navButton}
                onClick={handlePrev}
                disabled={currentLessonIndex === 0}
              >
                <ChevronLeft size={20} />
                Previous
              </button>
              <button
                className={styles.navButton}
                onClick={handleNext}
                disabled={currentLessonIndex === allLessons.length - 1}
              >
                Next
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <Container>
        <div className={styles.content}>
          <div className={styles.mainColumn}>
            {/* Video Player */}
            <div className={styles.videoSection}>
              <div className={styles.videoPlayer}>
                {/* Mock Video Player Interface */}
                <video
                  controls
                  className={styles.video}
                  poster="/course-placeholder.jpg"
                >
                  <source src="/sample-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Tabs & Content */}
            <div className={styles.tabsSection}>
              <div className={styles.tabs}>
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`${styles.tab} ${
                      activeTab === tab ? styles.active : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === "Overview" && (
                <div className={styles.overview}>
                  <h3 className={styles.courseDescriptionTitle}>
                    Course description
                  </h3>
                  <p className={styles.descriptionText}>{course.description}</p>

                  <h4 className={styles.learningsTitle}>
                    What you'll learn from this course
                  </h4>
                  <ul className={styles.learningsList}>
                    {course.learnings.map((item, idx) => (
                      <li key={idx} className={styles.learningItem}>
                        <CircleArrowRight
                          size={18}
                          className={styles.learningIcon}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.certificationSection}>
                    <h4 className={styles.learningsTitle}>Certification</h4>
                    <p className={styles.descriptionText}>
                      Upon successful completion of the "Mastering Web Design &
                      Development" course, you will be awarded an
                      industry-recognized certification. This certification
                      represents a significant milestone in your professional
                      journey and serves as a portfolio-worthy testament to your
                      expertise.
                    </p>
                  </div>
                </div>
              )}

              {activeTab !== "Overview" && (
                <div style={{ padding: "2rem 0", color: "#6b7280" }}>
                  Content for {activeTab} would go here.
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
              <h3 className={styles.sidebarTitle}>Course content</h3>
              <button className={styles.closeButton}>
                <X size={20} />
              </button>
            </div>

            <div className={styles.curriculum}>
              {course.curriculum.map((section) => (
                <div key={section.id} className={styles.section}>
                  <button
                    className={styles.sectionHeader}
                    onClick={() => toggleSection(section.id)}
                  >
                    <div className={styles.sectionHeaderText}>
                      <h4 className={styles.sectionTitle}>{section.title}</h4>
                      {/* Optional: Add section progress summary if needed */}
                    </div>
                    {openSections[section.id] ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>

                  {openSections[section.id] && (
                    <ul className={styles.lessonsList}>
                      {section.lessons.map((lesson) => (
                        <li
                          key={lesson.id}
                          className={`${styles.lessonItem} ${
                            lesson.id === currentLesson ? styles.active : ""
                          } ${lesson.completed ? styles.completed : ""}`}
                          onClick={() => setCurrentLesson(lesson.id)}
                        >
                          <div className={styles.lessonCheckbox}>
                            {lesson.completed && <Check size={12} />}
                          </div>

                          <div className={styles.lessonInfo}>
                            <p className={styles.lessonTitle}>{lesson.title}</p>
                          </div>

                          {/* If current lesson, show play icon or something distinct */}
                          {lesson.id === currentLesson && (
                            <PlayCircle
                              size={16}
                              className={styles.playIconMini}
                            />
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Container>

      <section className={styles.ctaBox}>
        <Cta />
      </section>
    </main>
  );
};

export default CourseInProgress;
