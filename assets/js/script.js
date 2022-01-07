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