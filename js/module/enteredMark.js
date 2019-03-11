function addEnteredMark() {
    var card = document.querySelectorAll('.card');

    card.forEach( card => {
        var enteredMark = document.createElement('p');
        enteredMark.className = 'enteredMark mx-auto';
        enteredMark.id = card.id;
        var icon = document.createElement('i');
        if (localStorage.getItem(card.id)) {
            enteredMark.textContent = 'Entered';
            $(enteredMark).addClass('font-weight-bold');
            icon.className = 'fa fa-star ml-1';
        } else {
            enteredMark.textContent = 'Mark as entered';
            icon.className = 'far fa-star ml-1';
        }
        enteredMark.appendChild(icon);
        card.appendChild(enteredMark);
    });

    enteredMarkLogic();
};

function enteredMarkLogic() {
    var marks = document.querySelectorAll('.enteredMark');

    marks.forEach( mark => {
        mark.addEventListener('click', function() {
            var icon = document.createElement('i');

            if (localStorage.getItem(mark.id)) {
                localStorage.removeItem(mark.id);
                mark.textContent = 'Mark as entered';
                $(mark).removeClass('font-weight-bold');
                icon.className = 'far fa-star ml-1';
                mark.appendChild(icon);
            } else {
                localStorage.setItem(mark.id, true) 
                mark.textContent = 'Entered';
                $(mark).addClass('font-weight-bold');
                icon.className = 'fa fa-star ml-1';
                mark.appendChild(icon);
            }
        });
    })
}

module.exports = addEnteredMark;