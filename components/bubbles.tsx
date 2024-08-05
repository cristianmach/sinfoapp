'use client'

import { useEffect, useState } from "react";

const Bubbles = () => {
    return (
        <div className=" font-mono md:text-xl text-secondary font-bold grid md:grid-cols-4 lg:grid-cols-2 flex lg:gap-28 gap-10 text-center justify-evenly place-items-center md:mx-10 lg:mx-80">
            <a href="/paz-page" className="w-40 h-40 font-mono rounded-full bg-gradient-white content-center border cursor-pointer">PAZ</a>
            <a href="/focus-page" className="w-40 h-40 rounded-full bg-gradient-green content-center border cursor-pointer">CONCENTRACIÓN</a>
            <a href="/energia-page" className="w-40 h-40 rounded-full bg-gradient-yellow content-center border cursor-pointer">ENERGÍA</a>
            <a href="/love-page" className="w-40 h-40 rounded-full bg-gradient-purple content-center border cursor-pointer">AMOR</a>
            <a href="/inspiracion-page" className="w-40 h-40 rounded-full bg-gradient-orange content-center border cursor-pointer">INSPIRACION</a>
            <a href="/happy-page" className="w-40 h-40 rounded-full bg-gradient-blue content-center border cursor-pointer">FELICIDAD</a>
            <a href="/serenidad-page" className="w-40 h-40 rounded-full bg-gradient-morado content-center border cursor-pointer">SERENIDAD</a>
            <a href="/empatia-page" className="w-40 h-40 rounded-full bg-gradient-rosa content-center border cursor-pointer">EMPATIA</a>
            <a href="/confianza-page" className="w-40 h-40 rounded-full bg-gradient-cielo content-center border cursor-pointer">CONFIANZA</a>
            <a href="/satisfacion-page" className="w-40 h-40 rounded-full bg-gradient-verde content-center border cursor-pointer">SATISFACCION</a>
            
        </div>
    )
}

export default Bubbles;