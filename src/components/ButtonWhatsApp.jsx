import {useEffect, useState} from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const ButtonWhatsApp = () => {
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.getElementById("footerPage")
            if (!footer) {
                return 
            }
            const rect = footer.getBoundingClientRect()

            // Si el footer es visible en el viewport -> se oculta
            if(rect.top < window.innerHeight){
                setHidden(true)
            }else{
                setHidden(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    if(hidden) return null

    const phone = "50379913328"
    const message = "Hola, quiero información sobre sus productos."
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    return (
        <div>
            <a href={url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Chat en WhatsApp'
                className='fixed bottom-8 left-5 z-30 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 hover:bg-green-600 transition'
            >
                <FaWhatsapp className='text-3xl' />
            </a>
        </div>
    )
}

export default ButtonWhatsApp
