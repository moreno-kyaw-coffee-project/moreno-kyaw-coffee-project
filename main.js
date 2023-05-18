// "use strict"
// // -----printing the table-----
// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }
//
// function renderCoffees(coffees) {
//     var html = '';
//     for(var i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }
//
// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection.value;
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast === selectedRoast) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }
//
// // from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
// var coffees = [
//     {id: 1, name: 'Light City', roast: 'light'},
//     {id: 2, name: 'Half City', roast: 'light'},
//     {id: 3, name: 'Cinnamon', roast: 'light'},
//     {id: 4, name: 'City', roast: 'medium'},
//     {id: 5, name: 'American', roast: 'medium'},
//     {id: 6, name: 'Breakfast', roast: 'medium'},
//     {id: 7, name: 'High', roast: 'dark'},
//     {id: 8, name: 'Continental', roast: 'dark'},
//     {id: 9, name: 'New Orleans', roast: 'dark'},
//     {id: 10, name: 'European', roast: 'dark'},
//     {id: 11, name: 'Espresso', roast: 'dark'},
//     {id: 12, name: 'Viennese', roast: 'dark'},
//     {id: 13, name: 'Italian', roast: 'dark'},
//     {id: 14, name: 'French', roast: 'dark'},
// ];
//
// var tbody = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
// var roastSelection = document.querySelector('#roast-selection');
//
// tbody.innerHTML = renderCoffees(coffees);
//
// submitButton.addEventListener('click', updateCoffees);





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
var tbody = document.querySelector('#coffee');
tbody.innerHTML = renderCoffees(coffees);
// search-coffee(form)
// roast-selection (roast)
var roastSelection = document.querySelector('#roast-selection');
roastSelection.addEventListener('change', updateCoffeesRoast);
// search (name)
var nameSearch = document.querySelector('#search');
nameSearch.addEventListener('keyup', updateCoffeesName);
// submit (button)


// name-input (form)
var nameInput = document.querySelector('#name-input');
// coffee-roast (roast)
var inputSubmit = document.querySelector('#addCoffee');
inputSubmit.addEventListener('click', addCoffee );



function renderCoffee(coffee) {

    var html = '<div class="coffee">';
    // html += '<span>' + coffee.id + '</span>';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {

    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


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
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
