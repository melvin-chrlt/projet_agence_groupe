let navMenu = document.querySelector("#menu");
let closeBtn = document.querySelector("#close");
let openMenu = document.querySelector("#menuBurger");

// Ouvrir le menu burger
function openBurger(){
    navMenu.style.display = "flex";
    closeBtn.style.display = "block";
    openMenu.style.display = "none";
}

// Fermer le menu burger
closeBtn.addEventListener("click", function(){
    navMenu.style.display = "none";
    closeBtn.style.display = "none";
    openMenu.style.display = "flex";
})

//ANIMATION JS SLIDE
function slide(){
    //déclaration de la variable pour tous les éléments ayant une classe anim
    let slidingExpertise = document.querySelectorAll(".anim");

    //boucle 
    for(let i = 0; i < slidingExpertise.length; i++){
        //hauteur de la fenêtre
        let windowHeight = window.innerHeight;
        //pour savoir la position du haut de mon élément
        let topEl = slidingExpertise[i].getBoundingClientRect().top;
        //hauteur à laquelle l'élément sera visible
        let elementVisible = 150;

        //si le haut de mon élément est inférieur à la hauteur de ma fenêtre - la hauteur à laquelle l'élément sera visible
        if(topEl < windowHeight - elementVisible){
            //ça ajoute la classe active
            slidingExpertise[i].classList.add("active");
        }
    }
}
//appelle l'évènement du scroll de la fenêtre, appelle de la function slide
window.addEventListener('scroll', slide);



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


//LOADER ANIMATION
const loader = document.querySelector('#pageLoader');

window.addEventListener("load", function(){
  setTimeout(function(){
    loader.style.display = "none";
  }, 1000);
});