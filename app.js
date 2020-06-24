var mousecursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-links li");
let zowie = document.querySelector(".front-desc h2");
let footer = document.querySelector("footer p");
let logo = document.querySelector(".logo");

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mousecursor.style.top = e.pageY + 'px';
    mousecursor.style.left = e.pageX + 'px';
}
logo.addEventListener('mouseleave', () => {
    mousecursor.classList.add("border-white");
});



navLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mousecursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");
    })
    link.addEventListener('mouseover', () => {
        mousecursor.classList.add("link-grow");
        link.classList.add("hovered-link");
        mousecursor.classList.remove("border-white");
    })
});

zowie.addEventListener('mouseleave', function() {
    mousecursor.classList.remove("link-grow");
    zowie.style.color = "black";
});
zowie.addEventListener('mouseover', function() {
    mousecursor.classList.add("link-grow");
    zowie.style.color = "white";
});



footer.addEventListener('mouseover', function() {
    mousecursor.classList.add("border-white");
})