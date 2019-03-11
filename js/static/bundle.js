(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

var shoe = {
    "model": "Sacai x Nike LDV Waffle",
    "colour": "Varsity Blue/Del Sol/Varsity Red",
    "code": "BV0073-400",
    "avaliable": "07/03/19",
    "price": "180$"
};

var raffles = {

    "Antonia Milano": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/AntoniaMilano.jpg",
        "country": "Italy",
        "purchase": "Online Raffle",
        "collection": "Postage Available",
        "Sizes": "4 to 12 US",
        "Opens": "live",
        "Closes": "06/03 @ 11AM CET",
        "url": "https://www.antonia.it/164-shoes"
    },

    "END": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/End.jpg",
        "country": "UK",
        "purchase": "Online Raffle",
        "collection": "Postage Available",
        "Sizes": "5 to 12 UK",
        "Opens": "live",
        "Closes": "07/03 @ 12AM GMT",
        "url": "https://launches.endclothing.com/"
    },

    "Foot Patrol": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/FootPatrol.png",
        "country": "France",
        "purchase": "Online Raffle",
        "collection": "Collection Only",
        "Sizes": "36.5 to 47.5 EU",
        "Opens": "live",
        "Closes": "04/02 @ 10AM CET",
        "url": "https://www.footpatrol.com/customer-service/raffle-fr/"
    },

    "Holypop": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/HolyPop.png",
        "country": "Italy",
        "purchase": "Online FCFS",
        "collection": "Postage Available",
        "Sizes": "TBC",
        "Opens": "announced",
        "Closes": "07/02 @ 12AM CET",
        "url": "https://www.holypopstore.com/en/footwear"
    },

    "Offspring": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/OffSpring.jpg",
        "country": "UK",
        "purchase": "Online Raffle",
        "collection": "Collection Only",
        "Sizes": "3.5 to 7 UK",
        "Opens": "live",
        "Closes": "closed",
        "url": "https://www.offspring.co.uk/release-dates"
    },

    "SNS": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/SNS.jpg",
        "country": "Swe, UK, Ger, Fr",
        "purchase": "Online Raffle",
        "collection": "Post and Collect",
        "Sizes": "4 to 13 US",
        "Opens": "live",
        "Closes": "06/03 @ 11AM CET",
        "url": "https://www.sneakersnstuff.com/en/937/sns-raffles"
    },

    "Solebox": {
        "logo": "https://www.soleretriever.com/wp-content/uploads/2018/04/SoleBox.jpg",
        "country": "Germany",
        "purchase": "In-Store/Online",
        "collection": "Post and Collect",
        "Sizes": "41 to 46 EU",
        "Opens": "announced",
        "Closes": "When sold out",
        "url": "https://www.solebox.com/en/Footwear/"
    },

};

module.exports.sole = {
    "shoe": shoe,
    "raffles": raffles
};
},{}],2:[function(require,module,exports){
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
},{"../data/raffles.js":1,"./module/enteredMark":3,"./module/raffles":4,"./module/shoe.js":5,"./module/transitionEfect":6}],3:[function(require,module,exports){
function addEnteredMark() {
    var card = document.querySelectorAll('.card');

    card.forEach( card => {
        var enteredMark = document.createElement('p');
        enteredMark.className = 'enteredMark mx-auto';

        enteredMark.textContent = 'Mark as entered';
        var icon = document.createElement('i');
        if (localStorage.getItem(card.id)) {
            icon.className = 'fa fa-star ml-1';
        } else {
            icon.className = 'far fa-star ml-1';
        }
        enteredMark.appendChild(icon);
        card.appendChild(enteredMark);
    });
};

module.exports = addEnteredMark;
},{}],4:[function(require,module,exports){
function addRifas(data) {

    var contenedor = document.getElementById('rifas');
    var titles = Object.getOwnPropertyNames(data);
    
    titles.forEach(rifa => {
        // primero creo el contenedor de cada rifa y le asigno la clase bootstrap correspondiente
        var card = document.createElement('div');
        card.className = "card";
        card.id = rifa;
        var cardBody = document.createElement('div');
        cardBody.className = "card-body";   

        // después añadimos la imagen y la insertamos en el contenedor card
        var img = document.createElement('img');
        img.setAttribute('src',data[rifa].logo);
        img.className = "card-img-top";
        card.appendChild(img);

        // títlo de cada rifa
        var title = document.createElement('h3');
        title.className = "card-title";
        title.textContent = rifa;
        cardBody.appendChild(title);

        // Añadimos el texto de los detalles al body
        cardBody.appendChild(rifasDetalles(data[rifa]));

        // var footer = document.createElement('div');  HE DECIDIDO NO UTILIZARLO AL FINAL
        // footer.className = 'card-footer';
        cardBody.appendChild(mostrarBoton(data[rifa]));

        
        // finalmente añadimos card a nuestro contenedor de rifas
        card.appendChild(cardBody);
        var columna = document.createElement('div');
        columna.className = 'col-3 mt-2';
        columna.appendChild(card);
        contenedor.appendChild(columna);
    });
}

function rifasDetalles(rifa) {
    var detalles = ['country','purchase', 'collection', 'Sizes', 'Opens', 'Closes'];
    var parrafo = document.createElement('p');
    parrafo.className = 'card-text';
    detalles.forEach( detail => {
        var span = document.createElement('span');
        var texto = rifa[detail]
        if (detail !== 'Opens' && detail !== 'Closes') {
            span.textContent = texto;
        } else {
            detail === 'Opens' ? span.textContent = 'Opens - '+ texto : span.textContent = 'Closes - '+texto;
        }
        span.className = 'd-block';

        parrafo.appendChild(span);
    });

    return parrafo;
}

function mostrarBoton(rifa) {

    var button = document.createElement('a');
    button.href = rifa.url;
    button.target = '_blank';
    button.className = 'btn btn-block';
    
    if (rifa.Opens === 'live') {
        button.textContent = 'ENTER RAFFLE';
        button.classList.add('btn-success');
    }

    if (rifa.Closes === 'closed') {
        button.textContent = 'CLOSED';
        button.classList.add('btn-danger');
    }

    if (rifa.Opens === 'announced') {
        button.textContent = 'ANNOUNCED';
        button.classList.add('btn-secondary');
        button.disabled = true;
    }

    return button;
}

module.exports = addRifas;
},{}],5:[function(require,module,exports){
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

module.exports = mostrarZapa;
},{}],6:[function(require,module,exports){
function addTransitionEfect() {
    var links = document.querySelectorAll('a.btn');

    links.forEach( link => {
        link.addEventListener("mouseover", function() {
            $(link).addClass('hoverAnchors');
        });
        link.addEventListener("mouseout", function(){
            $(link).removeClass('hoverAnchors');
        });
    })
}

module.exports = addTransitionEfect;
},{}]},{},[2]);
