// Add this JavaScript code to handle the mobile click effect
const cardLinks = document.querySelectorAll(".card-link");

cardLinks.forEach((link) => {
    link.addEventListener("touchstart", (event) => {
        link.style.transform = "scale(1.05)";
    });

    link.addEventListener("touchend", (event) => {
        link.style.transform = "scale(1)";
    });
});
