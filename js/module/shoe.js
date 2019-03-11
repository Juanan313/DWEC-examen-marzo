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

exports.mostrarZapa();