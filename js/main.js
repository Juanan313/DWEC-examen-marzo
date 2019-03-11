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

    function enteredMarkLogic() {
        var marks = document.querySelectorAll('.enteredMark');

        marks.forEach( mark => {
            mark.addEventListener('click', function() {
                if (localStorage.getItem(mark.id)) {
                    localStorage.removeItem(mark.id);
                    mark.lastChild.className = 'far fa-star ml-1';
                } else {
                    localStorage.setItem(mark.id, true) 
                    mark.lastChild.className = 'fa fa-star ml-1';
                }
            });
        })

            
    }

    enteredMarkLogic();
}