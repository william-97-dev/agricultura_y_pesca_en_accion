import React from 'react'

const Mapa = () => {
    return (
        <section className='py-6 lg:py-16 bg-[#6E6E6E]'>
            <div data-aos="fade-up" className='flex flex-col px-4 lg:w-6xl m-auto lg:p-2 text-center'>
                <article className='mb-2'>
                    <h4 className='font-bold lg:text-3xl lg:pb-2 text-[#01257D]'>LUGAR PARA DISFRUTAR EN FAMILIA.</h4>
                    <p>Rio Lempa, Puente Cuscatlán, El Salvador.</p>
                </article>

                <iframe src="
                https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4766.42697457703!2d-88.56989942408345!3d13.610787686766551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f64b3ed4328b3eb%3A0x9160ffe14d1e49e7!2sPuente%20Cuscatl%C3%A1n!5e1!3m2!1ses-419!2ssv!4v1771433781458!5m2!1ses-419!2ssv
                "
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className='lg:h-72'
                >
                </iframe>
            </div>
        </section>
    )
}

export default Mapa
