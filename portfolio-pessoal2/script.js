const menuToggle = document.getElementById("menu-toggle");
const slideMenu = document.getElementById("slide-menu");

menuToggle.addEventListener("click", function () {

    menuToggle.classList.toggle("active");

    slideMenu.classList.toggle("active");

});


const links = document.querySelectorAll(".slide-menu a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        menuToggle.classList.remove("active");

        slideMenu.classList.remove("active");

    });

});