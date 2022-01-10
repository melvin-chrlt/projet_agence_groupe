let navMenu = document.querySelector("#menu");
let closeBtn = document.querySelector("#close");
let openMenu = document.querySelector("#menuBurger");

// Ouvrir le menu burger
function openBurger(){
    navMenu.style.display = "flex";
    closeBtn.style.display = "block";
}

// Fermer le menu burger
closeBtn.addEventListener("click", function(){
    navMenu.style.display = "none";
    closeBtn.style.display = "none";
})


//ANIMATION NAVBAR
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let textNav = document.querySelector("#navText");
    let navBar = document.getElementById("navBar");

  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    navBar.style.padding = "0.5em 0";
    textNav.style.fontSize = "18px";
  } else {
    navBar.style.padding = "1.5em 0";
    textNav.style.fontSize = "24px";
  }
}
