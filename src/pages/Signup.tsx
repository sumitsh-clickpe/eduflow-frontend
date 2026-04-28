import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/features/auth/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Check } from "lucide-react";
import { toast } from "sonner";

const perks = [
  "Access to 8,500+ courses",
  "Lifetime access to purchases",
  "Certificates of completion",
  "Cancel anytime, no questions asked",
];

const Signup = () => {
  const login = useAuth((s) => s.login);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    login(email, name);
    toast.success("Account created! Welcome aboard.");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[80vh] grid lg:grid-cols-2">
      <div className="flex items-center justify-center p-8 order-2 lg:order-1">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm space-y-6"
        >
          <div>
            <h1 className="font-display font-bold text-3xl mb-2">Create your account</h1>
            <p className="text-muted-foreground text-sm">Free to start. No credit card required.</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="pw">Password</Label>
              <Input id="pw" type="password" required placeholder="At least 8 characters" />
            </div>
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full">Create account</Button>
          <p className="text-sm text-center text-muted-foreground">
            Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Log in</Link>
          </p>
        </motion.form>
      </div>

      <div className="hidden lg:flex relative bg-gradient-violet items-center justify-center p-12 overflow-hidden order-1 lg:order-2">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        <div className="relative max-w-md text-primary-foreground">
          <Sparkles className="w-12 h-12 mb-6" />
          <h2 className="font-display font-bold text-4xl leading-tight mb-6">Join 1.2M+ learners building the future.</h2>
          <ul className="space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center"><Check className="w-3 h-3" /></div>
                <span className="text-primary-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Signup;
