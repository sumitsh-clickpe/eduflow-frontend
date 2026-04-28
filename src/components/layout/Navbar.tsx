import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, GraduationCap, Menu, LogOut, LayoutDashboard, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/features/cart/store";
import { useAuth } from "@/features/auth/store";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet, SheetContent, SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { to: "/courses", label: "Courses" },
  { to: "/dashboard", label: "Dashboard" },
];

export function Navbar() {
  const items = useCart((s) => s.items);
  const user = useAuth((s) => s.user);
  const logout = useAuth((s) => s.logout);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/courses?q=${encodeURIComponent(q)}`);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass shadow-card" : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="container flex h-16 items-center gap-4">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl shrink-0 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-violet flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="hidden sm:inline">Lumen<span className="text-gradient">.</span></span>
        </Link>

        <form onSubmit={onSearch} className="flex-1 max-w-md hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search courses, instructors, topics..."
              className="w-full h-10 pl-10 pr-4 rounded-full bg-secondary/60 border border-transparent focus:border-primary/40 focus:bg-background outline-none transition-all text-sm"
            />
          </div>
        </form>

        <nav className="hidden lg:flex items-center gap-1 ml-auto">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1 ml-auto lg:ml-0">
          <ThemeToggle />
          <Button asChild variant="ghost" size="icon" className="relative rounded-full">
            <Link to="/cart" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              {items.length > 0 && (
                <motion.span
                  key={items.length}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-gradient-violet text-primary-foreground text-[10px] font-bold flex items-center justify-center shadow-md"
                >
                  {items.length}
                </motion.span>
              )}
            </Link>
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full ring-2 ring-transparent hover:ring-primary/30 transition-all">
                  <Avatar className="w-9 h-9">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="font-semibold">{user.name}</div>
                  <div className="text-xs text-muted-foreground font-normal">{user.email}</div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                  <LayoutDashboard className="w-4 h-4 mr-2" /> Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                  <UserIcon className="w-4 h-4 mr-2" /> My Profile
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="text-destructive">
                  <LogOut className="w-4 h-4 mr-2" /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden sm:flex items-center gap-2 ml-2">
              <Button asChild variant="ghost" size="sm">
                <Link to="/login">Log in</Link>
              </Button>
              <Button asChild variant="hero" size="sm">
                <Link to="/signup">Get started</Link>
              </Button>
            </div>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-2 mt-8">
                {navLinks.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-accent"
                  >
                    {l.label}
                  </NavLink>
                ))}
                {!user && (
                  <>
                    <Button asChild variant="outline" className="mt-4">
                      <Link to="/login">Log in</Link>
                    </Button>
                    <Button asChild variant="hero">
                      <Link to="/signup">Get started</Link>
                    </Button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
