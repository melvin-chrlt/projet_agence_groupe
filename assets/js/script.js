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


