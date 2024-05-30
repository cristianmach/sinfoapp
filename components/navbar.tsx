'use client';
import React from 'react';
import { AudioLines, ChevronLast, ChevronFirst } from "lucide-react";

interface NavbarProps {
  urlNext: string;
  urlBefore: string;
}

const Navbar: React.FC<NavbarProps> = ({ urlNext, urlBefore }) => {
  return (
    <div className="fixed z-40 text-white flex items-center justify-center w-full mt-auto h-max bottom-12">
        <div className="gap-6 px-4 grid grid-cols-3 py-1 rounded-full bg-white/15 background-blur-sm">
            <a href={urlBefore} className='px-1'> <ChevronFirst /> </a>
            <a href="/" className='px-1'> <AudioLines /> </a>
            <a href={urlNext} className='px-1'> <ChevronLast /> </a>
        </div>
    </div>
  );
};

export default Navbar;
