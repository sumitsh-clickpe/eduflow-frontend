import { Course, Instructor } from "./types";
import c1 from "@/assets/course-1.jpg";
import c2 from "@/assets/course-2.jpg";
import c3 from "@/assets/course-3.jpg";
import c4 from "@/assets/course-4.jpg";
import c5 from "@/assets/course-5.jpg";
import c6 from "@/assets/course-6.jpg";
import c7 from "@/assets/course-7.jpg";
import c8 from "@/assets/course-8.jpg";

const instructors: Instructor[] = [
  { id: "i1", name: "Sarah Chen", title: "Senior Frontend Engineer", bio: "10+ years building products at scale. Ex-Stripe, Ex-Airbnb.", avatar: "https://i.pravatar.cc/200?img=47", rating: 4.9, students: 184320, courses: 12 },
  { id: "i2", name: "Marcus Reid", title: "Principal UX Designer", bio: "Design lead with two decades shaping consumer products.", avatar: "https://i.pravatar.cc/200?img=12", rating: 4.8, students: 92450, courses: 8 },
  { id: "i3", name: "Dr. Aisha Patel", title: "ML Researcher, Stanford", bio: "Researcher and educator focused on practical machine learning.", avatar: "https://i.pravatar.cc/200?img=44", rating: 4.9, students: 211900, courses: 15 },
  { id: "i4", name: "James Okafor", title: "Mobile Lead, Notion", bio: "Building delightful native experiences for millions of users.", avatar: "https://i.pravatar.cc/200?img=33", rating: 4.7, students: 67800, courses: 6 },
  { id: "i5", name: "Elena Volkov", title: "Growth Marketing Director", bio: "Helped 50+ startups scale from 0 to 8 figures in revenue.", avatar: "https://i.pravatar.cc/200?img=49", rating: 4.8, students: 134220, courses: 9 },
  { id: "i6", name: "Theo Laurent", title: "Award-winning Photographer", bio: "National Geographic contributor and visual storyteller.", avatar: "https://i.pravatar.cc/200?img=15", rating: 4.9, students: 45600, courses: 5 },
];

const sampleSections = [
  {
    id: "s1", title: "Introduction & Setup",
    lectures: [
      { id: "l1", title: "Welcome to the course", duration: "4:32", preview: true },
      { id: "l2", title: "Setting up your environment", duration: "12:18", preview: true },
      { id: "l3", title: "Course structure overview", duration: "6:45" },
    ],
  },
  {
    id: "s2", title: "Core Concepts",
    lectures: [
      { id: "l4", title: "Foundational principles", duration: "18:22" },
      { id: "l5", title: "Hands-on exercise", duration: "24:10" },
      { id: "l6", title: "Common pitfalls", duration: "11:55" },
      { id: "l7", title: "Section quiz", duration: "8:30" },
    ],
  },
  {
    id: "s3", title: "Advanced Patterns",
    lectures: [
      { id: "l8", title: "Production architecture", duration: "32:14" },
      { id: "l9", title: "Performance optimization", duration: "21:08" },
      { id: "l10", title: "Real-world case study", duration: "28:42" },
    ],
  },
  {
    id: "s4", title: "Final Project",
    lectures: [
      { id: "l11", title: "Project briefing", duration: "9:20" },
      { id: "l12", title: "Building the project", duration: "45:00" },
      { id: "l13", title: "Code review & next steps", duration: "15:30" },
    ],
  },
];

const learn = [
  "Build production-ready projects from scratch",
  "Master industry best practices and patterns",
  "Deploy and ship real applications confidently",
  "Understand the why, not just the how",
  "Develop a portfolio that gets you hired",
  "Join a community of 100k+ learners",
];

const reqs = [
  "A computer with internet connection",
  "Basic familiarity with the topic helps but isn't required",
  "Curiosity and willingness to practice",
];

export const categories = [
  "Development", "Design", "Data Science", "Marketing", "Business", "Photography", "Music", "Personal Growth",
];

export const courses: Course[] = [
  { id: "1", title: "The Complete Modern Web Developer Bootcamp", subtitle: "From zero to deployed full-stack apps with React, Node, and TypeScript", description: "The most comprehensive web development course on the platform. Build 12 real projects, master modern tooling, and ship production code with confidence.", thumbnail: c1, category: "Development", level: "Beginner", price: 14999, originalPrice: 29999, rating: 4.8, ratingCount: 28453, students: 184320, duration: "62h", lectures: 412, language: "English", instructor: instructors[0], sections: sampleSections, whatYouLearn: learn, requirements: reqs, bestseller: true, updated: "Apr 2026" },
  { id: "2", title: "UI/UX Design Masterclass: Figma to Production", subtitle: "Design beautiful, accessible interfaces that ship", description: "A practical design course taught by a working design lead. Cover everything from research to handoff with confidence.", thumbnail: c2, category: "Design", level: "Intermediate", price: 12999, originalPrice: 24999, rating: 4.9, ratingCount: 12104, students: 92450, duration: "38h", lectures: 234, language: "English", instructor: instructors[1], sections: sampleSections, whatYouLearn: learn, requirements: reqs, bestseller: true, updated: "Mar 2026" },
  { id: "3", title: "Machine Learning & AI: From Theory to Deployment", subtitle: "Build, train, and ship ML models with Python and PyTorch", description: "Demystify modern machine learning. Hands-on projects from regression to transformers, taught by a Stanford researcher.", thumbnail: c3, category: "Data Science", level: "Advanced", price: 18999, originalPrice: 34999, rating: 4.9, ratingCount: 18329, students: 211900, duration: "74h", lectures: 318, language: "English", instructor: instructors[2], sections: sampleSections, whatYouLearn: learn, requirements: reqs, bestseller: true, updated: "Apr 2026" },
  { id: "4", title: "iOS & Android with React Native", subtitle: "One codebase, two platforms, zero compromises", description: "Build production mobile apps that feel native. Includes navigation, state, animations, push, and App Store deployment.", thumbnail: c4, category: "Development", level: "Intermediate", price: 11999, originalPrice: 22999, rating: 4.7, ratingCount: 8421, students: 67800, duration: "42h", lectures: 256, language: "English", instructor: instructors[3], sections: sampleSections, whatYouLearn: learn, requirements: reqs, updated: "Feb 2026" },
  { id: "5", title: "Growth Marketing: 0 to 1M Users", subtitle: "Frameworks and tactics from operators who've done it", description: "Learn the playbook real growth leaders use. SEO, paid, content, lifecycle, retention — taught with case studies.", thumbnail: c5, category: "Marketing", level: "Intermediate", price: 10999, originalPrice: 19999, rating: 4.8, ratingCount: 6740, students: 134220, duration: "28h", lectures: 168, language: "English", instructor: instructors[4], sections: sampleSections, whatYouLearn: learn, requirements: reqs, bestseller: true, updated: "Apr 2026" },
  { id: "6", title: "Photography Masterclass: Light, Story, Soul", subtitle: "From snapshots to portfolio-ready images", description: "A cinematic course on the art and craft of photography, taught by a National Geographic contributor.", thumbnail: c6, category: "Photography", level: "Beginner", price: 10499, originalPrice: 17999, rating: 4.9, ratingCount: 4210, students: 45600, duration: "22h", lectures: 142, language: "English", instructor: instructors[5], sections: sampleSections, whatYouLearn: learn, requirements: reqs, updated: "Jan 2026" },
  { id: "7", title: "Strategic Thinking for Modern Leaders", subtitle: "Decision frameworks for ambiguous times", description: "Used inside Fortune 500s and YC startups. Sharpen your strategic instincts with battle-tested frameworks.", thumbnail: c7, category: "Business", level: "Advanced", price: 13999, originalPrice: 26999, rating: 4.7, ratingCount: 3982, students: 28940, duration: "18h", lectures: 96, language: "English", instructor: instructors[1], sections: sampleSections, whatYouLearn: learn, requirements: reqs, updated: "Mar 2026" },
  { id: "8", title: "Music Production in Ableton Live", subtitle: "Make music that moves people", description: "From your first beat to a finished track. Mixing, mastering, sound design, and the craft of arrangement.", thumbnail: c8, category: "Music", level: "Beginner", price: 10299, originalPrice: 16999, rating: 4.8, ratingCount: 2851, students: 18420, duration: "26h", lectures: 154, language: "English", instructor: instructors[5], sections: sampleSections, whatYouLearn: learn, requirements: reqs, updated: "Feb 2026" },
];

export const fetchCourses = async (): Promise<Course[]> => {
  await new Promise((r) => setTimeout(r, 300));
  return courses;
};

export const fetchCourse = async (id: string): Promise<Course | undefined> => {
  await new Promise((r) => setTimeout(r, 250));
  return courses.find((c) => c.id === id);
};
