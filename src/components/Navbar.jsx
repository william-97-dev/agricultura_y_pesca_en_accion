import React, { useState, useRef, useEffect } from 'react'
import miLogo from '../assets/images/Logo_nav.png'
import menu from '../assets/icons/menu.svg'
import { FaFacebook, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa"
import { animationNav } from '../../animation'
import { animationLogo } from '../../animation'
import { animationSocialMedia } from '../../animation'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const boxRef = useRef(null)
    const boxLog = useRef(null)
    const boxSocialMedia = useRef(null)

    const handleScroll = (id) => {
        const section = document.getElementById(id)
        section?.scrollIntoView({ behavior: 'smooth' })
        setOpen(false)
    }

    useEffect(() => {
        animationNav(boxRef.current)
        animationLogo(boxLog.current)
        animationSocialMedia(boxSocialMedia.current)
    }, [])

    return (
        <>
            <nav className='fixed flex items-center top-0 left-0 w-full z-50 h-14 lg:h-20 lg:max-w-6xl lg:left-1/2 lg:-translate-x-1/2 lg:top-4'>
                <div className='w-full mx-auto flex justify-between items-center px-4 lg:h-20 lg:justify-between'>
                    <div ref={boxLog} className='bg-gray-300 rounded-full h-10 w-10 lg:h-16 lg:w-16 flex items-center justify-center lg:p-2'>
                        <img src={miLogo} alt="Logo de Agricultura y Pesca" className='h-5 lg:h-7' />
                    </div>
                    {/**MENU DESKTOP */}
                    <div ref={boxRef} className='hidden lg:flex lg:items-center gap-8 font-medium lg:text-2xl text-[#6acfc7]'>
                        <button onClick={() => handleScroll("inicio")} className='cursor-pointer'>Inicio</button>
                        <button onClick={() => handleScroll("catalogo")} className='cursor-pointer'>Catálogo</button>
                        <button onClick={() => handleScroll("envios")} className='cursor-pointer'>Envíos</button>
                    </div>
                    {/**REDES SOCIALES DESKTOP */}
                    <div ref={boxSocialMedia} className='hidden lg:flex lg:gap-8 lg:text-3xl'>
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
                {/**BOTON HAMBURGUESA */}
                <button onClick={() => setOpen(!open)}>
                    <span
                        className={`w-6 h-0.5 bg-black transition ${open ? "rotate-45 translate-y-1.5" : ""
                            }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-black transition ${open ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-black transition ${open ? "-rotate-45 -translate-y-1.5" : ""
                            }`}
                    />
                    <img src={menu} alt="Menu desplegable" className='lg:hidden pr-4 w-14 h-14' />
                </button>
            </nav>

            <div
                className={`fixed top-0 left-0 w-full h-screen z-40 bg-(--primary-green) backdrop-blur-sm transform transition-transform duration-300 ${open ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className='flex flex-col items-center justify-center h-full gap-8 text-[#FFCC00] text-2xl'>
                    <button onClick={() => handleScroll('inicio')}>Inicio</button>
                    <button onClick={() => handleScroll('catalogo')}>Catálogo</button>
                    <button onClick={() => handleScroll('envios')}>Envíos</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
