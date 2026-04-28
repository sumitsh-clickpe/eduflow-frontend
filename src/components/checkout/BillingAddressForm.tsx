import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin } from "lucide-react";

export interface BillingAddress {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

const states = [
  "Andhra Pradesh", "Delhi", "Goa", "Gujarat", "Haryana", "Karnataka", "Kerala",
  "Madhya Pradesh", "Maharashtra", "Punjab", "Rajasthan", "Tamil Nadu", "Telangana",
  "Uttar Pradesh", "West Bengal",
];

interface Props {
  value: BillingAddress;
  onChange: (v: BillingAddress) => void;
}

export function BillingAddressForm({ value, onChange }: Props) {
  const set = <K extends keyof BillingAddress>(k: K, v: BillingAddress[K]) =>
    onChange({ ...value, [k]: v });

  return (
    <section className="rounded-2xl border border-border bg-card p-6 space-y-4">
      <h2 className="font-display font-semibold text-lg flex items-center gap-2">
        <MapPin className="w-5 h-5" /> Billing address
      </h2>

      <div className="space-y-1.5">
        <Label htmlFor="line1">Address line 1</Label>
        <Input
          id="line1" required value={value.line1}
          onChange={(e) => set("line1", e.target.value)}
          placeholder="Flat / House no., Building, Street"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="line2">Address line 2 <span className="text-muted-foreground font-normal">(optional)</span></Label>
        <Input
          id="line2" value={value.line2 ?? ""}
          onChange={(e) => set("line2", e.target.value)}
          placeholder="Area, Landmark"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="city">City</Label>
          <Input
            id="city" required value={value.city}
            onChange={(e) => set("city", e.target.value)}
            placeholder="Mumbai"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="state">State</Label>
          <Select value={value.state} onValueChange={(v) => set("state", v)}>
            <SelectTrigger id="state"><SelectValue placeholder="Select state" /></SelectTrigger>
            <SelectContent>
              {states.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="postal">PIN code</Label>
          <Input
            id="postal" required value={value.postalCode}
            onChange={(e) => set("postalCode", e.target.value.replace(/\D/g, "").slice(0, 6))}
            placeholder="400001"
            inputMode="numeric"
            pattern="[0-9]{6}"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="country">Country</Label>
          <Input id="country" required value={value.country} onChange={(e) => set("country", e.target.value)} />
        </div>
      </div>
    </section>
  );
}

export const emptyBillingAddress: BillingAddress = {
  line1: "", line2: "", city: "", state: "", postalCode: "", country: "India",
};
