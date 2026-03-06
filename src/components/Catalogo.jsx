import React from 'react'
import CardProducto from './CardProducto'
import { productos } from '../data/productos'

const Catalogo = () => {
    return (
        <section id='catalogo' className='lg:pb-40'>
            <div className='flex items-center justify-center gap-8 lg:gap-72 pt-4'>
                <p className='lg:text-xl font-bold'>NUESTRO CATÁLOGO</p>
                <button className='border-b-2 border-[#01257D] font-semibold p-2 lg:py-2 lg:px-4 rounded-md bg-[#BFA181] text-[#01257D]'>Ver más</button>
            </div>
            <div className='py-2 flex flex-col items-center lg:justify-center lg:flex-row lg:gap-8'>
                {productos.map((item) => (
                    <CardProducto
                        key={item.id}
                        imagen={item.imagen}
                        titulo={item.titulo}
                        descripcion={item.descripcion}
                    />
                ))}
            </div>
        </section>
    )
}

export default Catalogo
