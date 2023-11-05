document.addEventListener('DOMContentLoaded', function () {
    let blink = document.getElementById("special-offer");

    if (blink) {
        setInterval(() => {
            blink.style.opacity = blink.style.opacity === '0' ? '1' : '0';
            blink.style.color = 'black';
        }, 1000);
    } else {
        console.error("Element with ID 'blink' not found.");
    }
});
