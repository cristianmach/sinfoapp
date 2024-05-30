import React from 'react'
import { Home } from "lucide-react";

const ButtonHome = () => {
  return (
    <div className='fixed left-5 top-5  text-white flex rounded-full bg-white/15 background-blur-sm p-2'>
        <a href="/" className=''> <Home /> </a>
    </div>
  )
}

export default ButtonHome