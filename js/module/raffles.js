function addRifas(data) {

    var contenedor = document.getElementById('rifas');
    var titles = Object.getOwnPropertyNames(data);
    
    titles.forEach(rifa => {
        // primero creo el contenedor de cada rifa y le asigno la clase bootstrap correspondiente
        var card = document.createElement('div');
        card.className = "card";
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