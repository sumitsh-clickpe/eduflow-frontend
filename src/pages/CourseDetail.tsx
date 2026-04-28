import { useQuery } from "@tanstack/react-query";
import { fetchCourse } from "@/features/courses/data";
import { Link, useNavigate, useParams } from "react-router-dom";
import { VideoPlayer } from "@/components/courses/VideoPlayer";
import { Rating } from "@/components/common/Rating";
import { formatNumber, formatPrice } from "@/lib/format";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useCart } from "@/features/cart/store";
import { Award, Check, Clock, Globe, PlayCircle, ShoppingCart, Users, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const CourseDetail = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const { data: course, isLoading } = useQuery({ queryKey: ["course", id], queryFn: () => fetchCourse(id) });
  const { add, has } = useCart();

  if (isLoading) {
    return <div className="container py-20"><div className="h-96 rounded-2xl bg-muted animate-pulse" /></div>;
  }
  if (!course) {
    return <div className="container py-20 text-center"><p className="text-muted-foreground">Course not found.</p></div>;
  }

  const inCart = has(course.id);
  const onAdd = () => {
    if (add(course)) toast.success("Added to cart", { description: course.title });
    else toast.info("Already in your cart");
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        <div className="container relative py-12 lg:py-16 grid lg:grid-cols-[1fr_400px] gap-10">
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/courses" className="hover:text-primary">Courses</Link>
              <span>/</span>
              <span>{course.category}</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              {course.bestseller && (
                <span className="px-2.5 py-1 rounded-full bg-warning/95 text-[10px] font-bold tracking-wider uppercase shadow-sm">Bestseller</span>
              )}
              <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{course.level}</span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">{course.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{course.subtitle}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-bold text-warning">{course.rating.toFixed(1)}</span>
                <Rating value={course.rating} />
                <span className="text-muted-foreground">({formatNumber(course.ratingCount)} ratings)</span>
              </div>
              <span className="flex items-center gap-1.5 text-muted-foreground"><Users className="w-4 h-4" />{formatNumber(course.students)} students</span>
              <span className="flex items-center gap-1.5 text-muted-foreground"><Globe className="w-4 h-4" />{course.language}</span>
              <span className="flex items-center gap-1.5 text-muted-foreground"><Sparkles className="w-4 h-4" />Updated {course.updated}</span>
            </div>
            <Link to={`#instructor`} className="inline-flex items-center gap-3 group">
              <Avatar className="w-10 h-10">
                <AvatarImage src={course.instructor.avatar} />
                <AvatarFallback>{course.instructor.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <div className="text-muted-foreground">Created by</div>
                <div className="font-semibold group-hover:text-primary transition-colors">{course.instructor.name}</div>
              </div>
            </Link>
          </div>

          {/* Sticky purchase card */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="rounded-2xl bg-card border border-border shadow-elegant overflow-hidden">
              <VideoPlayer thumbnail={course.thumbnail} title={course.title} />
              <div className="p-6 space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="font-display font-bold text-3xl">{formatPrice(course.price)}</span>
                  {course.originalPrice && (
                    <>
                      <span className="text-muted-foreground line-through">{formatPrice(course.originalPrice)}</span>
                      <span className="ml-auto text-xs font-bold text-success">
                        {Math.round((1 - course.price / course.originalPrice) * 100)}% off
                      </span>
                    </>
                  )}
                </div>
                {inCart ? (
                  <Button onClick={() => navigate("/cart")} variant="outline" size="lg" className="w-full">
                    Go to cart
                  </Button>
                ) : (
                  <Button onClick={onAdd} variant="hero" size="lg" className="w-full">
                    <ShoppingCart className="w-4 h-4" /> Add to cart
                  </Button>
                )}
                <Button onClick={() => { add(course); navigate("/checkout"); }} variant="outline" size="lg" className="w-full">
                  Buy now
                </Button>
                <div className="pt-4 border-t border-border space-y-2 text-sm">
                  {[
                    [Clock, `${course.duration} on-demand video`],
                    [PlayCircle, `${course.lectures} lectures`],
                    [Award, "Certificate of completion"],
                    [Globe, "Lifetime access"],
                  ].map(([Icon, label]: any) => (
                    <div key={label} className="flex items-center gap-2 text-muted-foreground">
                      <Icon className="w-4 h-4" /><span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <div className="container py-12 grid lg:grid-cols-[1fr_400px] gap-10">
        <div className="space-y-12 lg:max-w-3xl">
          {/* WHAT YOU LEARN */}
          <section className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl font-bold mb-6">What you'll learn</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {course.whatYouLearn.map((p) => (
                <div key={p} className="flex gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{p}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CURRICULUM */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-2">Course content</h2>
            <p className="text-sm text-muted-foreground mb-6">
              {course.sections.length} sections • {course.lectures} lectures • {course.duration} total
            </p>
            <Accordion type="multiple" defaultValue={["s1"]} className="rounded-2xl border border-border bg-card overflow-hidden">
              {course.sections.map((s) => (
                <AccordionItem key={s.id} value={s.id} className="border-border">
                  <AccordionTrigger className="px-6 hover:no-underline hover:bg-accent/50">
                    <div className="flex items-center justify-between w-full pr-4">
                      <span className="font-semibold text-left">{s.title}</span>
                      <span className="text-xs text-muted-foreground">{s.lectures.length} lectures</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ul className="space-y-2">
                      {s.lectures.map((l) => (
                        <li key={l.id} className="flex items-center justify-between py-2 text-sm">
                          <div className="flex items-center gap-3">
                            <PlayCircle className="w-4 h-4 text-muted-foreground" />
                            <span>{l.title}</span>
                            {l.preview && <span className="text-xs text-primary font-medium">Preview</span>}
                          </div>
                          <span className="text-xs text-muted-foreground">{l.duration}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* DESCRIPTION */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">Description</h2>
            <p className="text-muted-foreground leading-relaxed">{course.description}</p>
            <h3 className="font-display text-lg font-semibold mt-6 mb-3">Requirements</h3>
            <ul className="space-y-2">
              {course.requirements.map((r) => (
                <li key={r} className="flex gap-2 text-sm text-muted-foreground"><span>•</span>{r}</li>
              ))}
            </ul>
          </section>

          {/* INSTRUCTOR */}
          <section id="instructor" className="rounded-2xl border border-border bg-gradient-card p-8">
            <h2 className="font-display text-2xl font-bold mb-6">Your instructor</h2>
            <div className="flex flex-col sm:flex-row gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src={course.instructor.avatar} />
                <AvatarFallback>{course.instructor.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-display font-bold text-xl">{course.instructor.name}</h3>
                <p className="text-sm text-primary mb-3">{course.instructor.title}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground mb-3">
                  <span>⭐ {course.instructor.rating} rating</span>
                  <span>👥 {formatNumber(course.instructor.students)} students</span>
                  <span>📚 {course.instructor.courses} courses</span>
                </div>
                <p className="text-sm leading-relaxed">{course.instructor.bio}</p>
              </div>
            </div>
          </section>
        </div>
        <div />
      </div>
    </div>
  );
};

export default CourseDetail;
