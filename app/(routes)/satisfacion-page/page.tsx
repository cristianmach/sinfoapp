'use client';
import ButtonHome from "@/components/home-botton";
import ImageBg from "@/components/image-bg";
import Navbar from "@/components/navbar";
import { TitleExp } from "@/components/title-experience";

const Satisfaction = () => {
    return (
        <div className="justify-center content-center">
            <ImageBg src='/img/satisfacion.jpeg' alt="Imagen de Satisfacion" /> 
            <Navbar urlBefore='/confianza-page' urlNext='/paz-page' audioSrc="/music/satisfacion.mp3"/>
            <ButtonHome />
            <TitleExp>Satisfaction Experience</TitleExp>
        </div>
    );
};

export default Satisfaction;