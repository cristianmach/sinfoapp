// /components/navbar.tsx
'use client';
import React, { useRef, useState } from 'react';
import { AudioLines, ChevronLast, ChevronFirst } from "lucide-react";

interface NavbarProps {
  urlNext: string;
  urlBefore: string;
  audioSrc: string; // Nueva propiedad para la ruta del audio
}

const Navbar: React.FC<NavbarProps> = ({ urlNext, urlBefore, audioSrc }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed z-40 text-white flex items-center justify-center w-full mt-auto h-max bottom-12">
      <div className="gap-6 px-4 grid grid-cols-3 py-1 rounded-full bg-white/15 background-blur-sm">
        <a href={urlBefore} className='px-1'><ChevronFirst /></a>
        <button onClick={handleToggleAudio} className='px-1'><AudioLines /></button>
        <a href={urlNext} className='px-1'><ChevronLast /></a>
      </div>
      <audio ref={audioRef} src={audioSrc} />
    </div>
  );
};

export default Navbar;
