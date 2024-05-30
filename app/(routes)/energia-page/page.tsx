'use client';
import ButtonHome from "@/components/home-botton";
import ImageBg from "@/components/image-bg";
import Navbar from "@/components/navbar";
import { TitleExp } from "@/components/title-experience";

const Energy = () => {
    return (
        <div className="justify-center content-center">
            <ImageBg src='/img/energia.jpg' alt="Imagen De Energia"/> 
            <Navbar urlBefore='/focus-page' urlNext='/love-page' />
            <ButtonHome />
            <TitleExp>Energy Experience</TitleExp>
        </div>
    );
};

export default Energy;
