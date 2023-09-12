const poga = document.getElementById("poga");
const kvadrats = document.getElementById("kvadrats");
const background = document.querySelector(".background");
let klikski = 0;

poga.addEventListener("click", () => {
    klikski++;
    poga.textContent = `CLICKS: ${klikski}`;

    const backgroundWidth = background.clientWidth;
    const backgroundHeight = background.clientHeight;

    const randomX = Math.floor(Math.random() * (backgroundWidth - kvadrats.clientWidth));
    const randomY = Math.floor(Math.random() * (backgroundHeight - kvadrats.clientHeight));
    
    const randomColor = getRandColor();

    kvadrats.style.transform = `translate(${randomX}px, ${randomY}px)`;
    kvadrats.style.backgroundColor = randomColor;

    const randomRotation = Math.floor(Math.random() * 360);
    kvadrats.style.transform += `rotate(${randomRotation}deg)`;
});

function getRandColor() {
    const letters = '0123456789ABCDEF';
    let krasa = '#';
    for (let i = 0; i < 6; i++) {
        krasa += letters[Math.floor(Math.random() * 16)];
    }
    return krasa;
}