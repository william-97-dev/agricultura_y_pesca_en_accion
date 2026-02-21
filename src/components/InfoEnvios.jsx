import React from 'react'
import camionEnvio from "../assets/icons/iconEnvio.svg"

const InfoEnvios = () => {
    return (
        <section id='envios' className='p-4'>
            <div className='flex flex-col'>
                <div>
                    <img src={camionEnvio} alt="Icono de carro para envios" className='h-12' />
                    <h4 className='font-bold'>Envios a todo El Salvador.</h4>
                    <p className='border-l-4 border-l-(--primary-yellow) pl-2'>
                        Realizamos entregas en puntos publicos y seguros, como
                        centros comerciales, parques o desvios cercanos. <br />
                        <span className='text-red-500 font-bold'>NOTA</span>: Si su lugar de residencia se encuentra a una distancia
                        considerable, coordinaremos un punto intermedio conveniente
                        para ambas partes.
                    </p>
                    <br />

                    <h4 className='font-bold'>Envios a Estados Unidos.</h4>
                    <p className='border-l-4 border-l-(--primary-yellow) pl-2'>
                        Para adquirir su producto, debe coordinar con un viajero que se dirija
                        al estado donde reside.
                        El costo del traslado del producto es asumido por el cliente. <br />
                        <span className='text-red-500 font-bold'>NOTA</span>: Para mas informacion o asistencia con el proceso, no dude
                        en contactarnos.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default InfoEnvios
