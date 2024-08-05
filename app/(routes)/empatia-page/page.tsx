'use client';
import ButtonHome from "@/components/home-botton";
import ImageBg from "@/components/image-bg";
import Navbar from "@/components/navbar";
import { TitleExp } from "@/components/title-experience";

const Empathy = () => {
    return (
        <div className="justify-center content-center">
            <ImageBg src='/img/empatia.jpeg' alt="Imagen de Serenidad" /> 
            <Navbar urlBefore='/serenidad-page' urlNext='/confianza-page' audioSrc="/music/empatia.mp3"/>
            <ButtonHome />
            <TitleExp>Empathy Experience</TitleExp>
        </div>
    );
};

export default Empathy;