import { categories } from "@/features/courses/data";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { formatPrice } from "@/lib/format";
import { Button } from "@/components/ui/button";

export interface Filters {
  categories: string[];
  maxPrice: number;
  minRating: number;
}

const ratings = [4.5, 4.0, 3.5, 3.0];

export function FilterSidebar({ filters, onChange, onReset }: {
  filters: Filters;
  onChange: (f: Filters) => void;
  onReset: () => void;
}) {
  return (
    <aside className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="font-display font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" onClick={onReset} className="text-xs h-auto py-1">Reset</Button>
      </div>

      <div>
        <h4 className="text-sm font-semibold mb-3">Category</h4>
        <div className="space-y-2.5">
          {categories.map((c) => (
            <div key={c} className="flex items-center gap-2">
              <Checkbox
                id={`cat-${c}`}
                checked={filters.categories.includes(c)}
                onCheckedChange={(v) =>
                  onChange({
                    ...filters,
                    categories: v ? [...filters.categories, c] : filters.categories.filter((x) => x !== c),
                  })
                }
              />
              <Label htmlFor={`cat-${c}`} className="text-sm font-normal cursor-pointer">{c}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-semibold">Max Price</h4>
          <span className="text-xs text-muted-foreground">{formatPrice(filters.maxPrice)}</span>
        </div>
        <Slider
          value={[filters.maxPrice]}
          min={10000}
          max={20000}
          step={500}
          onValueChange={(v) => onChange({ ...filters, maxPrice: v[0] })}
        />
      </div>

      <div>
        <h4 className="text-sm font-semibold mb-3">Rating</h4>
        <div className="space-y-2">
          {ratings.map((r) => (
            <button
              key={r}
              onClick={() => onChange({ ...filters, minRating: filters.minRating === r ? 0 : r })}
              className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                filters.minRating === r ? "bg-primary/10 text-primary font-medium" : "hover:bg-accent"
              }`}
            >
              {r.toFixed(1)} & up
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
