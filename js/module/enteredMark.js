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