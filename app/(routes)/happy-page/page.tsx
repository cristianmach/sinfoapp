'use client';
import ButtonHome from "@/components/home-botton";
import ImageBg from "@/components/image-bg";
import Navbar from "@/components/navbar";
import { TitleExp } from "@/components/title-experience";

const Happy = () => {
    return (
        <div className="justify-center content-center">
            <ImageBg src='/img/happy.jpeg' alt="Imagen de Inspiracion" /> 
            <Navbar urlBefore='/inspiracion-page' urlNext='/serenidad-page' audioSrc="/music/happy.mp3"/>
            <ButtonHome />
            <TitleExp>Happy Experience</TitleExp>
        </div>
    );
};

export default Happy;