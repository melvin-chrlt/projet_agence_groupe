
const projects = [
    {name: 'Projet 1', photo: "<img src='assets/images/projets/projet.jpg'>", description: 'Lorem, ipsum dolor sit amet elit.'},
    {name: 'Projet 2', photo: "<img src='assets/images/projets/projet.jpg'>", description: 'Lorem, ipsum dolor sit amet elit.'},
    {name: 'Projet 3', photo: "<img src='assets/images/projets/projet.jpg'>", description: 'Lorem, ipsum dolor sit amet elit.'},
    {name: 'Projet 4', photo: "<img src='assets/images/projets/projet.jpg'>", description: 'Lorem, ipsum dolor sit amet elit.'},
    {name: 'Projet 5', photo: "<img src='assets/images/projets/projet.jpg'>", description: 'Lorem, ipsum dolor sit amet elit.'},
    {name: 'Projet 6', photo: "<img src='assets/images/projets/projet.jpg'>", description: 'Lorem, ipsum dolor sit amet elit.'},
    {name: 'Projet 7', photo: "<img src='assets/images/projets/projet.jpg'>", description: 'Lorem, ipsum dolor sit amet elit.'},
    {name: 'Projet 8', photo: "<img src='assets/images/projets/projet.jpg'>", description: 'Lorem, ipsum dolor sit amet elit.'},
    {name: 'Projet 9', photo: "<img src='assets/images/projets/projet.jpg'>", description: 'Lorem, ipsum dolor sit amet elit.'},
];

let length = projects.length;
let i;

let projectCard = document.getElementById('projetsMain');
for (i = 0; i < length; i++){

    let itemProject = document.createElement('div');
    itemProject.innerHTML = projects[i].photo;
    projectCard.appendChild(itemProject);
}