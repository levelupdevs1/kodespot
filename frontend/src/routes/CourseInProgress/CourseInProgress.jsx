import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../../components/layouts/Container/Container";
import Button from "../../components/ui/Button/Button";
import {
  ArrowLeft,
  Play,
  CheckCircle,
  Clock,
  Star,
  MessageCircle,
  Bell,
  BookOpen,
} from "lucide-react";
import styles from "./CourseInProgress.module.css";

// Mock course data - in real app, fetch from API
const courseData = {
  id: 1,
  title: "Mastering Web Design & Development",
  image: "/course1.jpg",
  category: "Design",
  author: "Mark Jones",
  progress: 15,
  rating: 5,
  lessons: 12,
  students: 10,
  description:
    "'Mastering Web Design & Development' is an immersive program designed to equip learners with both the creative and technical skills necessary to build modern, responsive websites. Whether you are a beginner looking to break into the field or an experienced professional aiming to update your skills, this course offers an ideal balance between theory and practice. It introduces you to essential concepts such as layout, color theory, user experience (UX) design, as well as the technical aspects of HTML, CSS, JavaScript, and backend integrations.",
  learnings: [
    "Foundational learning",
    "Interactive and Practical",
    "Modern Tools and Techniques",
    "Project-Based Learning",
    "Expert-Led Sessions",
  ],
  curriculum: [
    {
      id: 1,
      title: "Introduction to Web Design",
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
        {
          id: 3,
          title: "Basic Principles",
          duration: "12:45",
          completed: false,
        },
      ],
    },
    {
      id: 2,
      title: "HTML Fundamentals",
      lessons: [
        { id: 4, title: "HTML Structure", duration: "10:20", completed: false },
        {
          id: 5,
          title: "Tags and Elements",
          duration: "15:30",
          completed: false,
        },
      ],
    },
    // Add more sections as needed
  ],
};

const CourseInProgress = () => {
  const { id } = useParams();
  const [currentLesson, setCurrentLesson] = useState(1); // Mock current lesson
  const [activeTab, setActiveTab] = useState("Overview");

  // In real app, find course by id
  const course = courseData;

  const currentLessonData = course.curriculum
    .flatMap((section) => section.lessons)
    .find((lesson) => lesson.id === currentLesson);

  const tabs = ["Overview", "QA", "Announcements", "Review"];

  return (
    <main className={styles.root}>
      {/* Header */}
      <header className={styles.header}>
        <Container>
          <div className={styles.headerContent}>
            <Link to="/my-learning" className={styles.backLink}>
              <ArrowLeft size={20} />
              Back to My Learning
            </Link>
            <div className={styles.courseInfo}>
              <h1 className={styles.courseTitle}>{course.title}</h1>
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
            </div>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <Container>
        <div className={styles.content}>
          {/* Video Player */}
          <div className={styles.videoSection}>
            <div className={styles.videoPlayer}>
              <video controls className={styles.video} poster={course.image}>
                <source src="/sample-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={styles.videoInfo}>
              <h2 className={styles.lessonTitle}>
                {currentLessonData?.title || "Lesson Title"}
              </h2>
              <div className={styles.lessonMeta}>
                <span>Lesson {currentLesson}</span>
                <span>•</span>
                <span>{currentLessonData?.duration || "0:00"}</span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <h3 className={styles.sidebarTitle}>Course Content</h3>
            <div className={styles.curriculum}>
              {course.curriculum.map((section) => (
                <div key={section.id} className={styles.section}>
                  <h4 className={styles.sectionTitle}>{section.title}</h4>
                  <ul className={styles.lessonsList}>
                    {section.lessons.map((lesson) => (
                      <li
                        key={lesson.id}
                        className={`${styles.lessonItem} ${
                          lesson.id === currentLesson ? styles.active : ""
                        }`}
                        onClick={() => setCurrentLesson(lesson.id)}
                      >
                        <div className={styles.lessonContent}>
                          {lesson.completed ? (
                            <CheckCircle
                              size={16}
                              className={styles.completedIcon}
                            />
                          ) : lesson.id === currentLesson ? (
                            <Play size={16} className={styles.playIcon} />
                          ) : (
                            <Clock size={16} className={styles.clockIcon} />
                          )}
                          <span className={styles.lessonTitle}>
                            {lesson.title}
                          </span>
                        </div>
                        <span className={styles.lessonDuration}>
                          {lesson.duration}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* Navigation */}
        <div className={styles.navigation}>
          <Button variant="ghost" size="lg">
            Previous Lesson
          </Button>
          <Button variant="primary" size="lg">
            Next Lesson
          </Button>
        </div>
      </Container>

      {/* Tabs Section */}
      <section className={styles.tabsSection}>
        <Container>
          <div className={styles.tabsContainer}>
            <div className={styles.tabs}>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`${styles.tab} ${
                    activeTab === tab ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "QA" && <MessageCircle size={16} />}
                  {tab === "Announcements" && <Bell size={16} />}
                  {tab === "Review" && <Star size={16} />}
                  {tab === "Overview" && <BookOpen size={16} />}
                  <span>{tab}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.tabContent}>
            {activeTab === "Overview" && (
              <div className={styles.overview}>
                <h3>Course Overview</h3>
                <p>{course.description}</p>
                <div className={styles.overviewGrid}>
                  <div className={styles.overviewItem}>
                    <h4>What You'll Learn</h4>
                    <ul>
                      {course.learnings.map((learning, index) => (
                        <li key={index}>{learning}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.overviewItem}>
                    <h4>Requirements</h4>
                    <ul>
                      <li>Basic computer skills</li>
                      <li>Internet connection</li>
                      <li>Passion for learning</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "QA" && (
              <div className={styles.qa}>
                <h3>Q&A</h3>
                <div className={styles.qaList}>
                  <div className={styles.qaItem}>
                    <div className={styles.question}>
                      <strong>
                        Q: How long do I have access to the course?
                      </strong>
                    </div>
                    <div className={styles.answer}>
                      A: You have lifetime access to this course.
                    </div>
                  </div>
                  <div className={styles.qaItem}>
                    <div className={styles.question}>
                      <strong>Q: Can I download the videos?</strong>
                    </div>
                    <div className={styles.answer}>
                      A: Videos can be viewed online only for copyright reasons.
                    </div>
                  </div>
                  <div className={styles.qaItem}>
                    <div className={styles.question}>
                      <strong>Q: Do I get a certificate?</strong>
                    </div>
                    <div className={styles.answer}>
                      A: Yes, upon completion you'll receive a certificate.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Announcements" && (
              <div className={styles.announcements}>
                <h3>Announcements</h3>
                <div className={styles.announcementList}>
                  <div className={styles.announcement}>
                    <div className={styles.announcementHeader}>
                      <h4>Welcome to the course!</h4>
                      <span>2 days ago</span>
                    </div>
                    <p>
                      Welcome everyone! We're excited to have you here. Let's
                      start learning!
                    </p>
                  </div>
                  <div className={styles.announcement}>
                    <div className={styles.announcementHeader}>
                      <h4>Assignment Due</h4>
                      <span>1 week ago</span>
                    </div>
                    <p>
                      Don't forget to submit your first assignment by Friday.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Review" && (
              <div className={styles.reviews}>
                <h3>Reviews</h3>
                <div className={styles.reviewsSummary}>
                  <div className={styles.rating}>
                    <span className={styles.ratingNumber}>{course.rating}</span>
                    <div className={styles.stars}>
                      {"★".repeat(Math.round(course.rating))}
                    </div>
                    <span className={styles.reviewCount}>
                      ({course.students} reviews)
                    </span>
                  </div>
                </div>
                <div className={styles.reviewsList}>
                  <div className={styles.reviewItem}>
                    <div className={styles.reviewAvatar}>
                      <img src="/review-avatar-1.jpg" alt="Student" />
                    </div>
                    <div className={styles.reviewContent}>
                      <div className={styles.reviewHeader}>
                        <span className={styles.reviewAuthor}>
                          Sarah Johnson
                        </span>
                        <span className={styles.reviewDate}>2 weeks ago</span>
                      </div>
                      <div className={styles.reviewRating}>
                        <div className={styles.reviewStars}>★★★★★</div>
                      </div>
                      <p className={styles.reviewText}>
                        Excellent course! Very comprehensive and
                        well-structured. The instructor explains everything
                        clearly.
                      </p>
                    </div>
                  </div>
                  <div className={styles.reviewItem}>
                    <div className={styles.reviewAvatar}>
                      <img src="/review-avatar-2.jpg" alt="Student" />
                    </div>
                    <div className={styles.reviewContent}>
                      <div className={styles.reviewHeader}>
                        <span className={styles.reviewAuthor}>Mike Chen</span>
                        <span className={styles.reviewDate}>1 month ago</span>
                      </div>
                      <div className={styles.reviewRating}>
                        <div className={styles.reviewStars}>★★★★☆</div>
                      </div>
                      <p className={styles.reviewText}>
                        Great content, but some sections could be updated.
                        Overall very satisfied with the learning experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
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

export default CourseInProgress;
