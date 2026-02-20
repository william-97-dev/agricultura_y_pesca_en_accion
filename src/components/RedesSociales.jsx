import React from 'react'
import { FaFacebook, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa"

const RedesSociales = () => {
    return (
        <footer className='px-6 py-2'>
            <div className='mb-4'>
                <h4 className='font-bold'>Agricultura y Pesca en Accion</h4>
                <p>
                    Maestro artesano con más de 30 años de experiencia en la
                    elaboración de atarrayas y trasmallos, combinando tradición,
                    precisión y materiales de alta calidad para ofrecer herramientas
                    confiables que acompañan cada jornada de pesca con resultados
                    superiores.
                </p>
            </div>
            <div className='mb-4'>
                <h4 className='font-bold'>Navegacion</h4>
                <ul>
                    <li>Inicio</li>
                    <li>Catalogo</li>
                    <li>Envios</li>
                </ul>
            </div>
            <div>
                <h4 className='font-bold'>Redes Sociales</h4>
                <a href="">
                    <FaFacebook/>
                </a>
                <a href="">
                    <FaTiktok/>
                </a>
                <a href="">
                    <FaWhatsapp/>
                </a>
                <a href="">
                    <FaYoutube/>
                </a>
            </div>
        </footer>

    )
}

export default RedesSociales
