import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/layouts/Container/Container";
import Button from "../../components/ui/Button/Button";
import CourseCard from "../../components/CourseCard/CourseCard";
import {
  Clock,
  Users,
  Globe,
  BookOpen,
  Award,
  PlayCircle,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Check,
  Zap,
  CircleArrowRight,
  ChevronDown,
  ChevronUp,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import styles from "./CourseDetails.module.css";
import Course1 from "../../assets/course1.jpg";
import Course2 from "../../assets/course2.jpg";
import Course3 from "../../assets/course3.jpg";
import Instructor from "../../assets/instructor.png";
import SideImage from "../../assets/social_integrated_person.jpg";
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
    lessons: 10,
    students: 10,
    duration: "24 Hours",
    language: "English",
    certificate: "Yes",
    description:
      "The course is structured to transform your understanding of web design and development into a hands-on skillset that can be directly applied to real-world projects.",
    learnings: [
      "Foundational Learning",
      "Interactive and Practical",
      "Modern Tools and Techniques",
      "Project-Based Learning",
      "Expert-Led Sessions",
    ],
    certification:
      "Upon successful completion of the 'Mastering Web Design & Development' course, you will be awarded an industry-recognized certification. This certification represents a significant milestone in your professional journey and serves as a portfolio-worthy testament to your expertise.",
    reviews: {
      averageRating: 5,
      totalReviews: 10,
    },
    instructor: {
      name: "Mark Jones",
      image: "/instructor-1.jpg",
    },
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
    duration: "30 Hours",
    language: "English",
    certificate: "Yes",
    description:
      "Master JavaScript to build interactive and dynamic web interfaces.",
    learnings: ["ES6+", "DOM Manipulation", "Async JS"],
    certification: "Receive a JS Developer certificate.",
    reviews: { averageRating: 4.8, totalReviews: 85 },
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
    duration: "10 Hours",
    language: "English",
    certificate: "Yes",
    description:
      "Learn to create websites that work beautifully on all devices.",
    learnings: ["Mobile-first", "Flexbox", "Grid"],
    certification: "Responsive Design Certificate.",
    reviews: { averageRating: 4.9, totalReviews: 92 },
  },
];

const relatedCourses = [
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

const CourseDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("Overview");
  const [openSections, setOpenSections] = useState({ 1: true }); // Default 2nd module open as in design

  const courseContent = [
    {
      title: "Introduction to Web Design",
      lessons: [
        { title: "Welcome to the Course", duration: "10:00" },
        { title: "Web Design vs Web Development", duration: "15:00" },
      ],
    },
    {
      title: "Mastering CSS",
      lessons: [
        { title: "CSS Fundamentals", duration: "20:00" },
        { title: "Responsive Design", duration: "25:00" },
        { title: "Advanced Styling Techniques", duration: "30:00" },
      ],
    },
    {
      title: "JavaScript for Interactive Web Experiences",
      lessons: [
        { title: "JS Basics", duration: "12:00" },
        { title: "DOM Manipulation", duration: "18:00" },
      ],
    },
  ];

  // Find course by ID or default to first
  const course =
    coursesData.find((c) => c.id === parseInt(id)) || coursesData[0];

  const tabs = ["Overview", "Content", "Instructor", "Review"];

  return (
    <main className={styles.root}>
      <Container>
        <div className={styles.pageContent}>
          {/* Main Left Column */}
          <div className={styles.mainColumn}>
            {/* Hero Image */}
            <div className={styles.heroImageContainer}>
              <img
                src={course.image}
                alt={course.title}
                className={styles.heroImage}
              />
              <div className={styles.playOverlay}>
                <PlayCircle size={32} color="#111" />
              </div>
            </div>

            {/* Course Header Info */}
            <div className={styles.courseHeader}>
              <h1 className={styles.title}>{course.title}</h1>

              <div className={styles.metaRow}>
                <div className={styles.instructor}>
                  <img
                    src={Instructor}
                    alt="Instructor"
                    className={styles.instructorAvatar}
                  />
                  <span>
                    Instructor: <strong>{course.author}</strong>
                  </span>
                </div>
                <span>
                  Categories: <strong>{course.category}</strong>
                </span>
                <div className={styles.rating}>
                  <div className={styles.stars}>
                    {"★".repeat(Math.round(course.rating))}
                  </div>
                  <span className={styles.reviewCount}>
                    ({course.reviews?.totalReviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div>
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

              {/* Tab Content */}
              <div className={styles.tabContent}>
                {activeTab === "Overview" && (
                  <div className={styles.overviewContent}>
                    <div>
                      <h3 className={styles.sectionTitle}>
                        Course description
                      </h3>
                      <p className={styles.descriptionText}>
                        {course.description}
                      </p>
                    </div>

                    <div>
                      <h3 className={styles.sectionTitle}>
                        What you'll learn from this course
                      </h3>
                      <div className={styles.learningList}>
                        {course.learnings.map((item, index) => (
                          <div key={index} className={styles.learningItem}>
                            <span className={styles.checkIcon}>
                              <CircleArrowRight size={12} />
                            </span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className={styles.sectionTitle}>Certification</h3>
                      <p className={styles.descriptionText}>
                        {course.certification}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "Content" && (
                  <div className={styles.curriculumContainer}>
                    {courseContent.map((module, index) => {
                      const isOpen = openSections[index];
                      return (
                        <div key={index} className={styles.moduleCard}>
                          <button
                            className={styles.moduleHeader}
                            onClick={() =>
                              setOpenSections((prev) => ({
                                ...prev,
                                [index]: !prev[index],
                              }))
                            }
                          >
                            <span className={styles.moduleTitle}>
                              {module.title}
                            </span>
                            {isOpen ? (
                              <ChevronUp size={20} />
                            ) : (
                              <ChevronDown size={20} />
                            )}
                          </button>
                          {isOpen && (
                            <div className={styles.moduleLessons}>
                              {module.lessons.map((lesson, lIndex) => (
                                <div key={lIndex} className={styles.lessonItem}>
                                  <div className={styles.lessonInfo}>
                                    <PlayCircle
                                      size={16}
                                      className={styles.lessonIcon}
                                    />
                                    <span>{lesson.title}</span>
                                  </div>
                                  {/* Optional duration or preview indicator could go here */}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {activeTab === "Instructor" && (
                  <div className={styles.instructorTab}>
                    <img
                      src={Instructor}
                      alt="Instructor"
                      className={styles.instructorLargeImage}
                    />
                    <div className={styles.instructorInfo}>
                      <h3 className={styles.instructorName}>
                        {course.instructor.name}
                      </h3>
                      <p className={styles.instructorTitle}>Web Designer</p>
                      <p className={styles.instructorBio}>
                        Lorem ipsum is simply dummy text of the printing
                        typesetting industry. Lorem ipsum has been the
                        industry's standard.
                      </p>
                      <div className={styles.instructorSocials}>
                        <Linkedin size={20} className={styles.socialIcon} />
                        <div className={styles.socialIcon}>
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                            width="20"
                            alt="WA"
                          />
                        </div>
                        <Facebook size={20} className={styles.socialIcon} />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "Review" && (
                  <div className={styles.reviewTab}>
                    {/* Rating Summary */}
                    <div className={styles.ratingSummary}>
                      <div className={styles.ratingScoreBox}>
                        <div className={styles.bigScore}>4.9</div>
                        <div className={styles.scoreStars}>{"★".repeat(5)}</div>
                        <button className={styles.totalReviewsBtn}>
                          100 Reviews
                        </button>
                      </div>
                      <div className={styles.ratingDistribution}>
                        <div className={styles.distRow}>
                          <div className={styles.distStars}>
                            {"★".repeat(5)}
                          </div>
                          <div className={styles.distBar}>
                            <div
                              className={styles.distFill}
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                          <div className={styles.distPercent}>80%</div>
                        </div>
                        <div className={styles.distRow}>
                          <div className={styles.distStars}>
                            {"★".repeat(4)}
                          </div>
                          <div className={styles.distBar}>
                            <div
                              className={styles.distFill}
                              style={{ width: "10%" }}
                            ></div>
                          </div>
                          <div className={styles.distPercent}>10%</div>
                        </div>
                        <div className={styles.distRow}>
                          <div className={styles.distStars}>
                            {"★".repeat(3)}
                          </div>
                          <div className={styles.distBar}>
                            <div
                              className={styles.distFill}
                              style={{ width: "5%" }}
                            ></div>
                          </div>
                          <div className={styles.distPercent}>05%</div>
                        </div>
                        <div className={styles.distRow}>
                          <div className={styles.distStars}>
                            {"★".repeat(2)}
                          </div>
                          <div className={styles.distBar}>
                            <div
                              className={styles.distFill}
                              style={{ width: "3%" }}
                            ></div>
                          </div>
                          <div className={styles.distPercent}>03%</div>
                        </div>
                        <div className={styles.distRow}>
                          <div className={styles.distStars}>
                            {"★".repeat(1)}
                          </div>
                          <div className={styles.distBar}>
                            <div
                              className={styles.distFill}
                              style={{ width: "2%" }}
                            ></div>
                          </div>
                          <div className={styles.distPercent}>02%</div>
                        </div>
                      </div>
                    </div>

                    {/* Reviews List */}
                    <div className={styles.reviewsList}>
                      {[1, 2].map((review) => (
                        <div key={review} className={styles.reviewItem}>
                          <div className={styles.reviewerHeader}>
                            <img
                              src={Instructor}
                              alt="Reviewer"
                              className={styles.reviewerAvatar}
                            />
                            <div className={styles.reviewerMeta}>
                              <div className={styles.stars}>
                                {"★".repeat(5)}
                              </div>
                              <h4 className={styles.reviewerName}>
                                Herman miller
                              </h4>
                              <span className={styles.reviewDate}>
                                06 April 2023
                              </span>
                            </div>
                            <div className={styles.reviewHelpful}>
                              <span>Helpful?</span>
                              <ThumbsUp size={16} />
                              <ThumbsDown size={16} />
                            </div>
                          </div>
                          <p className={styles.reviewText}>
                            Lorem ipsum dolor sit sed do eiusmod tempor
                            incididunt labore enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate.
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className={styles.showAllReviews}>
                      <button className={styles.showAllBtn}>
                        Show all reviews
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar Stats */}
          <aside className={styles.sidebarColumn}>
            <div className={styles.statsCard}>
              {/* Video Preview in Sidebar */}
              <div className={styles.sidebarVideoContainer}>
                <img
                  src={SideImage}
                  alt="Course Preview"
                  className={styles.sidebarVideoImage}
                />
                {/* <div className={styles.playOverlaySmall}>
                  <PlayCircle size={48} color="#0056D2" fill="white" />
                </div> */}
              </div>

              <div className={styles.statsList}>
                <div className={styles.statItem}>
                  <div className={styles.statLabel}>
                    <Clock size={18} /> Duration
                  </div>
                  <span className={styles.statValue}>{course.duration}</span>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statLabel}>
                    <Users size={18} /> Enrolled
                  </div>
                  <span className={styles.statValue}>
                    {course.students} Students
                  </span>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statLabel}>
                    <Globe size={18} /> Language
                  </div>
                  <span className={styles.statValue}>{course.language}</span>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statLabel}>
                    <BookOpen size={18} /> Lessons
                  </div>
                  <span className={styles.statValue}>{course.lessons}</span>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statLabel}>
                    <Award size={18} /> Certificate
                  </div>
                  <span className={styles.statValue}>{course.certificate}</span>
                </div>
              </div>

              <div className={styles.purchaseSection}>
                <Button variant="primary" size="md" fullWidth>
                  Price: $120
                </Button>
                <Button variant="secondary" size="md" fullWidth>
                  Purchase
                </Button>
              </div>

              <div className={styles.socialLinks}>
                <Linkedin size={20} className={styles.socialIcon} />
                <Instagram size={20} className={styles.socialIcon} />
                <Twitter size={20} className={styles.socialIcon} />
                <Facebook size={20} className={styles.socialIcon} />
              </div>
            </div>
          </aside>
        </div>
      </Container>

      {/* Related Courses (Preserved as per instruction to only work on main content, but keeping it ensures page completeness) */}
      <section className={styles.relatedSection}>
        <Container>
          <h2>Related courses</h2>
          <div className={styles.relatedGrid}>
            {relatedCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaBox}>
        <Cta />
      </section>
    </main>
  );
};

export default CourseDetails;
