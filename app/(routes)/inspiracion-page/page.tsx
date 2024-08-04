'use client';
import ButtonHome from "@/components/home-botton";
import ImageBg from "@/components/image-bg";
import Navbar from "@/components/navbar";
import { TitleExp } from "@/components/title-experience";

const Inspiracion = () => {
    return (
        <div className="justify-center content-center">
            <ImageBg src='/img/inspiracion.jpeg' alt="Imagen de Inspiracion" /> 
            <Navbar urlBefore='/love-page' urlNext='/focus-page' audioSrc="/music/inspiracion.mp3"/>
            <ButtonHome />
            <TitleExp>Inspiration Experience</TitleExp>
        </div>
    );
};

export default Inspiracion;