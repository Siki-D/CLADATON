var navbartoggler=document.querySelector(".navbartoggler");
var navmenu=document.querySelector("nav#nav ul")
var navbarlinks=document.querySelector("nav#nav ul li a")

navbartoggler.addEventListener("click",  navbarfunction);

function navbarfunction() {
    navbartoggler.classList.toggle("open-navbar-toggler")
    navmenu.classList.toggle("open")
}