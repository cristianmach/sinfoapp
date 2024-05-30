'use client';
import ButtonHome from "@/components/home-botton";
import ImageBg from "@/components/image-bg";
import Navbar from "@/components/navbar";
import { TitleExp } from "@/components/title-experience";

const Paz = () => {
    return (
        <div className="justify-center content-center">
            <ImageBg src='/img/paz.jpg' /> 
            <Navbar urlBefore='/love-page' urlNext='/focus-page' />
            <ButtonHome />
            <TitleExp children={'Peace Experience'}/>
        </div>
    );
};

export default Paz;
