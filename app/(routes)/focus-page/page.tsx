'use client';
import ButtonHome from "@/components/home-botton";
import ImageBg from "@/components/image-bg";
import Navbar from "@/components/navbar";
import { TitleExp } from "@/components/title-experience";

const Focus = () => {
    return (
        <div className="justify-center content-center">
            <ImageBg src='/img/focus.jpg' /> 
            <Navbar urlBefore='/paz-page' urlNext='/energia-page' />
            <ButtonHome />
            <TitleExp children={'Focus Experience'} />
        </div>
    );
};

export default Focus;
