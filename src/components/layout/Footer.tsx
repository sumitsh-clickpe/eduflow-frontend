import { Link } from "react-router-dom";
import { GraduationCap, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24 bg-gradient-soft">
      <div className="container py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-violet flex items-center justify-center shadow-glow">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            MargCred<span className="text-gradient">.</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs mb-6">
            Learn from the world's best practitioners. Build skills that compound.
          </p>
          <div className="flex gap-3">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        {[
          { title: "Learn", links: [{ label: "Browse courses", to: "/courses" }, { label: "Categories", to: "/courses" }, { label: "Free lessons", to: "/courses" }, { label: "Roadmaps", to: "/courses" }] },
          { title: "Company", links: [{ label: "About", to: "#" }, { label: "Careers", to: "#" }, { label: "Press", to: "#" }, { label: "Blog", to: "#" }] },
          { title: "Legal", links: [{ label: "Privacy Policy", to: "/privacy-policy" }, { label: "Terms & Conditions", to: "/terms" }, { label: "Refund Policy", to: "/refund-policy" }, { label: "Contact", to: "#" }] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-display font-semibold mb-4 text-sm">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© 2026 MargCred Learning. Crafted for curious minds.</div>
          <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
