import React, { useState } from 'react'
import miLogo from '../assets/images/Logo_nav.png'
import menu from '../assets/icons/menu.svg'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleScroll = (id) => {
        const section = document.getElementById(id)
        section?.scrollIntoView({ behavior: 'smooth' })
        setOpen(false)
    }

    return (
        <>
            <nav className='bg-white/20 backdrop-blur-xl border-white/30 shadow-md fixed flex items-center top-0 left-0 w-full z-50 h-12'>
                <div className='w-full mx-auto flex justify-between items-center px-4'>
                    <img src={miLogo} alt="Logo de Agricultura y Pesca" className='h-6' />
                    <small className='text-(--primary-blue) font-semibold'>Agricultura y Pesca  en Accion</small>
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
                        <img src={menu} alt="Menu desplegable" />
                    </button>
                </div>
            </nav>

            <div
                className={`fixed top-0 left-0 w-full h-screen z-10 bg-(--primary-green) backdrop-blur-sm transform transition-transform duration-300 ${
                open ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className='flex flex-col items-center justify-center h-full gap-8 text-white text-2xl'>
                    <button onClick={()=> handleScroll('inicio')}>Inicio</button>
                    <button onClick={()=> handleScroll('catalogo')}>Catálogo</button>
                    <button onClick={()=> handleScroll('envios')}>Envíos</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
