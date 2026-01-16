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
  Share2,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  ChevronDown,
  Play,
} from "lucide-react";
import styles from "./CourseDetails.module.css";

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
    description:
      "'Mastering Web Design & Development' is an immersive program designed to equip learners with both the creative and technical skills necessary to build modern, responsive websites. Whether you are a beginner looking to break into the field or an experienced professional aiming to update your skills, this course offers an ideal balance between theory and practice. It introduces you to essential concepts such as layout, color theory, user experience (UX) design, as well as the technical aspects of HTML, CSS, JavaScript, and backend integrations.",
    learnings: [
      "Foundational learning",
      "Interactive and Practical",
      "Modern Tools and Techniques",
      "Project-Based Learning",
      "Expert-Led Sessions",
    ],
    certification:
      "Upon successful completion of the 'Mastering Web Design & Development' course, you will be awarded an industry-recognized certification. This certification represents a significant milestone in your learning journey and serves as a portfolio-worthy testament to your expertise.",
    curriculum: [
      {
        id: 1,
        title: "Introduction to Web Design",
        lessons: [],
      },
      {
        id: 2,
        title: "Mastering CSS",
        expanded: true,
        lessons: [
          { id: 1, title: "CSS Fundamentals", duration: "45 min" },
          { id: 2, title: "Responsive Design", duration: "60 min" },
          { id: 3, title: "Advanced Styling Techniques", duration: "50 min" },
        ],
      },
      {
        id: 3,
        title: "JavaScript for Interactive Web Experiences",
        lessons: [],
      },
    ],
    instructor: {
      name: "Mark Jones",
      title: "Web Designer",
      bio: "Lorem ipsum is simply dummy text of the printing typesetting industry. Lorem ipsum has been the industry's standard.",
      image: "/instructor-1.jpg",
      social: {
        linkedin: "https://linkedin.com",
        whatsapp: "https://whatsapp.com",
        facebook: "https://facebook.com",
      },
    },
    reviews: {
      averageRating: 4.9,
      totalReviews: 100,
      breakdown: [
        { stars: 5, percentage: 80, count: 80 },
        { stars: 4, percentage: 10, count: 10 },
        { stars: 3, percentage: 5, count: 5 },
        { stars: 2, percentage: 3, count: 3 },
        { stars: 1, percentage: 2, count: 2 },
      ],
      items: [
        {
          id: 1,
          author: "Herman Miller",
          date: "06 April 2023",
          rating: 5,
          text: "Lorem ipsum dolor sit sed eiusmod tempor incididunt labore enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
          helpful: 12,
          unhelpful: 2,
          avatar: "/review-avatar-1.jpg",
        },
        {
          id: 2,
          author: "Herman Miller",
          date: "06 April 2023",
          rating: 5,
          text: "Lorem ipsum dolor sit sed eiusmod tempor incididunt labore enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
          helpful: 8,
          unhelpful: 1,
          avatar: "/review-avatar-2.jpg",
        },
      ],
    },
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
    description:
      "Master JavaScript to build interactive and dynamic web interfaces. This course covers modern JavaScript practices, DOM manipulation, ES6+ features, and frameworks for creating engaging user experiences.",
    learnings: [
      "ES6+ JavaScript Mastery",
      "DOM Manipulation",
      "Async Programming",
      "API Integration",
      "Performance Optimization",
    ],
    certification:
      "Earn a recognized certification demonstrating your JavaScript expertise and ability to build professional web applications.",
    curriculum: [
      {
        id: 1,
        title: "JavaScript Basics",
        expanded: false,
        lessons: [
          { id: 1, title: "Variables and Data Types", duration: "40 min" },
          { id: 2, title: "Functions and Scope", duration: "50 min" },
        ],
      },
      {
        id: 2,
        title: "DOM Manipulation",
        expanded: false,
        lessons: [
          { id: 1, title: "Selecting Elements", duration: "35 min" },
          { id: 2, title: "Modifying DOM", duration: "45 min" },
        ],
      },
    ],
    instructor: {
      name: "Maria Garcia",
      title: "JavaScript Developer",
      bio: "Expert JavaScript developer with 10+ years of experience in building interactive web applications. Passionate about teaching and mentoring the next generation of developers.",
      image: "/instructor-2.jpg",
      social: {
        linkedin: "https://linkedin.com",
        whatsapp: "https://whatsapp.com",
        facebook: "https://facebook.com",
      },
    },
    reviews: {
      averageRating: 4.7,
      totalReviews: 85,
      breakdown: [
        { stars: 5, percentage: 75, count: 64 },
        { stars: 4, percentage: 15, count: 13 },
        { stars: 3, percentage: 7, count: 6 },
        { stars: 2, percentage: 2, count: 2 },
        { stars: 1, percentage: 1, count: 1 },
      ],
      items: [
        {
          id: 1,
          author: "Sarah Johnson",
          date: "15 March 2023",
          rating: 5,
          text: "Excellent course with clear explanations and practical examples. The instructor makes complex concepts easy to understand.",
          helpful: 15,
          unhelpful: 1,
          avatar: "/review-avatar-3.jpg",
        },
        {
          id: 2,
          author: "Mike Chen",
          date: "10 March 2023",
          rating: 4,
          text: "Great content overall. A few lessons could use more depth, but overall very helpful for beginners.",
          helpful: 10,
          unhelpful: 2,
          avatar: "/review-avatar-4.jpg",
        },
      ],
    },
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
    description:
      "Learn to create websites that work beautifully on all devices. This course teaches mobile-first design principles, CSS Grid, Flexbox, and responsive techniques.",
    learnings: [
      "Mobile-First Design",
      "CSS Grid & Flexbox",
      "Media Queries",
      "Responsive Typography",
      "Device Testing",
    ],
    certification:
      "Complete the course and earn your Responsive Web Design certification.",
    curriculum: [
      {
        id: 1,
        title: "Mobile-First Approach",
        expanded: false,
        lessons: [],
      },
      {
        id: 2,
        title: "Flexbox & Grid",
        expanded: false,
        lessons: [
          { id: 1, title: "Flexbox Basics", duration: "55 min" },
          { id: 2, title: "CSS Grid Layout", duration: "60 min" },
        ],
      },
    ],
    instructor: {
      name: "John Smith",
      title: "UX/UI Designer",
      bio: "Experienced designer specializing in responsive web design and user experience. Dedicated to creating accessible and beautiful digital experiences.",
      image: "/instructor-3.jpg",
      social: {
        linkedin: "https://linkedin.com",
        whatsapp: "https://whatsapp.com",
        facebook: "https://facebook.com",
      },
    },
    reviews: {
      averageRating: 4.8,
      totalReviews: 92,
      breakdown: [
        { stars: 5, percentage: 78, count: 72 },
        { stars: 4, percentage: 12, count: 11 },
        { stars: 3, percentage: 6, count: 5 },
        { stars: 2, percentage: 3, count: 3 },
        { stars: 1, percentage: 1, count: 1 },
      ],
      items: [
        {
          id: 1,
          author: "Emma Wilson",
          date: "20 February 2023",
          rating: 5,
          text: "Best responsive design course I've taken. The practical projects really helped solidify my understanding.",
          helpful: 20,
          unhelpful: 1,
          avatar: "/review-avatar-5.jpg",
        },
        {
          id: 2,
          author: "James Brown",
          date: "18 February 2023",
          rating: 5,
          text: "Highly recommend! The instructor explains everything in a clear and concise manner. Loved the real-world examples.",
          helpful: 18,
          unhelpful: 0,
          avatar: "/review-avatar-6.jpg",
        },
      ],
    },
  },
];

const relatedCourses = [
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
];

const CourseDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("Overview");
  const [expandedSections, setExpandedSections] = useState({});

  // Find course by ID or default to first
  const course =
    coursesData.find((c) => c.id === parseInt(id)) || coursesData[0];

  const tabs = ["Overview", "Content", "Instructor", "Review"];

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <main className={styles.root}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Container>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <img
                src={course.image}
                alt={course.title}
                className={styles.courseImage}
              />
              <div className={styles.courseHeader}>
                <span className={styles.instructor}>
                  Instructor: <strong>{course.author}</strong>
                </span>
                <span className={styles.category}>
                  Categories: {course.category}
                </span>
                <div className={styles.rating}>
                  <span className={styles.stars}>★★★★★</span>
                  <span className={styles.reviews}>
                    ({course.rating} Reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.heroRight}>
              <h1 className={styles.title}>{course.title}</h1>
              <p className={styles.description}>{course.description}</p>
            </div>

            <div className={styles.sidebarFixed}>
              <div className={styles.sidebar}>
                <div className={styles.infoItem}>
                  <Clock size={20} />
                  <div>
                    <span className={styles.label}>Duration</span>
                    <span className={styles.value}>24 Hours</span>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <Users size={20} />
                  <div>
                    <span className={styles.label}>Enrolled</span>
                    <span className={styles.value}>
                      {course.students} Students
                    </span>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <Globe size={20} />
                  <div>
                    <span className={styles.label}>Language</span>
                    <span className={styles.value}>English</span>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <BookOpen size={20} />
                  <div>
                    <span className={styles.label}>Lessons</span>
                    <span className={styles.value}>{course.lessons}</span>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <Award size={20} />
                  <div>
                    <span className={styles.label}>Certificate</span>
                    <span className={styles.value}>Yes</span>
                  </div>
                </div>

                <div className={styles.priceSection}>
                  <div className={styles.price}>
                    Price: <strong>${course.price}</strong>
                  </div>
                  <Button variant="primary" size="lg" fullWidth>
                    Purchase
                  </Button>
                </div>

                <div className={styles.socialShare}>
                  <span>Share:</span>
                  <div className={styles.socialButtons}>
                    <button className={styles.socialBtn} title="LinkedIn">
                      <Linkedin size={18} />
                    </button>
                    <button className={styles.socialBtn} title="Instagram">
                      <Instagram size={18} />
                    </button>
                    <button className={styles.socialBtn} title="Twitter">
                      <Twitter size={18} />
                    </button>
                    <button className={styles.socialBtn} title="Facebook">
                      <Facebook size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Tabs Section */}
      <section className={styles.tabsSection}>
        <Container>
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
            <div className={styles.tabContent}>
              <div className={styles.contentSection}>
                <h3>Course description</h3>
                <p>{course.description}</p>
              </div>

              <div className={styles.contentSection}>
                <h3>What you'll learn from this course</h3>
                <div className={styles.learningList}>
                  {course.learnings.map((learning, idx) => (
                    <div key={idx} className={styles.learningItem}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>{learning}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.contentSection}>
                <h3>Certification</h3>
                <p>{course.certification}</p>
              </div>
            </div>
          )}

          {activeTab === "Content" && (
            <div className={styles.tabContent}>
              <div className={styles.curriculum}>
                {course.curriculum?.map((section) => (
                  <div key={section.id} className={styles.section}>
                    <button
                      className={`${styles.sectionHeader} ${
                        expandedSections[section.id] ? styles.expanded : ""
                      }`}
                      onClick={() => toggleSection(section.id)}
                    >
                      <div className={styles.sectionTitle}>
                        <span>{section.title}</span>
                      </div>
                      <ChevronDown size={20} className={styles.chevron} />
                    </button>

                    {expandedSections[section.id] &&
                      section.lessons?.length > 0 && (
                        <div className={styles.lessonsList}>
                          {section.lessons.map((lesson) => (
                            <div key={lesson.id} className={styles.lesson}>
                              <Play size={16} className={styles.playIcon} />
                              <span className={styles.lessonTitle}>
                                {lesson.title}
                              </span>
                              <span className={styles.duration}>
                                {lesson.duration}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Instructor" && (
            <div className={styles.tabContent}>
              <div className={styles.instructorCard}>
                <img
                  src={course.instructor?.image || "/instructor-default.jpg"}
                  alt={course.instructor?.name}
                  className={styles.instructorImage}
                />
                <div className={styles.instructorInfo}>
                  <h3 className={styles.instructorName}>
                    {course.instructor?.name}
                  </h3>
                  <p className={styles.instructorTitle}>
                    {course.instructor?.title}
                  </p>
                  <p className={styles.instructorBio}>
                    {course.instructor?.bio}
                  </p>
                  <div className={styles.instructorSocial}>
                    {course.instructor?.social?.linkedin && (
                      <a
                        href={course.instructor.social.linkedin}
                        className={styles.socialLink}
                        title="LinkedIn"
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    {course.instructor?.social?.whatsapp && (
                      <a
                        href={course.instructor.social.whatsapp}
                        className={styles.socialLink}
                        title="WhatsApp"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.944 1.252l-.354.188-.368-.067c-1.396-.264-2.73-.589-3.99-1.04l.142 2.508c.46 1.45.023 2.502-1.074 3.614-.522.523-.954 1.079-.954 2.18 0 2.555 2.335 4.659 5.513 4.659 1.933 0 3.732-.794 5.075-2.136 1.344-1.342 2.138-3.142 2.138-5.075 0-3.178-2.104-5.933-5.038-5.933z" />
                        </svg>
                      </a>
                    )}
                    {course.instructor?.social?.facebook && (
                      <a
                        href={course.instructor.social.facebook}
                        className={styles.socialLink}
                        title="Facebook"
                      >
                        <Facebook size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Review" && (
            <div className={styles.tabContent}>
              <div className={styles.reviewsContainer}>
                {/* Rating Summary */}
                <div className={styles.ratingSummary}>
                  <div className={styles.averageRating}>
                    <div className={styles.rating}>
                      {course.reviews?.averageRating}
                    </div>
                    <div className={styles.stars}>
                      {"★".repeat(Math.round(course.reviews?.averageRating))}
                    </div>
                    <div className={styles.reviewCount}>
                      {course.reviews?.totalReviews} Reviews
                    </div>
                  </div>

                  {/* Rating Breakdown */}
                  <div className={styles.ratingBreakdown}>
                    <h4>Average customer ratings</h4>
                    {course.reviews?.breakdown?.map((item, idx) => (
                      <div key={idx} className={styles.ratingRow}>
                        <div className={styles.ratingStars}>
                          {"★".repeat(item.stars)}
                        </div>
                        <div className={styles.progressBar}>
                          <div
                            className={styles.progress}
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                        <span className={styles.percentage}>
                          {item.percentage}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reviews List */}
                <div className={styles.reviewsList}>
                  {course.reviews?.items?.map((review) => (
                    <div key={review.id} className={styles.reviewItem}>
                      <img
                        src={review.avatar || "/review-avatar-default.jpg"}
                        alt={review.author}
                        className={styles.reviewAvatar}
                      />
                      <div className={styles.reviewContent}>
                        <div className={styles.reviewHeader}>
                          <div>
                            <h4 className={styles.reviewAuthor}>
                              {review.author}
                            </h4>
                            <p className={styles.reviewDate}>{review.date}</p>
                          </div>
                          <div className={styles.reviewRating}>
                            <span className={styles.reviewStars}>
                              {"★".repeat(review.rating)}
                            </span>
                          </div>
                        </div>
                        <p className={styles.reviewText}>{review.text}</p>
                        <div className={styles.reviewFooter}>
                          <span>Helpful?</span>
                          <button className={styles.helpfulBtn} title="Helpful">
                            👍 {review.helpful}
                          </button>
                          <button
                            className={styles.unhelpfulBtn}
                            title="Not helpful"
                          >
                            👎 {review.unhelpful}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Show All Reviews Button */}
                <div className={styles.showAllContainer}>
                  <Button variant="secondary" size="md">
                    Show all reviews
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* Related Courses Section */}
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

export default CourseDetails;
