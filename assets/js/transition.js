const hero = document.querySelector("#hero");

hero.addEventListener("mousemove", e => {
    // e.target.style.clipPath = `ellipse(60% ${e.y*2}% at ${e.x/8}% 0%)`
})
const trackMouse = (e) => {
   hero.style.setProperty(
        '--cursorXpos', `${e.clientX}px`
    )
    hero.style.setProperty(
        '--cursorYpos', `${e.clientY}px`
    )
}
hero.addEventListener('mousemove' , trackMouse);

