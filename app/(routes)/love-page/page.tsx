'use client';
import ButtonHome from "@/components/home-botton";
import ImageBg from "@/components/image-bg";
import Navbar from "@/components/navbar";
import { TitleExp } from "@/components/title-experience";

const Love = () => {
    return (
        <div className="justify-center content-center">
            <ImageBg src='/img/love.jpg' /> 
            <Navbar urlBefore='/energia-page' urlNext='/paz-page' />
            <ButtonHome />
            <TitleExp children={'Love Experience'} />
        </div>
    );
};

export default Love;