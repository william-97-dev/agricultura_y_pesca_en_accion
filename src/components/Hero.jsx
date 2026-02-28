import React from 'react'
import imagenHero from "../assets/images/ImagenHero.png"

const Hero = () => {
    return (
        <main id='inicio' className='flex items-center justify-center min-h-screen bg-cover bg-center'
            style= {{ backgroundImage: `url(${imagenHero}` }}
        >
            <div className='absolute inset-0 bg-black/60 z-0'></div>
            <header className='max-w-xl p-2 text-white z-5 lg:max-w-4xl lg:mr-96 lg:p-2'>
                <h1 className='text-3xl font-bold mb-6 lg:text-6xl lg:mb-8 leading-tight text-[#BFA181]'>
                    Redes hechas por manos expertas, <span className='text-[#6ACFC7]'>resultados de confianza.</span>
                </h1>
                <p className='text-white/90 lg:text-lg max-w-2xl'>
                    Con más de 20 años de experiencia, fabricamos atarrayas resistentes
                    y trasmallos de calidad superior para una pesca confiable.
                </p>
                <button className='border-2 border-[#BFA181] text-[#6ACFC7] font-bold cursor-pointer px-6 py-4 rounded-md mt-4 lg:mt-6 hover:bg-[#BFA181] hover:text-black transition-colors duration-700 ease-in-out'>
                    Ver catálogo
                </button>
            </header>
        </main>
    )
}

export default Hero
