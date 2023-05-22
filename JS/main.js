'use strict';
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},

    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},

    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
// Searching Coffee
// Get references to form and coffee list elements
var tbody = document.querySelector('#coffee');
tbody.innerHTML = renderCoffees(coffees);

// Add event listener to form submission
var roastSelection = document.querySelector('#roast-selection');
roastSelection.addEventListener('change', updateCoffeesRoast);

var nameSearch = document.querySelector('#search');
nameSearch.addEventListener('keyup', updateCoffeesName);

// Adding Coffee
// Get references to form and coffee list elements
var nameInput = document.querySelector('#name-input');

// Add event listener to form submission
var inputSubmit = document.querySelector('#addCoffee');
inputSubmit.addEventListener('click', addCoffee );

// Printing All Coffees in HTML
function renderCoffee(coffee) {

    var html = '<div class="coffee">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
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
//Filtering the existing Coffees by name searching
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
    // Retrieve coffee name and roast values
    var coffeeName = document.querySelector('#coffee-name').value;
    var coffeeRoast = document.querySelector('#coffee-roast').value;

    var capitalName = capitalizeFirstLetter(coffeeName);
    // Create new coffee object
    var newCoffee = {
        id: coffees.length + 1,
        name: capitalName,
        roast: coffeeRoast
    };
    //Add new coffees to original coffee list
    coffees.push(newCoffee);
    // renderCoffees(coffees);

    // clear from the original list once refresh the page
    nameInput.reset();
    tbody.innerHTML = renderCoffees(coffees);
}
// Changing first letter of the words toUppercase
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


