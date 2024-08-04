// /focus-page/page.tsx
'use client';
import ButtonHome from "@/components/home-botton";
import ImageBg from "@/components/image-bg";
import Navbar from "@/components/navbar";
import { TitleExp } from "@/components/title-experience";

const Focus = () => {
    return (
        <div className="justify-center content-center">
            <ImageBg src='/img/focus.jpg' alt="Imagen de Concentración"/> 
            <Navbar 
              urlBefore='/paz-page' 
              urlNext='/energia-page' 
              audioSrc="/music/focus.mp3" // Ruta del audio específico para esta página
            />
            <ButtonHome />
            <TitleExp>Focus Experience</TitleExp>
        </div>
    );
};

export default Focus;

