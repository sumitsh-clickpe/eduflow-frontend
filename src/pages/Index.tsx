import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BookOpen, Trophy, Users, Code, Palette, BarChart3, Camera, Music, Briefcase, Brain, Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useQuery } from "@tanstack/react-query";
import { fetchCourses } from "@/features/courses/data";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Rating } from "@/components/common/Rating";

const categories = [
  { name: "Development", icon: Code, count: 1240 },
  { name: "Design", icon: Palette, count: 820 },
  { name: "Data Science", icon: Brain, count: 540 },
  { name: "Marketing", icon: BarChart3, count: 460 },
  { name: "Business", icon: Briefcase, count: 380 },
  { name: "Photography", icon: Camera, count: 290 },
  { name: "Music", icon: Music, count: 210 },
  { name: "Personal Growth", icon: Heart, count: 350 },
];

const testimonials = [
  { name: "Maya Hernandez", role: "Software Engineer @ Vercel", quote: "MargCred courses are the only ones I've taken where I actually shipped something I'm proud of. The instructors care.", img: "https://i.pravatar.cc/100?img=24" },
  { name: "David Park", role: "Product Designer @ Linear", quote: "The pacing, the projects, the polish — it all feels like a premium product. I learn something new every week.", img: "https://i.pravatar.cc/100?img=11" },
  { name: "Priya Anand", role: "Founder @ Stitch.ai", quote: "I built and launched my startup using skills I learned here. Hands down the best return on time of any platform.", img: "https://i.pravatar.cc/100?img=45" },
];

const Index = () => {
  const { data: courses = [], isLoading } = useQuery({ queryKey: ["courses"], queryFn: fetchCourses });
  const featured = courses.slice(0, 4);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" width={1536} height={1024} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />

        <div className="container relative pt-20 pb-32 lg:pt-28 lg:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>New: AI Engineering track now live</span>
            </div>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-6">
              Skills that <span className="text-gradient">compound</span>.
              <br />
              Careers that <span className="text-gradient">accelerate</span>.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              Learn from practitioners shipping at Stripe, Linear, and Notion. Real projects, deep craft, taught beautifully.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/courses">
                  Explore courses <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/signup">Start free trial</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-border/50 max-w-xl">
              {[
                { icon: Users, value: "1.2M+", label: "Learners" },
                { icon: BookOpen, value: "8,500+", label: "Courses" },
                { icon: Trophy, value: "94%", label: "Completion" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <s.icon className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-display font-bold text-2xl">{s.value}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="container py-20">
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-2">Featured this week</h2>
            <p className="text-muted-foreground">Hand-picked by our editorial team.</p>
          </div>
          <Button asChild variant="ghost">
            <Link to="/courses">View all <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
        <CourseGrid courses={featured} loading={isLoading} />
      </section>

      {/* CATEGORIES */}
      <section className="bg-gradient-soft py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3">Browse by category</h2>
            <p className="text-muted-foreground">From your first line of code to your next career chapter.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Link
                  to={`/courses?category=${encodeURIComponent(c.name)}`}
                  className="block p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-card hover:-translate-y-1 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-violet/10 flex items-center justify-center mb-4 group-hover:bg-gradient-violet group-hover:text-primary-foreground transition-all">
                    <c.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold mb-1">{c.name}</h3>
                  <p className="text-xs text-muted-foreground">{c.count} courses</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3">Loved by curious minds</h2>
          <p className="text-muted-foreground">Don't take our word for it.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-7 rounded-2xl bg-gradient-card border border-border shadow-card hover:shadow-elegant transition-all"
            >
              <Rating value={5} size={16} className="mb-4" />
              <p className="text-foreground/90 leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={t.img} />
                  <AvatarFallback>{t.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-violet p-12 sm:p-16 text-center shadow-glow">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
          <div className="relative">
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-primary-foreground mb-4">
              Start learning today.
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Join 1.2M+ learners building the future. Cancel anytime.
            </p>
            <Button asChild variant="glass" size="xl">
              <Link to="/signup">Create free account <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
