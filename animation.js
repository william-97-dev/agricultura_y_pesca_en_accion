import gsap from "gsap";
import SplitType from "split-type";

export const animationLogo = (logo) => {
    gsap.fromTo(logo, {
        x: -100,
        //rotate: 360,
        scale: 0
    },
        {
            x: 0,
            //rotate: 0,
            scale: 1,
            duration: 2,
            ease: "bounce.out"
        })
}

export const animationSocialMedia = (socialMedia) => {
    gsap.fromTo(socialMedia, {
        //estado inicial
        x: -100,
        scale: 0
    },// estado final
        {
            x: 0,
            scale: 1,
            duration: 1,
            ease: "sine.inOut"
        })
}

export const animationTitle = (h1Title) => {
    const text = new SplitType(h1Title, { types: 'words, chars' })

    gsap.fromTo(text.chars, {
        y: () => gsap.utils.random(-150, 150),
        x: () => gsap.utils.random(-300, 300),
        rotate: () => gsap.utils.random(-360, 360),
        scale: () => gsap.utils.random(0, 2),
        opacity: 0
    },
    {
        y: 0,
        x: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out",
        stagger: 0.03,
    }
    )
}

export const animationNav = (listNav) => {
    gsap.fromTo(listNav.children, {
        y: -100,
        opacity: 0,
    },//Estado inicial
        {
            y: -0,
            opacity: 1,
            ease: "power3.out",
            duration: 1,
            stagger: 0.20 //podemos usar stagger si hay varios elementos para entrar uno por uno
        }//Estado final
    )
}

export const animationPSpan = (pSpan) => {
    gsap.fromTo(pSpan, {
        y: -100,
        opacity: 0
    },
    {
        y:-0,
        opacity: 1,
        duration: 1,
        ease: "power4.out"
    }
    )
}

export const animationButton = (myButton) => {
    gsap.fromTo(myButton, {
        y: -100,
        opacity: 0
    },
    {
        y:-0,
        opacity: 1,
        duration: 1,
        ease: "bounce.out"
    }
    )
}