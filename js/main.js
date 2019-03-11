var datos = require('../data/raffles.js');
var showZapa = require('./module/shoe.js');
var showRifas = require('./module/raffles');
var addTransitionEfect = require('./module/transitionEfect');
var addEnteredMark = require('./module/enteredMark');

window.onload = function (){
    // mostrar.mostrarZapa(datos.sole.shoe);

    showZapa(datos.sole.shoe);

    showRifas(datos.sole.raffles);

    addTransitionEfect();

    addEnteredMark();
}