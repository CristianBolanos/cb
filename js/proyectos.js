$(document).ready(function() {
    const proyectos = [
        {
            titulo: "Ecommerce",
            descripcion: "Ecommerce creada con nocode, Tecnologías utilizadas: react, typescripts,Vite. Cosas aprendidas a manejar la imaginación para perfecionar las instrucciones de los prompt a la IA en la creación del proyecto dando un buen manejo de IU y UX y su funcionalidad.",
            tipo: "video",
            media: "asset/videos/video.webm",
            enlace: "asset/videos/video.webm",
            // Codigolink: "https://github.com/CristianBolanos/soat" 
        },
        {
            titulo: "SOAT Ya",
            descripcion: "Website venta de soat. Tecnologías utilizadas: HTML5, CSS3, JavaScript.",
            tipo: "imagen",
            media: "asset/img-portafolio/soat.webp",
            enlace: "https://cristianbolanos.github.io/soat/",
            Codigolink: "https://github.com/CristianBolanos/soat" 
        },
        {
            titulo: "Snake Game",
            descripcion: "Juego de Snake Game. Tecnologías utilizadas: HTML5, CSS3, JavaScript.",
            tipo: "imagen",
            media: "asset/img-portafolio/SnakeGame.webp",
            enlace: "https://CristianBolanos.github.io/SnakeGame/",
            Codigolink: "https://github.com/CristianBolanos/SnakeGame" 
        },
       
        {
            titulo: "Corporativa",
            descripcion: "Landing pages corporativa. Tecnologías utilizadas: HTML5, CSS3, JavaScript. ",
            tipo: "imagen",
            media: "asset/img-portafolio/corporativa.webp",
            enlace: "https://CristianBolanos.github.io/corporativa/",
            Codigolink: "https://github.com/CristianBolanos/corporativa"
        },
        {
            titulo: "Restaurante",
            descripcion: "Landing pages Restaurante. Tecnologías utilizadas: HTML5, CSS3, Bootstrap.",
            tipo: "imagen",
            media: "asset/img-portafolio/restaurante.webp",
            enlace: "https://CristianBolanos.github.io/restaurante/",
            Codigolink: "https://github.com/CristianBolanos/restaurante"
            
        },
        {
            titulo: "Portaolio",
            descripcion: "Landing pages Portafolio. Tecnologías utilizadas: HTML5, CSS3, Bootstrap.",
            tipo: "imagen",
            media: "asset/img-portafolio/portafolio.webp",
            enlace: "https://CristianBolanos.github.io/portafolio/",
            Codigolink:"https://github.com/CristianBolanos/portafolio"
        },
       
        // Agrega más proyectos aquí...
    ];

    const itemsPerPage = 10;
    let currentPage = 1;

    // Crear el modal una vez al inicio
    $('body').append(`
        <div id="videoModal" class="modal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <video id="modalVideo" controls>
                    Tu navegador no soporta el elemento video.
                </video>
            </div>
        </div>
    `);

    // Manejadores de eventos para el modal
    const modal = $('#videoModal');
    const modalVideo = $('#modalVideo')[0];
    
    $(document).on('click', '.ver-video', function(e) {
        e.preventDefault();
        const videoSrc = $(this).data('video');
        if (videoSrc) {
            openVideoModal(videoSrc);
        }
    });

    function openVideoModal(videoSrc) {
        const modal = $('#videoModal');
        const modalVideo = $('#modalVideo')[0];
        modalVideo.src = videoSrc;
        modal.fadeIn();
        modalVideo.play();
    }

    function closeVideoModal() {
        const modal = $('#videoModal');
        const modalVideo = $('#modalVideo')[0];
        modalVideo.pause();
        modal.fadeOut();
        modalVideo.src = '';
    }

    $(document).on('click', '.close-modal, #videoModal', function(e) {
        if (e.target === this) {
            closeVideoModal();
        }
    });

    function displayProyectos(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedProyectos = proyectos.slice(start, end);

        const container = $('#proyectos-container');
        container.empty();

        paginatedProyectos.forEach(proyecto => {
            const descripcionCorta = proyecto.descripcion.length > 150 ? 
                proyecto.descripcion.substring(0, 150) + '...' : 
                proyecto.descripcion;

            let mediaContent;
            let botonesHtml;

            if (proyecto.tipo === "video") {
                mediaContent = `<div class="media-container">
                    <video src="${proyecto.media}" class="card-media">
                        Tu navegador no soporta el elemento video.
                    </video>
                    <div class="play-overlay">
                        <i class="fas fa-play play-icon"></i>
                        <i class="fas fa-pause pause-icon" style="display: none;"></i>
                    </div>
                </div>`;
                botonesHtml = `
                    <div class="botones-principales">
                        <a href="${proyecto.enlace}" class="btn" target="_blank">Demo</a>
                        <a href="#" class="btn ver-video" data-video="${proyecto.media}">Ver Video</a>
                    </div>
                    <button class="btn ver-mas">Ver más</button>
                `;
            } else {
                mediaContent = `<div class="media-container">
                    <img src="${proyecto.media}" alt="${proyecto.titulo}" class="card-media">
                </div>`;
                botonesHtml = `
                    <div class="botones-principales">
                        <a href="${proyecto.enlace}" class="btn" target="_blank">Demo</a>
                        ${proyecto.Codigolink ? `<a href="${proyecto.Codigolink}" class="btn" target="_blank">Código</a>` : ''}
                    </div>
                    <button class="btn ver-mas">Ver más</button>
                `;
            }

            const proyectoHtml = `
                <div class="project-card">
                    ${mediaContent}
                    <div class="content">
                        <h2>${proyecto.titulo}</h2>
                        <p class="descripcion-corta">${descripcionCorta}</p>
                        <p class="descripcion-completa" style="display: none;">${proyecto.descripcion}</p>
                        <div class="botones-container">
                            ${botonesHtml}
                        </div>
                    </div>
                </div>
            `;
            container.append(proyectoHtml);
        });

        // Manejador para el botón "Ver más"
        $('.ver-mas').click(function() {
            const card = $(this).closest('.project-card');
            const descripcionCorta = card.find('.descripcion-corta');
            const descripcionCompleta = card.find('.descripcion-completa');
            
            if (descripcionCorta.is(':visible')) {
                descripcionCorta.fadeOut(300, function() {
                    descripcionCompleta.fadeIn(300);
                });
                $(this).text('Ver menos');
            } else {
                descripcionCompleta.fadeOut(300, function() {
                    descripcionCorta.fadeIn(300);
                });
                $(this).text('Ver más');
            }
        });

        // Manejadores de eventos para los videos
        $('.media-container').each(function() {
            const container = $(this);
            const video = container.find('video');
            const overlay = container.find('.play-overlay');
            const playIcon = overlay.find('.play-icon');
            const pauseIcon = overlay.find('.pause-icon');

            if (video.length) {
                overlay.click(function() {
                    if (video[0].paused) {
                        video[0].play();
                        playIcon.hide();
                        pauseIcon.show();
                    } else {
                        video[0].pause();
                        pauseIcon.hide();
                        playIcon.show();
                    }
                });

                video.click(function(e) {
                    e.preventDefault();
                    if (video[0].paused) {
                        video[0].play();
                        playIcon.hide();
                        pauseIcon.show();
                    } else {
                        video[0].pause();
                        pauseIcon.hide();
                        playIcon.show();
                    }
                });

                video.on('ended', function() {
                    pauseIcon.hide();
                    playIcon.show();
                });
            }
        });

        updatePagination();
    }

    // Función para mostrar el modal
    function mostrarModal(titulo, descripcion) {
        const modalHtml = `
            <div class="modal-descripcion">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>${titulo}</h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p>${descripcion}</p>
                    </div>
                </div>
            </div>
        `;

        $('body').append(modalHtml);

        const modal = $('.modal-descripcion');
        
        // Cerrar modal con el botón
        $('.modal-close').click(() => modal.remove());
        
        // Cerrar modal al hacer clic fuera
        modal.click(function(e) {
            if ($(e.target).is('.modal-descripcion')) {
                modal.remove();
            }
        });
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