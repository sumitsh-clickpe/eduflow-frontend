import { useAuth } from "@/features/auth/store";
import { Navigate, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCourses } from "@/features/courses/data";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Award, BookOpen, Clock, Play, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const user = useAuth((s) => s.user);
  const { data: courses = [] } = useQuery({ queryKey: ["courses"], queryFn: fetchCourses });

  if (!user) return <Navigate to="/login" replace />;

  // Mock enrolled with progress
  const enrolled = courses.slice(0, 4).map((c, i) => ({ ...c, progress: [72, 34, 12, 90][i] }));
  const stats = [
    { icon: BookOpen, label: "Enrolled", value: enrolled.length },
    { icon: Clock, label: "Hours learned", value: 42 },
    { icon: TrendingUp, label: "Streak", value: "12 days" },
    { icon: Award, label: "Certificates", value: 3 },
  ];

  return (
    <div className="container py-12">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-sm text-muted-foreground mb-1">Welcome back,</p>
        <h1 className="font-display font-bold text-4xl mb-8">{user.name}</h1>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="p-5 rounded-2xl bg-gradient-card border border-border shadow-card"
          >
            <s.icon className="w-5 h-5 text-primary mb-3" />
            <div className="font-display font-bold text-2xl">{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display font-bold text-2xl">Continue learning</h2>
        <Button asChild variant="ghost" size="sm"><Link to="/courses">Find more →</Link></Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {enrolled.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="rounded-2xl bg-card border border-border overflow-hidden shadow-card hover:shadow-elegant hover:border-primary/30 transition-all group"
          >
            <div className="flex flex-col sm:flex-row">
              <Link to={`/courses/${c.id}`} className="relative shrink-0 sm:w-44">
                <img src={c.thumbnail} alt={c.title} className="w-full h-full aspect-video object-cover" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-10 h-10 text-white fill-white" />
                </div>
              </Link>
              <div className="p-5 flex-1 flex flex-col">
                <Link to={`/courses/${c.id}`} className="font-display font-semibold line-clamp-2 hover:text-primary transition-colors">{c.title}</Link>
                <p className="text-xs text-muted-foreground mt-1">{c.instructor.name}</p>
                <div className="mt-auto pt-4 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">{c.progress}% complete</span>
                    <span className="font-medium">{Math.round((100 - c.progress) / 100 * Number(c.duration.replace("h", "")))}h left</span>
                  </div>
                  <Progress value={c.progress} className="h-2" />
                  <Button asChild variant="hero" size="sm" className="w-full mt-2">
                    <Link to={`/courses/${c.id}`}>Continue learning</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
