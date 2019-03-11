var datos = require('../data/raffles.js');
var showZapa = require('./module/shoe.js');
var showRifas = require('./module/raffles');
var addTransitionEfect = require('./module/transitionEfect');

window.onload = function (){
    // mostrar.mostrarZapa(datos.sole.shoe);

    showZapa(datos.sole.shoe);

    showRifas(datos.sole.raffles);

    addTransitionEfect();

    function addEnteredMark() {
        var card = document.querySelectorAll('.card');

        card.forEach( card => {
            var enteredMark = document.createElement('p');
            enteredMark.className = 'enteredMark mx-auto';

            enteredMark.textContent = 'Mark as entered';
            var icon = document.createElement('i');
            icon.className = 'fa fa-star ml-1';
            enteredMark.appendChild(icon);
            card.appendChild(enteredMark);
        });
    };

    addEnteredMark();
}