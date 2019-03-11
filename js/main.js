var datos = require('../data/raffles.js');
// var mostrar = require('./module/shoe.js')

window.onload = function (){
    // mostrar.mostrarZapa(datos.sole.shoe);

    var mostrarZapa = function(zapa) {
        // buscamos el elemento donde insertaremos los datos
        var contenedor = document.getElementById('datosZapa');
    
        // creamos los distintos elementos a insertar
        var modelo = document.createElement('h2');
        modelo.innerHTML = zapa['model'];
        var color = document.createElement('h4')
        color.innerHTML = zapa['colour'];
    
        // montamos el texto de los detalles con el formato de la aplicación
        var textoDetalles = document.createTextNode( zapa['code'] + " | " + zapa['avaliable'] +" | " + zapa['price']);
        var detalles = document.createElement('p').appendChild(textoDetalles);
    
        contenedor.appendChild(modelo);
        contenedor.appendChild(color);
        contenedor.appendChild(detalles);
    }

    mostrarZapa(datos.sole.shoe);

    function addRifas(data) {

        var contenedor = document.getElementById('rifas');
        var titles = Object.getOwnPropertyNames(data);
        
        titles.forEach(rifa => {
            // primero creo el contenedor de cada rifa y le asigno la clase bootstrap correspondiente
            var card = document.createElement('div');
            card.className = "card col-3";
            var cardBody = document.createElement('div');
            cardBody.className = "card-body";   

            // después añadimos la imagen y la insertamos en el contenedor card
            var img = document.createElement('img');
            img.setAttribute('src',data[rifa].logo);
            img.className = "card-img-top";
            card.appendChild(img);

            var title = document.createElement('h3');
            title.className = "card-title";
            title.textContent = rifa;
            cardBody.appendChild(title);

            // finalmente añadimos card a nuestro contenedor de rifas
            card.appendChild(cardBody);
            contenedor.appendChild(card);
        });
    }

    addRifas(datos.sole.raffles);
}