// projects table : database
const projects = [
    {name: 'ARC LABS', photo: "<img src='assets/images/projets/projet1.jpg'>", description: 'Investissements de crédit spécialisés dans les entreprises technologiques.'},
    {name: 'GAMING CAMPUS', photo: "<img src='assets/images/projets/projet2.jpg'>", description: '1er campus étudiant dédié à l’industrie du jeu vidéo.'},
    {name: 'WONDERFUL TOURS', photo: "<img src='assets/images/projets/projet3.jpg'>", description: 'Agence de voyage basée à Arusha, pour des treks en Tanzanie.'},
    {name: 'ONE MILLION LINES', photo: "<img src='assets/images/projets/projet4.jpg'>", description: 'Académie de langages informatiques.'},
    {name: 'NEW WORLD', photo: "<img src='assets/images/projets/projet5.jpg'>", description: 'Jeu vidéo en réseau & forum de passionnés.'},
    {name: 'POKE PET', photo: "<img src='assets/images/projets/projet6.jpg'>", description: 'Refuge bénévole & adoption pour NAC'},
    {name: 'THE UNDERGROUND', photo: "<img src='assets/images/projets/projet7.jpg'>", description: 'Bar & brasserie moderne.'},
    {name: 'NÉO TECH', photo: "<img src='assets/images/projets/projet8.jpg'>", description: 'Commercialisation d\'équipements didactiques scientifiques'},
];

// variable declaration
let length = projects.length;
let i;
let projectCard = document.getElementById('projetsMain');

// loop which for each element of the array creates a div, insert the photo, after the parent element.
for (i = 0; i < length; i++){

    let itemProject = document.createElement('div');
    itemProject.innerHTML = projects[i].photo
    + '<h2 ' + 'class="mouseSurvol">' + projects[i].name + '<br>'
    + '<span> ' + projects[i].description + '</span>'
    + '</h2>';
    projectCard.appendChild(itemProject);
}
