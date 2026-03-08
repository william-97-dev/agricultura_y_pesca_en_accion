import React from 'react'
import durabilidad from "../assets/icons/durabilidad.svg"
import precision from "../assets/icons/precision.svg"
import artesania from "../assets/icons/artesania.svg"

const Calidad = () => {
    return (
        <section>
            <div className='flex flex-col justify-center items-center px-6 py-4 lg:flex-row lg:gap-10 lg:px-48 lg:py-40'>
                <article data-aos="fade-right" className='w-full max-w-2xl bg-gray-200 backdrop-blur-md border-2 border-[#FFCC00] p-2 py-4 mb-4 rounded-md lg:py-10 lg:px-10'>
                    <img src={durabilidad} alt="Icono de calidad" className='bg-[#BFA181]/60 p-2 rounded-md mb-2' />
                    <h3 className='font-bold mb-2'>Durabilidad Extrema</h3>
                    <p>
                        Resisten el uso diario y las condiciones más exigentes
                        para acompañarte en cada jornada de pesca.
                    </p>
                </article>
                <article data-aos="flip-left" className='w-full max-w-2xl bg-gray-200 backdrop-blur-md border-2 border-[#FFCC00] p-2 py-4 mb-4 rounded-md lg:py-10 lg:px-10'>
                    <img src={precision} alt="Icono de precision" className='bg-[#BFA181]/60 p-2 rounded-md mb-2' />
                    <h3 className='font-bold mb-2'>Malla de Precisión</h3>
                    <p>
                        Diseñadas para una captura eficiente, con tejido uniforme
                        que mejora el rendimiento en cada lance.
                    </p>
                </article>
                <article data-aos="fade-left" className='w-full max-w-2xl bg-gray-200 backdrop-blur-md border-2 border-[#FFCC00] p-2 py-4 mb-4 rounded-md lg:py-10 lg:px-10'>
                    <img src={artesania} alt="Icono de artesania" className='bg-[#BFA181]/60 p-2 rounded-md mb-2' />
                    <h3 className='font-bold mb-2'>Artesania Experta</h3>
                    <p>
                        Producto elaborado a mano con experiencia y dedicación, garantizando calidad
                        ajustada en cada detalle.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default Calidad
