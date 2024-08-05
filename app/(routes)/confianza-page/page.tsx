'use client';
import ButtonHome from "@/components/home-botton";
import ImageBg from "@/components/image-bg";
import Navbar from "@/components/navbar";
import { TitleExp } from "@/components/title-experience";

const Confidence = () => {
    return (
        <div className="justify-center content-center">
            <ImageBg src='/img/confianza.jpeg' alt="Imagen de Confianza" /> 
            <Navbar urlBefore='/empatia-page' urlNext='/satisfacion-page' audioSrc="/music/confianza.mp3"/>
            <ButtonHome />
            <TitleExp>Confidence Experience</TitleExp>
        </div>
    );
};

export default Confidence;