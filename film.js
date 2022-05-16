const filmsCatalog = document.querySelector('#filmsCatalog');

function getFilms() {
    return $.ajax({
        method: "GET",
        url: "/api/film.php",
        data: {
            token: localStorage.getItem('token'),
            id: localStorage.getItem('id'),
        }
    });
}

async function renderFilms() {
    let films = await getFilms();
    films.forEach(film => {
        let filmNode = document.createElement('div');
        filmNode.className = 'film';
        filmNode.style.alignItems = 'center';
        filmNode.style.textAlign = 'center';
        filmNode.innerHTML = `
            <img src="${film.IMG_URL}" alt="film">
            <div>
                ${film.NAME} <br>
                Цена ${film.PRICE} ₽ <br>
            </div>
            <a href="oplata.html?film_id=${film.ID}" class="text_block__button button">
                Прокат
            </a>
        `;
        filmsCatalog.appendChild(filmNode);
    });
}

window.onload = () => {
    renderFilms();
}