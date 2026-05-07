import { useQuery } from "@tanstack/react-query";
import { fetchCourses } from "@/features/courses/data";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { FilterSidebar, Filters } from "@/components/courses/FilterSidebar";
import { useMemo, useState, useEffect } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useDebounce } from "@/hooks/useDebounce";
import { useSearchParams } from "react-router-dom";
import { EmptyState } from "@/components/common/EmptyState";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const defaultFilters: Filters = { categories: [], maxPrice: 20000, minRating: 0 };

const Courses = () => {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState(params.get("q") ?? "");
  const debounced = useDebounce(search, 250);
  const initialCat = params.get("category");
  const [filters, setFilters] = useState<Filters>({
    ...defaultFilters,
    categories: initialCat ? [initialCat] : [],
  });

  useEffect(() => {
    const next = new URLSearchParams(params);
    if (debounced) next.set("q", debounced); else next.delete("q");
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced]);

  const { data: courses = [], isLoading } = useQuery({ queryKey: ["courses"], queryFn: fetchCourses });

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      if (debounced && !c.title.toLowerCase().includes(debounced.toLowerCase()) && !c.instructor.name.toLowerCase().includes(debounced.toLowerCase())) return false;
      if (filters.categories.length && !filters.categories.includes(c.category)) return false;
      if (c.price > filters.maxPrice) return false;
      if (c.rating < filters.minRating) return false;
      return true;
    });
  }, [courses, debounced, filters]);

  return (
    <div className="container py-12">
      <div className="mb-10">
        <h1 className="font-display font-bold text-4xl sm:text-5xl mb-3">All courses</h1>
        <p className="text-muted-foreground">Discover {courses.length}+ courses across every discipline.</p>
      </div>

      <div className="flex gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses, instructors, topics..."
            className="w-full h-12 pl-11 pr-10 rounded-xl bg-card border border-border focus:border-primary/40 outline-none transition-all"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-accent">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="lg" className="lg:hidden">
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 overflow-y-auto">
            <div className="mt-8">
              <FilterSidebar filters={filters} onChange={setFilters} onReset={() => setFilters(defaultFilters)} />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid lg:grid-cols-[260px_1fr] gap-10">
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <FilterSidebar filters={filters} onChange={setFilters} onReset={() => setFilters(defaultFilters)} />
          </div>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-6">{filtered.length} {filtered.length === 1 ? "course" : "courses"}</p>
          {!isLoading && filtered.length === 0 ? (
            <EmptyState
              icon={<Search className="w-8 h-8" />}
              title="No courses match your filters"
              description="Try adjusting your search or clearing filters."
              action={<Button onClick={() => { setSearch(""); setFilters(defaultFilters); }}>Reset all</Button>}
            />
          ) : (
            <CourseGrid courses={filtered} loading={isLoading} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
