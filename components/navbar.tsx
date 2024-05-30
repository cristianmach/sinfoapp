'use client'
import React from 'react'
import { AudioLines, ChevronLast, ChevronFirst, Home } from "lucide-react";

function Navbar() {
  return (
    <div className="fixed z-40 text-white flex items-center justify-center w-full mt-auto h-max bottom-12">
        <div className=" gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
            <button> <ChevronFirst /> </button>
            <button> <AudioLines /> </button>
            <button> <ChevronLast /> </button>
        </div>
    </div>
  )
}

export default Navbar