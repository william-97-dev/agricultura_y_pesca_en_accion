import React from 'react'
import CardProducto from './CardProducto'
import { productos } from '../data/productos'

const Catalogo = () => {
    return (
        <section id='catalogo' className='py-2 flex flex-col items-center'>
            <div>
                <p className=''>NUESTRO CATALOGO</p>
                <button className='border'>Ver todos los productos</button>
            </div>
            {productos.map((item) => (
                <CardProducto
                key={item.id}
                imagen={item.imagen}
                titulo={item.titulo}
                descripcion={item.descripcion}
                />
            ))}
        </section>
    )
}

export default Catalogo
