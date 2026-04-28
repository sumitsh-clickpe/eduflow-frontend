import { ReactNode } from "react";

export function EmptyState({ icon, title, description, action }: { icon: ReactNode; title: string; description?: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4 animate-fade-in">
      <div className="w-20 h-20 rounded-2xl bg-gradient-violet/10 flex items-center justify-center mb-6 text-primary">
        {icon}
      </div>
      <h3 className="text-2xl font-display font-semibold mb-2">{title}</h3>
      {description && <p className="text-muted-foreground max-w-md mb-6">{description}</p>}
      {action}
    </div>
  );
}
