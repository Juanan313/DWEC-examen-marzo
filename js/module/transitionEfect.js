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