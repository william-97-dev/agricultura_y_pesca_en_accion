import React from 'react'

const CardProducto = ({imagen, titulo, descripcion}) => {
    return (
        <article className='w-72 mb-4 mt-4 p-4 rounded-md border shadow-[5px_5px_0px_0px_var(--primary-blue)]'>
            <img
                src={imagen}
                alt={titulo}
                className='w-full h-64 object-cover rounded-md'
            />
            <div className='mt-2'>
                <h3 className='font-bold text-(--primary-blue)'>
                    {titulo}
                </h3>
                <p>{descripcion}</p>
                <button
                    className='border border-(--primary-green) py-2 px-2 mt-2 rounded-md text-(--primary-blue) font-bold hover:bg-(--primary-green) hover:text-white duration-700'>
                    Ver detalles
                </button>
            </div>
        </article>
    )
}

export default CardProducto
