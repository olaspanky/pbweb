"use client";

import { useRef, useState } from "react";
import { HiPlay } from "react-icons/hi2";

export default function VideoPlayer({ src, className = "" }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <figure
      className={`relative overflow-hidden ${className}`}
      onClick={handlePlay}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        playsInline
        className="w-full h-full object-cover cursor-pointer"
      ></video>

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-grey-900/30 hover:bg-grey-900/40 transition">
          <HiPlay className="text-grey-0 w-16 h-16" />
        </div>
      )}
    </figure>
  );
}
