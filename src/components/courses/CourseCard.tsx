import { Link } from "react-router-dom";
import { Course } from "@/features/courses/types";
import { Rating } from "@/components/common/Rating";
import { formatNumber, formatPrice } from "@/lib/format";
import { Heart, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useWishlist } from "@/features/cart/store";
import { cn } from "@/lib/utils";

export function CourseCard({ course, index = 0 }: { course: Course; index?: number }) {
  const { has, toggle } = useWishlist();
  const wished = has(course.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      whileHover={{ y: -6 }}
      className="group"
    >
      <Link to={`/courses/${course.id}`} className="block h-full">
        <article className="h-full rounded-2xl bg-card border border-border overflow-hidden shadow-card hover:shadow-elegant hover:border-primary/30 transition-all duration-300">
          <div className="relative aspect-video overflow-hidden bg-secondary">
            <img
              src={course.thumbnail}
              alt={course.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {course.bestseller && (
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-warning/95 text-[10px] font-bold tracking-wider uppercase text-foreground shadow-md">
                Bestseller
              </span>
            )}
            <button
              onClick={(e) => { e.preventDefault(); toggle(course.id); }}
              className="absolute top-3 right-3 w-9 h-9 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Toggle wishlist"
            >
              <Heart className={cn("w-4 h-4 transition-colors", wished ? "fill-destructive text-destructive" : "text-foreground")} />
            </button>
          </div>
          <div className="p-5 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{course.category}</span>
              <span>•</span>
              <span>{course.level}</span>
            </div>
            <h3 className="font-display font-semibold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
              {course.title}
            </h3>
            <p className="text-xs text-muted-foreground">By {course.instructor.name}</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-bold text-warning">{course.rating.toFixed(1)}</span>
              <Rating value={course.rating} />
              <span className="text-xs text-muted-foreground">({formatNumber(course.ratingCount)})</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.duration}</span>
              <span className="flex items-center gap-1"><Users className="w-3 h-3" />{formatNumber(course.students)}</span>
            </div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-display font-bold text-lg">{formatPrice(course.price)}</span>
              {course.originalPrice && (
                <span className="text-xs text-muted-foreground line-through">{formatPrice(course.originalPrice)}</span>
              )}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

export function CourseCardSkeleton() {
  return (
    <div className="rounded-2xl border border-border overflow-hidden bg-card">
      <div className="aspect-video bg-gradient-to-r from-muted via-secondary to-muted bg-[length:200%_100%] animate-shimmer" />
      <div className="p-5 space-y-3">
        <div className="h-3 w-1/3 rounded bg-muted animate-pulse" />
        <div className="h-4 w-full rounded bg-muted animate-pulse" />
        <div className="h-4 w-2/3 rounded bg-muted animate-pulse" />
        <div className="h-6 w-1/4 rounded bg-muted animate-pulse" />
      </div>
    </div>
  );
}
