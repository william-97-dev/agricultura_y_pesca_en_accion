import React from 'react'

const Experiencia = () => {
    return (
        <section>
            <div className='flex flex-col px-6 text-center bg-(--primary-blue)'>
                <article className='p-6 mb-4'>
                    <h4 className='font-bold text-4xl text-sky-300'>30+</h4>
                    <p className='text-white'><small>ANIOS DE EXPERIENCIA</small></p>
                </article>
                <article className='p-6 mb-4'>
                    <h4 className='font-bold text-4xl text-sky-300'>200+</h4>
                    <p className='text-white'><small>CLIENTES SATISFECHOS</small></p>
                </article>
                <article className='p-6'>
                    <h4 className='font-bold text-4xl text-sky-300'>2</h4>
                    <p className='text-white'><small>PAISES ATENDIDOS</small></p>
                </article>
            </div>
        </section>
    )
}

export default Experiencia
