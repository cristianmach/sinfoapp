'use client';

import Image from 'next/image';

interface Props {
    src: string;
    alt: string;
}

const ImageBg = ({ src, alt }: Props) => {
    return (
        <div className="min-h-screen flex bg-gradient-cover">
            <Image src={src} alt={alt} layout="fill" objectFit="cover" />
        </div>
    );
};

export default ImageBg;
