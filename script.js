// Datos de las películas
let peliculas = JSON.parse(localStorage.getItem("peliculas")) || [
    { id: 0, titulo: "Dragon Ball Daima", imagen: "assets/dbdaima.webp", descripcion: "Una aventura en el reino demoniaco", categoria: "Accion", mostrar: true, favorito: false },
    { id: 1, titulo: "Deadpool", imagen: "assets/deadpool.webp", descripcion: "Un heroe Irrevente", categoria: "Fantasia", mostrar: true, favorito: false },
    { id: 2, titulo: "Caballero de la Noche", imagen: "assets/caballero_noche.webp", descripcion: "El heroe que asecha por las noches", categoria: "Terror", mostrar: true, favorito: false },
    { id: 3, titulo: "Interstellar", imagen: "assets/interstellar.webp", descripcion: "En busca de otra tierra", categoria: "Accion", mostrar: true, favorito: false },
    { id: 4, titulo: "Avatar", imagen: "assets/avatar.webp", descripcion: "El poder de la mente otro cuerpo", categoria: "Accion", mostrar: true, favorito: false },
];

// Datos de las series
let series = JSON.parse(localStorage.getItem("series")) || [
    { id: 0, titulo: "Stranger Things", imagen: "assets/stranger_things.webp", descripcion: "Un grupo de niños enfrenta criaturas de otro mundo", categoria: "Terror", mostrar: true, favorito: false },
    { id: 1, titulo: "The Witcher", imagen: "assets/witcher.webp", descripcion: "Geralt de Rivia, un cazador de monstruos en un mundo lleno de magia y política", categoria: "Fantasia", mostrar: true, favorito: false },
    { id: 2, titulo: "Breaking Bad", imagen: "assets/breaking_bad.webp", descripcion: "Un profesor de química se convierte en fabricante de metanfetaminas", categoria: "Drama", mostrar: true, favorito: false },
    { id: 3, titulo: "The Mandalorian", imagen: "assets/mandalorian.webp", descripcion: "Un cazarrecompensas se adentra en la galaxia para proteger a un ser especial", categoria: "Fantasia", mostrar: true, favorito: false },
    { id: 4, titulo: "Dark", imagen: "assets/dark.webp", descripcion: "Un misterio de viajes en el tiempo que envuelve a varias familias", categoria: "Ciencia Ficción", mostrar: true, favorito: false },
];


// Función para resaltar el enlace activo en la barra de navegación
function setActiveLink() {
    const links = document.querySelectorAll(".btn-nav-bar");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        link.classList.remove("active");
    });

    links.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
}


// Función para cargar las películas en la página
function loadMovies(lista) {
    const contenedor = document.querySelector("#listado");
    if (!contenedor) return;
    contenedor.innerHTML = ""; // Limpiar el contenedor

    lista.forEach(pelicula => {
        if (!pelicula.mostrar) return;  // Si no debe mostrarse, se omite
        const card = createMovieCard(pelicula);
        contenedor.appendChild(card);
    });
}

// Función para crear la tarjeta de cada película
function createMovieCard(pelicula) {
    const col = document.createElement('div');
    col.className = 'col-md-4';
    const botonFavoritoTexto = pelicula.favorito ? "Eliminar de Favoritos" : "Agregar a Favoritos";
    const botonFavoritoClase = pelicula.favorito ? "btn-warning" : "btn-fav";
    col.innerHTML = `
        <div class="card mb-3">
            <img src="${pelicula.imagen}" class="card-img-top img-fluid" alt="${pelicula.titulo}">
            <div class="card-body">
                <h5 class="card-title">${pelicula.titulo}</h5>
                <p class="card-text">${pelicula.descripcion}</p>
                <p class="card-text"><small class="text-muted">${pelicula.categoria}</small></p>
                <a href="details.html?id=${pelicula.id}&type=peliculas" class="btn btn-success">Ver</a>
                <button class="btn ${botonFavoritoClase}" onClick="addToFavorites(${pelicula.id}, 'peliculas')">${botonFavoritoTexto}</button>
                <button class="btn btn-danger btn-ocultar" onClick="noShowMovie(${pelicula.id})">Ocultar</button>
            </div>
        </div>
    `;
    return col;
}

// Función para agrupar películas y series por categoría
function groupMoviesAndSeriesByCategory(peliculas, series) {
    const groupedContent = {};

    // Agrupar películas
    peliculas.forEach(pelicula => {
        if (!groupedContent[pelicula.categoria]) {
            groupedContent[pelicula.categoria] = { peliculas: [], series: [] };
        }
        groupedContent[pelicula.categoria].peliculas.push(pelicula);
    });

    // Agrupar series
    series.forEach(serie => {
        if (!groupedContent[serie.categoria]) {
            groupedContent[serie.categoria] = { peliculas: [], series: [] };
        }
        groupedContent[serie.categoria].series.push(serie);
    });

    return groupedContent;
}

// Función para mostrar películas y series agrupadas por categoría
function displayMoviesAndSeriesByCategory(groupedContent) {
    const contenedor = document.querySelector("#listaGeneros");
    if (!contenedor) return;

    contenedor.innerHTML = ""; // Limpiar el contenedor

    for (const categoria in groupedContent) {
        const categorySection = document.createElement('div');
        categorySection.className = 'category-section';
        categorySection.innerHTML = `<h3>${categoria}</h3>`;

        const contentContainer = document.createElement('div');
        contentContainer.className = 'row';

        // Mostrar películas
        groupedContent[categoria].peliculas.forEach(pelicula => {
            const card = createMovieCard(pelicula);
            contentContainer.appendChild(card);
        });

        // Mostrar series
        groupedContent[categoria].series.forEach(serie => {
            const card = createSeriesCard(serie);
            contentContainer.appendChild(card);
        });

        categorySection.appendChild(contentContainer);
        contenedor.appendChild(categorySection);
    }
}

// Función que se ejecuta al cargar la página de géneros
function loadContentByCategory() {
    const groupedContent = groupMoviesAndSeriesByCategory(peliculas, series);
    displayMoviesAndSeriesByCategory(groupedContent);
}

// Función para cargar las series en la página
function loadSeries(lista) {
    const contenedor = document.querySelector("#listado-series");
    if (!contenedor) return;
    contenedor.innerHTML = ""; // Limpiar el contenedor

    lista.forEach(serie => {
        if (!serie.mostrar) return;  // Si no debe mostrarse, se omite
        const card = createSeriesCard(serie);
        contenedor.appendChild(card);
    });
}

// Función para crear la tarjeta de cada serie
function createSeriesCard(serie) {
    const col = document.createElement('div');
    col.className = 'col-md-4';
    const botonFavoritoTexto = serie.favorito ? "Eliminar de Favoritos" : "Agregar a Favoritos";
    const botonFavoritoClase = serie.favorito ? "btn-warning" : "btn-fav";
    col.innerHTML = `
        <div class="card mb-3">
            <img src="${serie.imagen}" class="card-img-top img-fluid" alt="${serie.titulo}">
            <div class="card-body">
                <h5 class="card-title">${serie.titulo}</h5>
                <p class="card-text">${serie.descripcion}</p>
                <p class="card-text"><small class="text-muted">${serie.categoria}</small></p>
                <a href="details.html?id=${serie.id}&type=series" class="btn btn-success">Ver</a>
                <button class="btn ${botonFavoritoClase}" onClick="addToFavorites(${serie.id}, 'series')">${botonFavoritoTexto}</button>
                <button class="btn btn-danger btn-ocultar" onClick="noShowSeries(${serie.id})">Ocultar</button>
            </div>
        </div>
    `;
    return col;
}


// Función de agregar a favoritos (generalizada)
function addToFavorites(id, tipo) {
    let item;
    if (tipo === 'peliculas') {
        item = peliculas.find(p => p.id === id); // Encuentra la película por ID
    } else if (tipo === 'series') {
        item = series.find(s => s.id === id); // Encuentra la serie por ID
    }

    if (item) {
        item.favorito = !item.favorito;  // Alterna el estado de favorito
        alert(`La ${tipo.slice(0, -1)} ${item.titulo} ha sido ${item.favorito ? 'agregada' : 'eliminada'} de favoritos`);

        // Guardar cambios en localStorage
        if (tipo === 'peliculas') {
            localStorage.setItem('peliculas', JSON.stringify(peliculas));  // Guarda las películas
        } else if (tipo === 'series') {
            localStorage.setItem('series', JSON.stringify(series));  // Guarda las series
        }

        // Recargar la vista de favoritos si estamos en la página de favoritos
        if (window.location.pathname.includes("favorites.html")) {
            showFavorites(tipo);  // Actualiza la vista de favoritos
        } else {
            loadMovies(peliculas);  // Recarga las películas
            loadSeries(series);  // Recarga las series
        }
    }
}

// Función de ocultar películas y series 
function noShowMovie(id) {
    const pelicula = peliculas.find(p => p.id === id);
    if (pelicula) {
        pelicula.mostrar = false;
        alert(`La película ${pelicula.titulo} no se mostrará más`);
        loadMovies(peliculas); 
    }
}

function noShowSeries(id) {
    const serie = series.find(s => s.id === id);
    if (serie) {
        serie.mostrar = false;
        alert(`La serie ${serie.titulo} no se mostrará más`);
        loadSeries(series); 
    }
}


// Función para mostrar las películas y series favoritas
function showFavorites(tipo) {
    let contenedor;
    if (tipo === 'peliculas') {
        contenedor = document.querySelector("#favoritosPeliculas");  // Contenedor para películas
    } else if (tipo === 'series') {
        contenedor = document.querySelector("#favoritosSeries");  // Contenedor para series
    }

    if (!contenedor) return;

    contenedor.innerHTML = ""; // Limpiar el contenedor

    // Obtener las películas o series desde localStorage
    const favoritos = JSON.parse(localStorage.getItem(tipo)) || [];  // Verifica que sea 'peliculas' o 'series'
    const favoritosFiltrados = favoritos.filter(item => item.favorito); // Filtra los favoritos

    if (favoritosFiltrados.length === 0) {
        contenedor.innerHTML = "<p>No hay favoritos.</p>";
        return;
    }

    favoritosFiltrados.forEach(item => {
        const card = (tipo === 'peliculas' ? createMovieCard(item) : createSeriesCard(item));
        contenedor.appendChild(card);
    });
}



// Función para mostrar los detalles de una película o serie
function seeDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));
    const type = urlParams.get('type');

    let item = null;
    if (type === 'peliculas') {
        item = peliculas.find(p => p.id === id);
    } else if (type === 'series') {
        item = series.find(s => s.id === id);
    }

    if (item) {
        const detailsContainer = document.getElementById('movieDetails');
        detailsContainer.innerHTML = `
            <div class="card mb-3">
                <img src="${item.imagen}" alt="${item.titulo}">
                <div class="card-body">
                    <h1 class="card-title text-center">${item.titulo}</h1>
                    <p class="card-text">${item.descripcion}</p>
                    <p class="card-text"><small class="text-muted">${item.categoria}</small></p>
                </div>
            </div>
        `;
        loadSuggestions(item, type);
    } else {
        alert('Item no encontrado');
    }
}

// Función para cargar sugerencias basadas en el tipo
function loadSuggestions(currentItem, type) {
    const contenedor = document.querySelector("#sugerencias");
    if (!contenedor) return;

    contenedor.innerHTML = ""; // Limpiar el contenedor

    const items = type === 'peliculas' ? peliculas : series;
    const suggestions = items.filter(item => item.categoria === currentItem.categoria && item.id !== currentItem.id);

    suggestions.forEach(item => {
        const card = type === 'peliculas' ? createMovieCard(item) : createSeriesCard(item);
        contenedor.appendChild(card);
    });
}

// Cargar películas y series al iniciar la página
document.addEventListener("DOMContentLoaded", function() {
    setActiveLink(); // Resaltar el enlace activo en la barra de navegación
    if (window.location.pathname.includes("index.html")) {
        loadMovies(peliculas); // Cargar las películas en la página
        loadSeries(series); // Cargar las series en la página
    }
    if (window.location.pathname.includes("movie_genre.html")) {
        loadContentByCategory(); // Cargar películas y series por categoría
    }
    if (window.location.pathname.includes("series.html")) {
        loadSeries(series); // Cargar las series en la página
    }
    if (window.location.pathname.includes("favorites.html")) {
        showFavorites('peliculas'); // Mostrar las películas favoritas
        showFavorites('series'); // Mostrar las series favoritas
    }
    if (window.location.pathname.includes("movies.html")){
        loadMovies(peliculas); // Cargar las películas en la página
    }
    if (window.location.pathname.includes("details.html")) {
        seeDetails(); // Mostrar detalles de la película o serie
    }
});
