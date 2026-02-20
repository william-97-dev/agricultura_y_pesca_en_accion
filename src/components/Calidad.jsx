import React from 'react'
import durabilidad from "../assets/icons/durabilidad.svg"
import precision from "../assets/icons/precision.svg"
import artesania from "../assets/icons/artesania.svg"

const Calidad = () => {
    return (
        <section>
            <div className='flex flex-col justify-center items-center px-6 py-4'>
                <article className='w-full max-w-2xl bg-gray-200 backdrop-blur-md border border-(--primary-blue) p-2 mb-4 rounded-md'>
                    <img src={durabilidad} alt="Icono de calidad" className='bg-(--primary-green)/60 p-2 rounded-md' />
                    <h3 className='font-bold'>Durabilidad Extrema</h3>
                    <p>
                        Resisten el uso diario y las condiciones mas exigentes
                        para acompañarte en cada jornada de pesca.
                    </p>
                </article>
                <article className='w-full max-w-2xl bg-gray-200 backdrop-blur-md border border-(--primary-blue) p-2 mb-4 rounded-md'>
                    <img src={precision} alt="Icono de precision" className='bg-(--primary-green)/60 p-2 rounded-md' />
                    <h3 className='font-bold'>Malla de Precision</h3>
                    <p>
                        Diseñadas para una captura eficiente, con tejido uniforme
                        que mejora el rendimiento en cada lance.
                    </p>
                </article>
                <article className='w-full max-w-2xl bg-gray-200 backdrop-blur-md border border-(--primary-blue) p-2 rounded-md'>
                    <img src={artesania} alt="Icono de artesania" className='bg-(--primary-green)/60 p-2 rounded-md' />
                    <h3 className='font-bold'>Artesania Experta</h3>
                    <p>
                        Elaboradas a mano con experiencia y dedicacion, garantizando calidad
                        en cada detalle.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default Calidad
