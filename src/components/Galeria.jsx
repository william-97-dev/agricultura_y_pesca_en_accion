import React from 'react'
import { galeriaImagenes } from '../data/galeriaImagenes'

const Galeria = () => {
    const loopImages = [...galeriaImagenes, ...galeriaImagenes]
    return (
        <section className='overflow-hidden py-10 mx-4'>
            {/* LINEA INFERIOR (derecha) */}
            <div className="flex w-max animate-carousel gap-1">
                {loopImages.map((img, i) => (
                    <div className='relative'>
                        <img
                            key={i}
                            src={img.src}
                            alt={img.alt}
                            className="h-40 w-40 shrink-0 rounded-sm object-cover"
                        />
                        <div className='absolute inset-0 bg-black/30 rounded-sm'></div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Galeria
