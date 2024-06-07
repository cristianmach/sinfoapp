const IntroText = () => {
    return (
        <div className="flex grid grid-cols-1 my-4 text-white justify-center place-items-center content-center mx-24 lg:mx-56 text-center font-mono">
            <h2>Bienvenidos a SinfoApp, un sitio web donde podrás experimentar por medio de la musicoterapia, diferentes sensaciones y emociones relajantes. Una nueva forma innovadora que te ayudará a mejorar tu bienestar emocional.</h2>
            <h2 className="font-mono italic py-5 font-bold">Prepárate para entrar en armonía con tus emociones, presiona para iniciar</h2>
            <div className='text-white rounded-full bg-white/15 background-blur-sm p-2'>
                <a href="/cover-page" className='font-bold'>INICIAR </a>
            </div>
        </div>
    )
}

export default IntroText;