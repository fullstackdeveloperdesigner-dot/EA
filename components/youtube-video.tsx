'use client';

import { useState } from 'react';
import Image from 'next/image';

const YouTubeVideo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoClick = () => {
    setIsVideoOpen(true);
  };

  return (
    <div className="w-full youtube-video">
      {/* Responsive 16:9 box — scales with container width on every screen size */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black">
        {!isVideoOpen && (
          <button
            type="button"
            onClick={handleVideoClick}
            aria-label="Play video"
            className="group absolute inset-0 w-full h-full cursor-pointer"
          >
            <Image
              src="/images/eric-analytics/Ideal_Partner.png"
              alt="Eric Case YouTube Video Thumbnail"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              priority
            />
            {/* subtle dim on hover only — no extra icon, thumbnail already has its own play icon */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </button>
        )}

        {isVideoOpen && (
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/5cJOeSlWZ7Y?autoplay=1&rel=0"
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
};

export default YouTubeVideo;