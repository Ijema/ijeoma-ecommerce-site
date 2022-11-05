let blink = document.getElementById("blink")

setInterval(() => {
    blink.style.opacity=
    (blink.style.opacity == 0 ? 1 : 0)
    blink.style.color="black"
}, 1000);