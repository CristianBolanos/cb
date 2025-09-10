$(document).ready(function () {
  const proyectos = [
    {
      titulo: "Constructoraxyz",
      descripcion:
        "Desarrollé una 𝗽𝗮́𝗴𝗶𝗻𝗮 𝘄𝗲𝗯 𝗮𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝗯𝗹𝗲, diseñada para que el cliente pueda 𝗴𝗲𝘀𝘁𝗶𝗼𝗻𝗮𝗿 𝗰𝗼𝗻𝘁𝗲𝗻𝗶𝗱𝗼 𝗳𝗮́𝗰𝗶𝗹𝗺𝗲𝗻𝘁𝗲 sin conocimientos técnicos⁣. 𝗧𝗲𝗰𝗻𝗼𝗹𝗼𝗴í𝗮𝘀 𝘂𝘁𝗶𝗹𝗶𝘇𝗮𝗱𝗮𝘀: HTML5, Tailwind CSS, JavaScript, PHP, MySQL",
      tipo: "imagen",
      media: "asset/img-portafolio/constructoraxyz.webp",
      enlace: "https://constructoraxyz.infinityfree.me/",
      Codigolink: "https://github.com/CristianBolanos",
    },
    {
      titulo: "Ecommerce",
      descripcion:
        "Ecommerce creada con nocode, 𝗧𝗲𝗰𝗻𝗼𝗹𝗼𝗴í𝗮𝘀 𝘂𝘁𝗶𝗹𝗶𝘇𝗮𝗱𝗮𝘀: react, typescripts,Vite. Cosas aprendidas a manejar la imaginación para perfecionar las instrucciones de los prompt a la IA en la creación del proyecto dando un buen manejo de IU y UX y su funcionalidad.",
      tipo: "video",
      media: "asset/videos/video.mp4",
      enlace: "https://cristianbolanos.github.io/shop/",
      Codigolink: "https://github.com/CristianBolanos/shop",
    },
    {
      titulo: "SOAT Ya",
      descripcion:
        "Website venta de soat. 𝗧𝗲𝗰𝗻𝗼𝗹𝗼𝗴í𝗮𝘀 𝘂𝘁𝗶𝗹𝗶𝘇𝗮𝗱𝗮𝘀: HTML5, CSS3, JavaScript.",
      tipo: "imagen",
      media: "asset/img-portafolio/soat.webp",
      enlace: "https://cristianbolanos.github.io/soat/",
      Codigolink: "https://github.com/CristianBolanos/soat",
    },
    {
      titulo: "Snake Game",
      descripcion:
        "Juego de Snake Game. 𝗧𝗲𝗰𝗻𝗼𝗹𝗼𝗴í𝗮𝘀 𝘂𝘁𝗶𝗹𝗶𝘇𝗮𝗱𝗮𝘀: HTML5, CSS3, JavaScript.",
      tipo: "imagen",
      media: "asset/img-portafolio/SnakeGame.webp",
      enlace: "https://CristianBolanos.github.io/SnakeGame/",
      Codigolink: "https://github.com/CristianBolanos/SnakeGame",
    },

    {
      titulo: "Corporativa",
      descripcion:
        "Landing pages corporativa. 𝗧𝗲𝗰𝗻𝗼𝗹𝗼𝗴í𝗮𝘀 𝘂𝘁𝗶𝗹𝗶𝘇𝗮𝗱𝗮𝘀: HTML5, CSS3, JavaScript. ",
      tipo: "imagen",
      media: "asset/img-portafolio/corporativa.webp",
      enlace: "https://CristianBolanos.github.io/corporativa/",
      Codigolink: "https://github.com/CristianBolanos/corporativa",
    },
    {
      titulo: "Restaurante",
      descripcion:
        "Landing pages Restaurante. 𝗧𝗲𝗰𝗻𝗼𝗹𝗼𝗴í𝗮𝘀 𝘂𝘁𝗶𝗹𝗶𝘇𝗮𝗱𝗮𝘀: HTML5, CSS3, Bootstrap.",
      tipo: "imagen",
      media: "asset/img-portafolio/restaurante.webp",
      enlace: "https://CristianBolanos.github.io/restaurante/",
      Codigolink: "https://github.com/CristianBolanos/restaurante",
    },
    {
      titulo: "Portaolio",
      descripcion:
        "Landing pages Portafolio. 𝗧𝗲𝗰𝗻𝗼𝗹𝗼𝗴í𝗮𝘀 𝘂𝘁𝗶𝗹𝗶𝘇𝗮𝗱𝗮𝘀: HTML5, CSS3, Bootstrap.",
      tipo: "imagen",
      media: "asset/img-portafolio/portafolio.webp",
      enlace: "https://CristianBolanos.github.io/portafolio/",
      Codigolink: "https://github.com/CristianBolanos/portafolio",
    },
    // Agrega más proyectos aquí...
  ];

  const itemsPerPage = 3;
  let currentPage = 1;

  // Crear el modal una vez al inicio
  $("body").append(`
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
  function openVideoModal(videoSrc) {
    const modal = $("#videoModal");
    const modalVideo = $("#modalVideo")[0];
    modalVideo.src = videoSrc;
    modal.fadeIn();
    modalVideo.play();
  }

  function closeVideoModal() {
    const modal = $("#videoModal");
    const modalVideo = $("#modalVideo")[0];
    modalVideo.pause();
    modal.fadeOut();
    modalVideo.src = "";
  }

  $(document).on("click", ".close-modal, #videoModal", function (e) {
    if (e.target === this) {
      closeVideoModal();
    }
  });

  function displayProyectos(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProyectos = proyectos.slice(start, end);

    const container = $("#proyectos-container");
    container.empty();

    paginatedProyectos.forEach((proyecto) => {
      const descripcionCorta =
        proyecto.descripcion.length > 150
          ? proyecto.descripcion.substring(0, 150) + "..."
          : proyecto.descripcion;

      let mediaContent;
      let botonesHtml;

      if (proyecto.tipo === "video") {
        mediaContent = `<div class="media-container video-card-container" style="position:relative;">
                    <video src="${proyecto.media}" class="card-media card-video" controls preload="none" tabindex="0">
                        Tu navegador no soporta el elemento video.
                    </video>
                    <div class="play-overlay-modern" style="display:flex; align-items:center; justify-content:center; position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none;">
                        <i class="fas fa-play play-icon-modern" style="font-size:3rem; color:white; background:rgba(0,0,0,0.4); border-radius:50%; padding:18px; pointer-events:auto; cursor:pointer; transition:opacity 0.2s;"></i>
                    </div>
                </div>`;
        botonesHtml = `
                    <div class="botones-principales">
                        <a href="${
                          proyecto.enlace
                        }" class="btn" target="_blank">Demo</a>
                        ${
                          proyecto.Codigolink
                            ? `<a href="${proyecto.Codigolink}" class="btn" target="_blank">Código</a>`
                            : ""
                        }
                    </div>
                    <button class="btn ver-mas">Ver más</button>
                `;
      } else {
        mediaContent = `<div class="media-container">
                    <img src="${proyecto.media}" alt="${proyecto.titulo}" class="card-media">
                </div>`;
        botonesHtml = `
                    <div class="botones-principales">
                        <a href="${
                          proyecto.enlace
                        }" class="btn" target="_blank">Demo</a>
                        ${
                          proyecto.Codigolink
                            ? `<a href="${proyecto.Codigolink}" class="btn" target="_blank">Código</a>`
                            : ""
                        }
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
    $(".ver-mas").click(function () {
      const card = $(this).closest(".project-card");
      const descripcionCorta = card.find(".descripcion-corta");
      const descripcionCompleta = card.find(".descripcion-completa");

      if (descripcionCorta.is(":visible")) {
        descripcionCorta.fadeOut(300, function () {
          descripcionCompleta.fadeIn(300);
        });
        $(this).text("Ver menos");
      } else {
        descripcionCompleta.fadeOut(300, function () {
          descripcionCorta.fadeIn(300);
        });
        $(this).text("Ver más");
      }
    });

    // Manejadores de eventos para los videos
    $(".video-card-container").each(function () {
      const container = $(this);
      const video = container.find("video.card-video");
      const overlay = container.find(".play-overlay-modern");
      const playIcon = overlay.find(".play-icon-modern");

      // Mostrar overlay solo si el video está pausado
      function updateOverlay() {
        if (video[0].paused) {
          overlay.fadeIn(150);
        } else {
          overlay.fadeOut(150);
        }
      }

      // Al hacer click en el video o en el icono, reproducir/pausar
      video.off("click").on("click", function (e) {
        if (video[0].paused) {
          video[0].play();
        } else {
          video[0].pause();
        }
        updateOverlay();
      });
      playIcon.off("click").on("click", function (e) {
        e.stopPropagation();
        if (video[0].paused) {
          video[0].play();
        } else {
          video[0].pause();
        }
        updateOverlay();
      });

      // Actualizar overlay al reproducir/pausar
      video.off("play pause ended").on("play pause ended", function () {
        updateOverlay();
      });

      // Inicializar overlay
      updateOverlay();
    });

    // Manejador para mostrar el modal de video al hacer click en la card de video
    $(document)
      .off("dblclick.card-video")
      .on("dblclick.card-video", ".video-card-container", function (e) {
        const videoSrc = $(this).find("video.card-video").attr("src");
        if (videoSrc) {
          openVideoModal(videoSrc);
        }
      });

    updatePagination();
  }

  // Función para mostrar el modal
  // function mostrarModal(titulo, descripcion) {
  //     const modalHtml = `
  //         <div class="modal-descripcion">
  //             <div class="modal-content">
  //                 <div class="modal-header">
  //                     <h3>${titulo}</h3>
  //                     <button class="modal-close">&times;</button>
  //                 </div>
  //                 <div class="modal-body">
  //                     <p>${descripcion}</p>
  //                 </div>
  //             </div>
  //         </div>
  //     `;

  //     $('body').append(modalHtml);

  //     const modal = $('.modal-descripcion');

  //     // Cerrar modal con el botón
  //     $('.modal-close').click(() => modal.remove());

  //     // Cerrar modal al hacer clic fuera
  //     modal.click(function(e) {
  //         if ($(e.target).is('.modal-descripcion')) {
  //             modal.remove();
  //         }
  //     });
  // }

  function updatePagination() {
    const totalPages = Math.ceil(proyectos.length / itemsPerPage);
    const paginationContainer = $("#pagination");
    paginationContainer.empty();

    // Si solo hay una página, no mostrar paginación
    if (totalPages <= 1) {
      return;
    }

    // Crear contenedor principal de paginación
    const paginationWrapper = $('<div class="pagination-wrapper"></div>');

    // Botón "Anterior"
    const prevButton = $(
      '<button class="pagination-btn prev-btn" aria-label="Página anterior">'
    );
    prevButton.html('<i class="fas fa-chevron-left"></i> Anterior');
    prevButton.prop("disabled", currentPage === 1);
    prevButton.click(function (e) {
      e.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        displayProyectos(currentPage);
        // Scroll suave hacia arriba
        $("html, body").animate(
          {
            scrollTop: $("#proyectos").offset().top - 100,
          },
          500
        );
      }
    });

    // Botón "Siguiente"
    const nextButton = $(
      '<button class="pagination-btn next-btn" aria-label="Página siguiente">'
    );
    nextButton.html('Siguiente <i class="fas fa-chevron-right"></i>');
    nextButton.prop("disabled", currentPage === totalPages);
    nextButton.click(function (e) {
      e.preventDefault();
      if (currentPage < totalPages) {
        currentPage++;
        displayProyectos(currentPage);
        // Scroll suave hacia arriba
        $("html, body").animate(
          {
            scrollTop: $("#proyectos").offset().top - 100,
          },
          500
        );
      }
    });

    // Contenedor para los números de página
    const pageNumbersContainer = $('<div class="page-numbers"></div>');

    // Calcular qué páginas mostrar
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Ajustar si estamos cerca del final
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Primera página y puntos suspensivos
    if (startPage > 1) {
      const firstPageBtn = $(
        '<button class="pagination-btn page-btn">1</button>'
      );
      firstPageBtn.click(function (e) {
        e.preventDefault();
        currentPage = 1;
        displayProyectos(currentPage);
        $("html, body").animate(
          {
            scrollTop: $("#proyectos").offset().top - 100,
          },
          500
        );
      });
      pageNumbersContainer.append(firstPageBtn);

      if (startPage > 2) {
        const ellipsis = $('<span class="pagination-ellipsis">...</span>');
        pageNumbersContainer.append(ellipsis);
      }
    }

    // Páginas visibles
    for (let i = startPage; i <= endPage; i++) {
      const pageBtn = $('<button class="pagination-btn page-btn"></button>');
      pageBtn.text(i);

      if (i === currentPage) {
        pageBtn.addClass("active");
      }

      pageBtn.click(function (e) {
        e.preventDefault();
        currentPage = i;
        displayProyectos(currentPage);
        $("html, body").animate(
          {
            scrollTop: $("#proyectos").offset().top - 100,
          },
          500
        );
      });

      pageNumbersContainer.append(pageBtn);
    }

    // Última página y puntos suspensivos
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        const ellipsis = $('<span class="pagination-ellipsis">...</span>');
        pageNumbersContainer.append(ellipsis);
      }

      const lastPageBtn = $(
        '<button class="pagination-btn page-btn"></button>'
      );
      lastPageBtn.text(totalPages);
      lastPageBtn.click(function (e) {
        e.preventDefault();
        currentPage = totalPages;
        displayProyectos(currentPage);
        $("html, body").animate(
          {
            scrollTop: $("#proyectos").offset().top - 100,
          },
          500
        );
      });
      pageNumbersContainer.append(lastPageBtn);
    }

    // Información de páginas
    const pageInfo = $('<div class="page-info"></div>');
    pageInfo.html(
      `Página ${currentPage} de ${totalPages} • ${proyectos.length} proyectos`
    );

    // Ensamblar la paginación
    paginationWrapper.append(prevButton);
    paginationWrapper.append(pageNumbersContainer);
    paginationWrapper.append(nextButton);
    paginationWrapper.append(pageInfo);

    paginationContainer.append(paginationWrapper);

    // Agregar animación de entrada
    paginationWrapper.hide().fadeIn(300);
  }

  displayProyectos(currentPage);
});
