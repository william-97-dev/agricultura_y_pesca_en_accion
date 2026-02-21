import React from 'react'
import { FaFacebook, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa"

const RedesSociales = () => {
    return (
        <footer className='px-6 py-2 bg-(--primary-blue) text-white'>
            <div className='mb-4'>
                <h4 className='font-bold text-(--primary-yellow)'>Agricultura y Pesca en Acción</h4>
                <p>
                    Maestro artesano con más de 30 años de experiencia en la
                    elaboración de atarrayas y trasmallos, combinando tradición,
                    precisión y materiales de alta calidad.
                </p>
            </div>
            <div className='mb-4'>
                <h4 className='font-bold text-(--primary-yellow)'>Navegación</h4>
                <ul>
                    <a href="#inicio">
                        <li>Inicio</li>
                    </a>
                    <a href="#catalogo">
                        <li>Catálogo</li>
                    </a>
                    <a href="#envios">
                        <li>Envíos</li>
                    </a>
                </ul>
            </div>
            <div className='flex justify-between items-center'>
                <h4 className='font-bold text-(--primary-yellow)'>Redes Sociales</h4>
                <div className='flex gap-4 text-3xl'>
                    <a
                        href="https://www.facebook.com/share/1CF9CB7cJa/"
                        target='_blank'
                        aria-label='Facebook'
                        className='text-gray-300 hover:text-blue-600 transition-colors duration-700 ease-in-out'
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://www.tiktok.com/@agricultura_pesca?_r=1&_t=ZS-945jrPH55IT"
                        target='_blank'
                        aria-label='TikTok'
                        className='text-gray-300 hover:text-black transition-colors duration-700 ease-in-out'
                    >
                        <FaTiktok />
                    </a>
                    <a
                        href="https://wa.me/50379913328"
                        target='_blank'
                        aria-label='WhatsApp'
                        className='text-gray-300 hover:text-green-500 transition-colors duration-700 ease-in-out'
                    >
                        <FaWhatsapp />
                    </a>
                    <a
                        href="https://youtube.com/@agriculturaypesca-m3t?si=_rJnommRXs-O3K9S"
                        target='_blank'
                        aria-label='Youtube'
                        className='text-gray-300 hover:text-red-600 transition-colors duration-700 ease-in-out'
                    >
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </footer>

    )
}

export default RedesSociales
