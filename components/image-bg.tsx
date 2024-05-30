'use client';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {}

const ImageBg = (props: Props) => {
    return (
        <div className="min-h-screen flex bg-gradient-cover">
            <img {...props} />
        </div>
    );
};

export default ImageBg;
