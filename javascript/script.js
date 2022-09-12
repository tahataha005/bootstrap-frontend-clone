window.onload = () => {

    const p1 = document.getElementById("p1")
    const p2 = document.getElementById("p2")
    const p3 = document.getElementById("p3")
    const p4 = document.getElementById("p4")
    const p5 = document.getElementById("p5")
    const p6 = document.getElementById("p6")
    const delHeader = document.getElementById("deleteHeader")
    const topSection = document.getElementById("topSection")
    const header = document.getElementById("header")


    p1.addEventListener("mouseenter",() =>{
        p1.style.opacity = '20%'
    })
    p1.addEventListener("mouseleave",() =>{
        p1.style.opacity = '100%'
    })


    p2.addEventListener("mouseenter",() =>{
        p2.style.opacity = '20%'
    })
    p2.addEventListener("mouseleave",() =>{
        p2.style.opacity = '100%'
    })


    p3.addEventListener("mouseenter",() =>{
        p3.style.opacity = '20%'
    })
    p3.addEventListener("mouseleave",() =>{
        p3.style.opacity = '100%'
    })


    p4.addEventListener("mouseenter",() =>{
        p4.style.opacity = '20%'
    })
    p4.addEventListener("mouseleave",() =>{
        p4.style.opacity = '100%'
    })


    p5.addEventListener("mouseenter",() =>{
        p5.style.opacity = '20%'
    })
    p5.addEventListener("mouseleave",() =>{
        p5.style.opacity = '100%'
    })


    p6.addEventListener("mouseenter",() =>{
        p6.style.opacity = '20%'
    })
    p6.addEventListener("mouseleave",() =>{
        p6.style.opacity = '100%'
    })


    delHeader.addEventListener("click",() =>{
        header.remove()

    })

}

    