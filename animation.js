import gsap from "gsap";

export const animationLogo = (logo) => {
    gsap.fromTo(logo, {
        x: -100,
        rotate: 360,
        scale: 0
    },
        {
            x: 0,
            rotate: 0,
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

export const animationTitle = (h1Principal) => {
    gsap.fromTo(h1Principal, {
        y: -100,
        opacity: 0
    },//Estado inicial
        {
            y: -0,
            opacity: 1,
            ease: "power3.out",
            duration: 1.5
        }//Estado final
    )
}

export const animationNav = (listNav) => {
    gsap.fromTo(listNav.children, {
        y: -100,
        opacity: 0,
         //podemos usar stagger si hay varios elementos para entrar uno por uno
    },//Estado inicial
        {
            y: -0,
            opacity: 1,
            ease: "power3.out",
            duration: 1,
            stagger: 0.20
        }//Estado final
    )
}