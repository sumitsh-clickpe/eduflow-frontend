import { useCart } from "@/features/cart/store";
import { useAuth } from "@/features/auth/store";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatPrice } from "@/lib/format";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, CreditCard, Lock, ShoppingBag } from "lucide-react";
import { EmptyState } from "@/components/common/EmptyState";
import { toast } from "sonner";
import { BillingAddressForm, emptyBillingAddress } from "@/components/checkout/BillingAddressForm";

const Checkout = () => {
  const { items, total, clear } = useCart();
  const user = useAuth((s) => s.user);
  const navigate = useNavigate();
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [billing, setBilling] = useState(emptyBillingAddress);

  if (items.length === 0 && !done) {
    return (
      <div className="container py-12">
        <EmptyState
          icon={<ShoppingBag className="w-8 h-8" />}
          title="Nothing to checkout"
          description="Add some courses to your cart first."
          action={<Button asChild variant="hero"><Link to="/courses">Browse courses</Link></Button>}
        />
      </div>
    );
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!billing.state) {
      toast.error("Please select your state");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      clear();
      toast.success("Payment successful!");
    }, 1200);
  };

  if (done) {
    return (
      <div className="container py-20 max-w-md mx-auto text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 0.6 }}>
          <div className="w-20 h-20 rounded-full bg-gradient-violet flex items-center justify-center mx-auto mb-6 shadow-glow">
            <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
          </div>
        </motion.div>
        <h1 className="font-display font-bold text-3xl mb-3">Payment successful</h1>
        <p className="text-muted-foreground mb-8">Your courses are now available in your dashboard. Time to start learning.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="hero" size="lg"><Link to="/dashboard">Go to dashboard</Link></Button>
          <Button asChild variant="outline" size="lg"><Link to="/courses">Keep browsing</Link></Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <h1 className="font-display font-bold text-4xl mb-8">Checkout</h1>
      <form onSubmit={onSubmit} className="grid lg:grid-cols-[1fr_400px] gap-10">
        <div className="space-y-8">
          <section className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <h2 className="font-display font-semibold text-lg">Contact</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" required defaultValue={user?.name} placeholder="Jane Doe" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required defaultValue={user?.email} placeholder="jane@example.com" />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-semibold text-lg flex items-center gap-2"><CreditCard className="w-5 h-5" /> Payment</h2>
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Lock className="w-3 h-3" /> Encrypted</span>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="card">Card number</Label>
              <Input id="card" required placeholder="4242 4242 4242 4242" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-1.5 col-span-1">
                <Label htmlFor="exp">Expiry</Label>
                <Input id="exp" required placeholder="MM/YY" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" required placeholder="123" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="zip">ZIP</Label>
                <Input id="zip" required placeholder="10001" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Demo only — no real charge will be made.</p>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start space-y-4 p-6 rounded-2xl border border-border bg-gradient-card shadow-card">
          <h2 className="font-display font-bold text-lg">Order summary</h2>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {items.map((c) => (
              <div key={c.id} className="flex gap-3">
                <img src={c.thumbnail} alt="" className="w-16 aspect-video object-cover rounded-md" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium line-clamp-2">{c.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{formatPrice(c.price)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-4 flex justify-between items-baseline">
            <span className="font-display font-semibold">Total</span>
            <span className="font-display font-bold text-2xl text-gradient">{formatPrice(total())}</span>
          </div>
          <Button type="submit" disabled={submitting} variant="hero" size="lg" className="w-full">
            {submitting ? "Processing…" : `Pay ${formatPrice(total())}`}
          </Button>
        </aside>
      </form>
    </div>
  );
};

export default Checkout;
