import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ButtonFlecha = () => {
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 200) {
                setHidden(false)
            }else {
                setHidden(true)
            }
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    if (hidden) return null

    return (
        <div>
            <a href='#inicio'
                aria-label='Ir a inicio'
                className='fixed bottom-8 right-5 z-30 flex items-center justify-center w-14 h-14 rounded-full bg-(--primary-blue) text-(--primary-yellow) hover:scale-110 transition'
            >
                <FaArrowUp className='text-3xl' />
            </a>
        </div>
    )
}

export default ButtonFlecha
