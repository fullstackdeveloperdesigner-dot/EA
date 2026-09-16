'use client';
import { useState } from 'react';
import Image from 'next/image';

const YouTubeVideo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoClick = () => {
    setIsVideoOpen(true);
  };

  return (
    <div className="col-lg-6 mb-4 youtube-video">
      <div style={{ position: 'relative', height: '345px' }}>
          <Image
            src="/images/eric-analytics/Ideal_Partner.png"
            alt="Eric Case YouTube Video Thumbnail"
            width={614}
            height={345}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              cursor: 'pointer',
            }}
            onClick={handleVideoClick}
          />


        {isVideoOpen && (
          <iframe
          width="100%"
          height="345"
          src="https://www.youtube.com/embed/5cJOeSlWZ7Y?autoplay=1&rel=0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'block',
          }}
        ></iframe>

        )}
      </div>
    </div>
  );
};

export default YouTubeVideo;
