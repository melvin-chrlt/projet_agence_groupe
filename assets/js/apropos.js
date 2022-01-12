// function to display the face of the cards according to the title
function openModal(idModal){
    var modals = document.querySelectorAll(".displayNone");
    var modalsLenght = modals.length;

    for (let i = 0; i < modalsLenght; i++){
        modals[i].classList.add('displayNone');
    }
    document.getElementById(idModal).classList.toggle('displayNone');
};
