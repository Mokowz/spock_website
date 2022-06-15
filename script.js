const parallax = document.getElementById("home")

window.addEventListener("scroll", () => {
    let offset = window.pageYOffset

    parallax.style.backgroundPositionY = offset * 0.5 + "px"
})


const menu = document.getElementById("tok")
const nav = document.querySelector("nav")
const list = document.getElementById("list")


menu.addEventListener("click", () => {
    console.log("dskbjvs")
})

$("#hamburger").click(function() {
    $(".nav-list").toggleClass("show")
})
$(".nav-list").click(function() {
    $(".nav-list").toggleClass("show")
})


var speed = 'slow';

$('html, body').hide();

$(document).ready(function() {
    $('html, body').fadeIn(speed, function() {
        $('a[href], button[href]').click(function(event) {
            var url = $(this).attr('href');
            if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
            event.preventDefault();
            $('html, body').fadeOut(speed, function() {
                window.location = url;
            });
        });
    });
});