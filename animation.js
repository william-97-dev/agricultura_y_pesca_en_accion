import gsap from "gsap";

export const animationTitle = (h1Principal) => {
    gsap.fromTo(h1Principal, {
        y: -100,
        opacity: 0,
        //stagger: 0.25
        //podemos usar stagger si hay varios elementos para entrar uno por uno ejemplo en un nav
    },//Estado inicial
        {
            y: -0,
            opacity: 1,
            ease: "power3.out",
            duration: 1.5
        }//Estado final
    )
}