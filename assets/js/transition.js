const hero = document.querySelector("#hero");
const trackMouse = (e) => {
    hero.style.setProperty(
        '--cursorXpos', `${e.clientX}px`
    )
    hero.style.setProperty(
        '--cursorYpos', `${e.clientY}px`
    )
}
hero.addEventListener('mousemove', trackMouse);
document.querySelector(".bulb").addEventListener("click", e => {
    document.querySelector('#i').classList.toggle('bi-lightbulb');
    if (document.querySelector('#i').classList.contains('bi-lightbulb')) {
        hero.style.setProperty(
            '--radius', '100em'
        )
    } else {
        hero.style.setProperty(
            '--radius', '25em'
        )
    }

})
document.querySelector(".portfolio-links a").addEventListener("click", (e) => {
    switch (e.target.id) {
        case "voop":
            break;
        case "construction":
            template(data.construction);
            break;
        default:
            break;
    }
})