$(document).ready(function() {
    const proyectos = [
        
        {
            titulo: "Snake Game",
            descripcion: "Juego de Snake Game. Tecnologías utilizadas: HTML5, CSS3, JavaScript.",
            imagen: "asset/img-portafolio/SnakeGame.webp",
            enlace: "https://cristian032019.github.io/SnakeGame/",
            Codigolink: "https://github.com/Cristian032019/SnakeGame" 
        },
       
        {
            titulo: "Corporativa",
            descripcion: "Landing pages corporativa. Tecnologías utilizadas: HTML5, CSS3, JavaScript. ",
            imagen: "asset/img-portafolio/corporativa.webp",
            enlace: "https://cristian032019.github.io/corporativa/",
            Codigolink: "https://github.com/Cristian032019/corporativa"
        },
        {
            titulo: "Restaurante",
            descripcion: "Landing pages Restaurante. Tecnologías utilizadas: HTML5, CSS3, Bootstrap.",
            imagen: "asset/img-portafolio/restaurante.webp",
            enlace: "https://cristian032019.github.io/restaurante/",
            Codigolink: "https://github.com/Cristian032019/restaurante"
            
        },
        {
            titulo: "Portaolio",
            descripcion: "Landing pages Portafolio. Tecnologías utilizadas: HTML5, CSS3, Bootstrap.",
            imagen: "asset/img-portafolio/portafolio.webp",
            enlace: "https://cristian032019.github.io/portafolio/",
            Codigolink:"https://github.com/Cristian032019/portafolio"
        },
       
        // Agrega más proyectos aquí...
    ];

    const itemsPerPage = 10;
    let currentPage = 1;

    function displayProyectos(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedProyectos = proyectos.slice(start, end);

        const container = $('#proyectos-container');
        container.empty();

        paginatedProyectos.forEach(proyecto => {
            const proyectoHtml = `
                <div class="project-card">
                    <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
                    <div class="content">
                        <h2>${proyecto.titulo}</h2>
                        <p>${proyecto.descripcion}</p>
                        <a href="${proyecto.enlace}" class="btn" target="_blank" >Demo</a>
                        <a href="${proyecto.Codigolink}" class="btn" target="_blank" >Código</a>
                    </div>
                </div>
            `;
            container.append(proyectoHtml);
        });

        updatePagination();
    }

    function updatePagination() {
        const totalPages = Math.ceil(proyectos.length / itemsPerPage);
        const paginationContainer = $('#pagination');
        paginationContainer.empty();

        for (let i = 1; i <= totalPages; i++) {
            const pageLink = $('<a>', {
                href: '#',
                text: i,
                class: i === currentPage ? 'active' : ''
            });

            pageLink.click(function(e) {
                e.preventDefault();
                currentPage = i;
                displayProyectos(currentPage);
            });

            paginationContainer.append(pageLink);
        }
    }

    displayProyectos(currentPage);
});