import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ImageCarouselProps = {
  images: string[];
  title: string;
  isPortrait?: boolean;
};

const AUTO_PLAY_INTERVAL = 3200;

export function ImageCarousel({ images, title, isPortrait = false }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [errorImages, setErrorImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, AUTO_PLAY_INTERVAL);

    return () => window.clearInterval(timer);
  }, [images.length, isHovered]);

  const updateIndex = (nextIndex: number) => {
    setIndex((nextIndex + images.length) % images.length);
  };

  const frameClass = isPortrait ? "aspect-[9/16] max-w-sm" : "aspect-video";

  return (
    <div
      className={`relative ${frameClass} overflow-hidden border border-zinc-700 bg-zinc-950`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        {errorImages[index] ? (
          <motion.div
            key={`fallback-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-xs font-black uppercase tracking-[0.22em] text-zinc-500"
          >
            Image unavailable
          </motion.div>
        ) : (
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={title}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="absolute inset-0 h-full w-full object-cover"
            referrerPolicy="no-referrer"
            onError={() => setErrorImages((current) => ({ ...current, [index]: true }))}
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent" />

      {images.length > 1 && (
        <>
          <button
            onClick={(event) => {
              event.stopPropagation();
              updateIndex(index - 1);
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 border border-zinc-700 bg-zinc-950/80 p-2 text-zinc-200 transition-colors hover:border-amber-400 hover:text-amber-300"
            aria-label="上一张"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={(event) => {
              event.stopPropagation();
              updateIndex(index + 1);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 border border-zinc-700 bg-zinc-950/80 p-2 text-zinc-200 transition-colors hover:border-amber-400 hover:text-amber-300"
            aria-label="下一张"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((image, imageIndex) => (
              <button
                key={image}
                onClick={(event) => {
                  event.stopPropagation();
                  setIndex(imageIndex);
                }}
                className={`h-1.5 transition-all ${imageIndex === index ? "w-6 bg-amber-400" : "w-2 bg-zinc-500"}`}
                aria-label={`切换到第 ${imageIndex + 1} 张`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
