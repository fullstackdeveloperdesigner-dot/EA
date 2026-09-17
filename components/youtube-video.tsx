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
          <>
            <Image
              src="/images/eric-analytics/Ideal_Partner.png"
              alt="Eric Case YouTube Video Thumbnail"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover cursor-pointer"
              onClick={handleVideoClick}
              priority
            />
            {/* Play button overlay */}
            <button
              type="button"
              onClick={handleVideoClick}
              aria-label="Play video"
              className="absolute inset-0 flex items-center justify-center group cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="relative w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                <i className="ri-play-fill text-2xl text-[#080808] translate-x-0.5" />
              </div>
            </button>
          </>
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