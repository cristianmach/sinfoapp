'use client';
import ButtonHome from "@/components/home-botton";
import ImageBg from "@/components/image-bg";
import Navbar from "@/components/navbar";
import { TitleExp } from "@/components/title-experience";

const Love = () => {
    return (
        <div className="justify-center content-center">
            <ImageBg src='/img/love.jpg' alt="Imagen de Amor" /> 
            <Navbar urlBefore='/energia-page' urlNext='/paz-page' audioSrc="/music/paz.mp3" />
            <ButtonHome />
            <TitleExp>Love Experience</TitleExp>
        </div>
    );
};

export default Love;