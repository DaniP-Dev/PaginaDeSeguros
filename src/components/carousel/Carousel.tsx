// Carousel.tsx
import React from "react";

interface CarouselProps {
  title: string;
  videoUrl: string;
}

const Carousel: React.FC<CarouselProps> = ({ title, videoUrl }) => {
  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden w-full h-full">
      {/* Usamos 'aspect-video' para mantener una relación 16:9 */}
      <div className="relative w-full aspect-video">
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default Carousel;
