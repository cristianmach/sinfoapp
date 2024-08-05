'use client';
import ButtonHome from "@/components/home-botton";
import ImageBg from "@/components/image-bg";
import Navbar from "@/components/navbar";
import { TitleExp } from "@/components/title-experience";

const Serenity = () => {
    return (
        <div className="justify-center content-center">
            <ImageBg src='/img/serenidad.jpeg' alt="Imagen de Serenidad" /> 
            <Navbar urlBefore='/happy-page' urlNext='/empatia-page' audioSrc="/music/serenidad.mp3"/>
            <ButtonHome />
            <TitleExp>Serenity Experience</TitleExp>
        </div>
    );
};

export default Serenity;