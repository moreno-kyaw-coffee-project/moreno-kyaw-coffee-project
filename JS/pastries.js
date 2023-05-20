var  pastries= [
    {id: 'p1', name: 'Fraisier', type: 'cakes', price: '$12.99',image: '../img/Fraisier.jpeg'},
    {id: 'p2', name: 'Faidone', type: 'cakes', price: '$11.99',image: '../img/Faidone.jpeg'},
    {id: 'p3', name: 'Noix De Coco', type: 'cakes', price: '$9.99',image: '../img/Noix De Coco.jpeg'},
    {id: 'p4', name: 'Mille Feuille', type: 'cakes', price: '$14.99',image: '../img/Mille Feuille.jpeg'},

    {id: 'p5', name: 'Blueberry Cream Filled', type: 'donuts', price: '$3.99',image: '../img/Blueberry Cream Filled.jpeg'},
    {id: 'p6', name: 'Apple Fritter', type: 'donuts', price: '$2.99', image: '../img/Apple Fritter.jpeg'},
    {id: 'p7', name: 'Twisty Roll', type: 'donuts', price: '$3.49',image: '../img/Twisty Roll.jpeg'},
    {id: 'p8', name: 'Maple Bar With Bacon', type: 'donuts', price: '$3.99',image: '../img/Maple Bar.jpg'},

    {id: 'p9', name: 'Chocolate Chip Cookies', type: 'cookies', price: '$3.99',image: '../img/chocolate chip cookie.jpeg'},
    {id: 'p10', name: 'Macaroon Cookies', type: 'cookies', price: '$8.99',image: '../img/Macaroon Cookies.png'},
    {id: 'p11', name: 'Berner Haselnusslebkuchen', type: 'cookies', price: '$4.99',image: '../img/Berner Haselnusslebkuchen.jpeg'},
    {id: 'p12', name: 'Piñata cookie', type: 'cookies', price: '$6.99',image: '../img/Piñata cookie.jpeg'},

    {id: 'p13', name: 'Éclairs', type: 'pastries', price: '$4.29',image: '../img/Éclairs.jpeg'},
    {id: 'p14', name: 'Profiteroles', type: 'pastries', price: '$5.99',image: '../img/Profiteroles.jpeg'},
    {id: 'p15', name: 'Tarts', type: 'pastries', price: '$5.99',image: '../img/Tarts.jpeg'},
    {id: 'p16', name: 'Strudels', type: 'pastries', price: '$4.99',image: '../img/Strudels.jpeg'},
];

var pbody = document.querySelector('#pastry');

var pastrySelection = document.querySelector('#pastry-selection');
pastrySelection.addEventListener('click', pastryCategoriesType);

var searchPastries = document.querySelector('#pastry-search');
searchPastries.addEventListener('keyup', pastryCategoriesName);

// Printing All Pastries in HTML
function renderPastry(pastry) {
    var page = '<div class="pastry">';
    page += '<h2>' + pastry.name + '</h2>';
    page += '<h3>' + pastry.type + '</h3>';
    page += '<p>' + pastry.price + '</p>';
    page += '<img src="' + pastry.image + '">';

    page += '</div>';
    return page;
}
pbody.innerHTML = renderPastry(pastries);

//Filtering the existing Pastaries by searching
function renderPastries(pastries) {
    var page = '';
    for(var j = 0; j < pastries.length; j++) {
        page += renderPastry(pastries[j]);
    }
    return page;
}
pbody.innerHTML = renderPastries(pastries);

//Filtering the existing Pastaries by filtering
function pastryCategoriesType(e) {
    e.preventDefault();
    var selectedTypes = e.target.getAttribute('value');
    var filteredPastryType=[];
    pastries.forEach(function(pastry){
        if( selectedTypes == "all" || selectedTypes ==  pastry.type ){
            filteredPastryType.push(pastry);
        }
    })

    pbody.innerHTML = renderPastries(filteredPastryType);
}
//Filtering the existing Pastaries by searching
function pastryCategoriesName(e) {
    e.preventDefault();
    var searchPastry = searchPastries.value.trim().toLowerCase();
    var filteredPastryName=[];
    pastries.forEach(function(pastry){
        if(pastry.name.toLowerCase().includes(searchPastry)){
            filteredPastryName.push(pastry);
        }
    })

    pbody.innerHTML = renderPastries(filteredPastryName);
}
