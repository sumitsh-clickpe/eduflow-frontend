import { Course } from "@/features/courses/types";
import { CourseCard, CourseCardSkeleton } from "./CourseCard";

export function CourseGrid({ courses, loading }: { courses: Course[]; loading?: boolean }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => <CourseCardSkeleton key={i} />)}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {courses.map((c, i) => <CourseCard key={c.id} course={c} index={i} />)}
    </div>
  );
}
