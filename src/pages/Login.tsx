import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/features/auth/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const login = useAuth((s) => s.login);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    login(email);
    toast.success("Welcome back!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[80vh] grid lg:grid-cols-2">
      <div className="hidden lg:flex relative bg-gradient-violet items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        <div className="relative max-w-md text-primary-foreground">
          <GraduationCap className="w-12 h-12 mb-6" />
          <h2 className="font-display font-bold text-4xl leading-tight mb-4">Pick up where you left off.</h2>
          <p className="text-primary-foreground/80">1.2M+ learners are leveling up today. Your progress is saved and waiting.</p>
        </div>
      </div>

      <div className="flex items-center justify-center p-8">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm space-y-6"
        >
          <div>
            <h1 className="font-display font-bold text-3xl mb-2">Welcome back</h1>
            <p className="text-muted-foreground text-sm">Log in to keep learning.</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="pw">Password</Label>
              <Input id="pw" type="password" required placeholder="••••••••" />
            </div>
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full">Log in</Button>
          <p className="text-sm text-center text-muted-foreground">
            New to Lumen? <Link to="/signup" className="text-primary font-medium hover:underline">Create an account</Link>
          </p>
          <p className="text-xs text-center text-muted-foreground">Demo: any email & password works.</p>
        </motion.form>
      </div>
    </div>
  );
};

export default Login;
