// Rotating image preview
const rotatingImageContainer = document.querySelector(".rotating-image-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let x = 0;

prevBtn.addEventListener("click", () => {
    x = x + 45;
    rotate();
});

nextBtn.addEventListener("click", () => {
    x = x - 45;
    rotate();
});

function rotate() {
    rotatingImageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}