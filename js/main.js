var datos = require('../data/raffles.js');
var showZapa = require('./module/shoe.js');
var showRifas = require('./module/raffles');
var addTransitionEfect = require('./module/transitionEfect');
var addEnteredMark = require('./module/enteredMark');

window.onload = function (){
    var rifas = datos.sole.raffles;
    var rifasNombres = Object.getOwnPropertyNames(rifas);

    showZapa(datos.sole.shoe);

    showRifas(datos.sole.raffles);

    addTransitionEfect();

    addEnteredMark();

    function filterCards() {
        var raffles = datos.sole.raffles;
        var properties = Object.getOwnPropertyNames(raffles);
        var filters = ['Post', 'Collect', 'Raffle', 'FCFS'];

        for (let i=0; i<properties.length; i++) {
            filters.push(raffles[properties[i]].country);
        }
        filters = uniqueArray(filters);

        filters.forEach( filter => {
            var span = $('<span></span>');
            span.addClass('badge').addClass('badge-default').addClass('p-2').html(filter);
            $('#filters').append(span);
        })
    }

    var uniqueArray = function(arrArg) {
        return arrArg.filter(function(elem, pos,arr) {
          return arr.indexOf(elem) == pos;
        });
      };

    function filterLogic() {
        $(".badge").click(function () {
            if ($(this).html === 'All') { return false; }
            $(this).toggleClass('badge-success');
            $(this).toggleClass('badge-default');
        });
    }
    // function filterRaffles(element) {
    //     // rifasNombres.forEach( nombre => {
    //     //     var rifa = rifas[nombre];
    //     //     if (rifa.)
    //     // })
        
    // }

    
    filterCards();
    filterLogic();

}