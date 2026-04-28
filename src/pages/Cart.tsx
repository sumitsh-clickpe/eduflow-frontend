import { useCart } from "@/features/cart/store";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import { ShoppingCart, Trash2, ArrowRight } from "lucide-react";
import { EmptyState } from "@/components/common/EmptyState";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const Cart = () => {
  const { items, remove, total, originalTotal } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="container py-12">
        <EmptyState
          icon={<ShoppingCart className="w-8 h-8" />}
          title="Your cart is empty"
          description="Looks like you haven't added any courses yet. Let's fix that."
          action={<Button asChild variant="hero" size="lg"><Link to="/courses">Browse courses</Link></Button>}
        />
      </div>
    );
  }

  const savings = originalTotal() - total();

  return (
    <div className="container py-12">
      <h1 className="font-display font-bold text-4xl mb-2">Shopping cart</h1>
      <p className="text-muted-foreground mb-8">{items.length} {items.length === 1 ? "course" : "courses"} in cart</p>
      <div className="grid lg:grid-cols-[1fr_360px] gap-8">
        <div className="space-y-3">
          <AnimatePresence>
            {items.map((c) => (
              <motion.div
                key={c.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="flex gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <Link to={`/courses/${c.id}`} className="shrink-0">
                  <img src={c.thumbnail} alt={c.title} className="w-32 sm:w-40 aspect-video object-cover rounded-lg" />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link to={`/courses/${c.id}`} className="font-display font-semibold hover:text-primary transition-colors line-clamp-2">{c.title}</Link>
                  <p className="text-xs text-muted-foreground mt-1">By {c.instructor.name}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                    <span>⭐ {c.rating}</span>
                    <span>•</span>
                    <span>{c.duration}</span>
                    <span>•</span>
                    <span>{c.lectures} lectures</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="font-display font-bold">{formatPrice(c.price)}</span>
                  <button
                    onClick={() => { remove(c.id); toast.success("Removed from cart"); }}
                    className="text-xs text-muted-foreground hover:text-destructive flex items-center gap-1 transition-colors"
                  >
                    <Trash2 className="w-3 h-3" /> Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start space-y-4 p-6 rounded-2xl border border-border bg-gradient-card shadow-card">
          <h2 className="font-display font-bold text-lg">Order summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{formatPrice(originalTotal())}</span></div>
            {savings > 0 && (
              <div className="flex justify-between text-success"><span>Discounts</span><span>-{formatPrice(savings)}</span></div>
            )}
          </div>
          <div className="border-t border-border pt-4 flex justify-between items-baseline">
            <span className="font-display font-semibold">Total</span>
            <span className="font-display font-bold text-2xl text-gradient">{formatPrice(total())}</span>
          </div>
          <Button onClick={() => navigate("/checkout")} variant="hero" size="lg" className="w-full">
            Checkout <ArrowRight className="w-4 h-4" />
          </Button>
          <p className="text-xs text-muted-foreground text-center">30-day money-back guarantee</p>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
