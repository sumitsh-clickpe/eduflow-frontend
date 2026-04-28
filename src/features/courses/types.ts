export interface Lecture {
  id: string;
  title: string;
  duration: string;
  preview?: boolean;
}

export interface Section {
  id: string;
  title: string;
  lectures: Lecture[];
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  rating: number;
  students: number;
  courses: number;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  originalPrice?: number;
  rating: number;
  ratingCount: number;
  students: number;
  duration: string;
  lectures: number;
  language: string;
  instructor: Instructor;
  sections: Section[];
  whatYouLearn: string[];
  requirements: string[];
  bestseller?: boolean;
  updated: string;
}
