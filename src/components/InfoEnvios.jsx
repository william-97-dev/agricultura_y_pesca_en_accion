import React from 'react'
import camionEnvio from "../assets/icons/iconEnvio.svg"

const InfoEnvios = () => {
    return (
        <section id='envios' className='p-4 flex flex-col lg:py-32 lg:flex-row lg:justify-center gap-6 lg:gap-12'>
            
                <article className='lg:w-xl'>
                    <img src={camionEnvio} alt="Icono de carro para envios" className='h-12' />
                    <h4 className='font-bold mb-2 lg:mb-6'>Envíos a todo El Salvador.</h4>
                    <p className='border-l-4 border-l-(--primary-yellow) pl-2'>
                        Realizamos entregas en puntos públicos y segúros, en
                        gasolineras, centros comerciales, parques o desvíos cercanos. <br />
                        <span className='text-red-500 font-bold'>NOTA</span>: Si su lugar de residencia se encuentra a una distancia
                        considerable, coordinaremos un punto intermedio conveniente
                        para ambas partes.
                    </p>
                </article>

                <article className='lg:w-xl'>
                    <img src={camionEnvio} alt="Icono de carro para envios" className='h-12' />
                    <h4 className='font-bold  mb-2 lg:mb-6'>Envíos a Estados Unidos.</h4>
                    <p className='border-l-4 border-l-(--primary-yellow) pl-2'>
                        Para adquirir su producto, debe coordinar con un viajero que se dirija
                        al estado donde reside.
                        El costo del traslado del producto es asumido por el cliente. <br />
                        <span className='text-red-500 font-bold'>NOTA</span>: Para mas información o asistencia con el proceso, no dude
                        en contactarnos.
                    </p>
                </article>
            
        </section>
    )
}

export default InfoEnvios
