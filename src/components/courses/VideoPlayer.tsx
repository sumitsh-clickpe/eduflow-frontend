import { Play } from "lucide-react";
import { useState } from "react";

export function VideoPlayer({ thumbnail, title }: { thumbnail: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer shadow-elegant" onClick={() => setPlaying(true)}>
      <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      {!playing ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-violet flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform animate-glow-pulse">
            <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground ml-1" />
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80">
          <p className="text-white/80 text-sm">▶ Preview playing… (UI demo)</p>
        </div>
      )}
      <div className="absolute bottom-4 left-4 text-white">
        <p className="text-xs opacity-80">Preview this course</p>
      </div>
    </div>
  );
}
