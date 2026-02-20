import React from 'react'
import imagenHero from "../assets/images/imgHero.jpeg"

const Hero = () => {
    return (
        <main className='flex items-center justify-center min-h-screen bg-cover bg-center '
            style= {{ backgroundImage: `url(${imagenHero}` }}
        >
            <div className='absolute inset-0 bg-black/60 z-0'></div>
            <header className='max-w-xl p-4 text-white z-5'>
                <h1 className='text-5xl font-bold mb-8'>
                    Redes hechas por manos expertas, resultados de confianza.
                </h1>
                <p className='text-white/90'>
                    Con más de 30 años de experiencia, fabricamos atarrayas resistentes
                    y trasmallos de calidad superior para una pesca confiable.
                </p>
                <button className='bg-(--primary-yellow) text-(--primary-blue) font-bold cursor-pointer border-none px-6 py-4 rounded-md mt-4'>
                    Ver catálogo
                </button>
            </header>
        </main>
    )
}

export default Hero
