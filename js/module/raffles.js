function addRifas(data) {

    var contenedor = document.getElementById('rifas');

    var titles = data.Object.getOwnPropertyNames();
    
    titles.forEach(rifa => {
        var text = '<div class="card col-3"> <h3 class="card-title">'+ rifa+'</h3>   </div>'
        contenedor.appendChild(text)
    });
}