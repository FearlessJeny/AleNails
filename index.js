

$(function () {

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".nav-menu").addClass("active");
        } else {
            $(".nav-menu").removeClass("active");
        };
    });
});


const musicBtn = document.getElementById("musicToggle");
const music = document.getElementById("bgMusic");

musicBtn.addEventListener("click", () => {
    music.play();
    musicBtn.style.opacity = "0";
    setTimeout(() => musicBtn.style.display = "none", 300);
});