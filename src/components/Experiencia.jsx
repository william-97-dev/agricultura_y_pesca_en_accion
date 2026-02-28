import React from 'react'

const Experiencia = () => {
    return (
        <section className='flex flex-col justify-center lg:flex-row lg:py-16 lg:space-x-36 px-6 text-center tracking-wide bg-[#6E6E6E]'>
            <article className='p-6 mb-4'>
                <h4 className='font-bold text-4xl lg:text-6xl text-[#01257D]'>20+</h4>
                <p className='text-[#6acfc7]'><small className='lg:text-lg lg:font-bold'>AÑOS DE EXPERIENCIA</small></p>
            </article>
            <article className='p-6 mb-4'>
                <h4 className='font-bold text-4xl lg:text-6xl text-[#01257D]'>2</h4>
                <p className='text-[#6acfc7]'><small className='lg:text-lg lg:font-bold'>PAISES ATENDIDOS</small></p>
            </article>
            <article className='p-6'>
                <h4 className='font-bold text-4xl lg:text-6xl text-[#01257D]'>200+</h4>
                <p className='text-[#6acfc7]'><small className='lg:text-lg lg:font-bold'>CLIENTES SATISFECHOS</small></p>
            </article>
        </section>
    )
}

export default Experiencia
