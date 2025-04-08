const themeButton = document.getElementById(`theme_button`);
const themeImg = document.getElementById(`themeImg`);
const canvas = document.getElementById('particles-js');

let currentTheme = 'darkTheme';

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('light');
    if (currentTheme === 'darkTheme') {
        themeImg.src = 'source/sun.svg';
        currentTheme = 'lightTheme';
    } else {
        themeImg.src = 'source/moon.svg';
        currentTheme = 'darkTheme';
    }
    }
);


const filterButtons = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project_card');

function filterProjects(attribute) {
    projects.forEach(project => {
        if (attribute === "tous" || project.getAttribute('data-attribute') === attribute) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const attribute = button.getAttribute('data-attribute');
        filterProjects(attribute);
    });
});


var swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true
});

const img = document.getElementById(project_img);

function zoomImage(image) {
    var popup = document.getElementById("popup");
    var popup_img = document.getElementById("popup_img");
    popup.style.display = "flex";
    popup_img.src = image.src;
}

window.onclick = function(event) {
    var popup = document.getElementById("popup");
    var popup_content = document.querySelector(".popup-content");
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

img.addEventListener('click', function() {
    zoomImage(img);
})