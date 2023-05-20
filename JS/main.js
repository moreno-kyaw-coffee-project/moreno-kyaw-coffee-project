'use strict';
var coffees = [
    {id: 1, name: 'Light City', roast: 'light',price: '$4.49'},
    {id: 2, name: 'Half City', roast: 'light',price: '$4.99'},
    {id: 3, name: 'Cinnamon', roast: 'light',price: '$5.49'},

    {id: 4, name: 'City', roast: 'medium',price: '$4.49'},
    {id: 5, name: 'American', roast: 'medium',price: '$5.49'},
    {id: 6, name: 'Breakfast', roast: 'medium',price: '$3.99'},

    {id: 7, name: 'High', roast: 'dark',price: '$4.49'},
    {id: 8, name: 'Continental', roast: 'dark',price: '$4.49'},
    {id: 9, name: 'New Orleans', roast: 'dark',price: '$4.49'},
    {id: 10, name: 'European', roast: 'dark',price: '$4.99'},
    {id: 11, name: 'Espresso', roast: 'dark',price: '$4.99'},
    {id: 12, name: 'Viennese', roast: 'dark',price: '$5.99'},
    {id: 13, name: 'Italian', roast: 'dark',price: '$5.99'},
    {id: 14, name: 'French', roast: 'dark',price: '$5.99'},
];
// Searching Coffee
var tbody = document.querySelector('#coffee');
tbody.innerHTML = renderCoffees(coffees);

var roastSelection = document.querySelector('#roast-selection');
roastSelection.addEventListener('change', updateCoffeesRoast);

var nameSearch = document.querySelector('#search');
nameSearch.addEventListener('keyup', updateCoffeesName);

// Adding Coffee
var nameInput = document.querySelector('#name-input');

var inputSubmit = document.querySelector('#addCoffee');
inputSubmit.addEventListener('click', addCoffee );

// Printing All Coffees in HTML
function renderCoffee(coffee) {

    var html = '<div class="coffee">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '<p>' + coffee.price + '</p>';
    html += '</div>';

    return html;
}
console.log(renderCoffee(coffees));
// Filtering By User
function renderCoffees(coffees) {

    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
//Filtering the existing Coffees by searching
function updateCoffeesName(e) {
    e.preventDefault();
    var searchTerm = nameSearch.value.trim().toLowerCase();
    var filteredCoffeesName=[];
    coffees.forEach(function(coffee){
        if(coffee.name.toLowerCase().includes(searchTerm)){
            filteredCoffeesName.push(coffee);
        }
    })

    tbody.innerHTML = renderCoffees(filteredCoffeesName);
}

//Filtering the existing Coffees by roast
function updateCoffeesRoast(e) {
    e.preventDefault();
    var selectedRoast = roastSelection.value;
    var filteredCoffeesRoast=[];
    coffees.forEach(function(coffee){
        if(selectedRoast === "all" || selectedRoast ===  coffee.roast ){
            filteredCoffeesRoast.push(coffee);
        }
    })
    tbody.innerHTML = renderCoffees(filteredCoffeesRoast);
}
// Adding the coffees by user
function addCoffee(e) {
    e.preventDefault();
    var coffeeName = document.querySelector('#coffee-name').value;
    var coffeeRoast = document.querySelector('#coffee-roast').value;

    var capitalName = capitalizeFirstLetter(coffeeName);
    var newCoffee = {
        id: coffees.length + 1,
        name: capitalName,
        roast: coffeeRoast
    };

    coffees.push(newCoffee);
    // renderCoffees(coffees);

    nameInput.reset();
    tbody.innerHTML = renderCoffees(coffees);
}
// Making case insensitive
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


