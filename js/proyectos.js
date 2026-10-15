$(document).ready(function () {
  const proyectos = [
    {
      titulo: "Página web administrable para gestionar contenido sin depender de un desarrollador",
      descripcion:
        "Desarrollé una página web administrable pensada para que el cliente pueda mantener su sitio actualizado sin necesidad de tener conocimientos técnicos ni depender de otra persona para cada cambio <br><br> La plataforma permite gestionar el contenido digital de forma sencilla desde un panel administrativo, facilitando la actualización de la información y el mantenimiento del sitio web. <br><br> Tecnologías utilizadas: HTML5, Tailwind CSS, JavaScript, PHP, MySQL. Utilicé Kilo Code como herramienta de apoyo durante el desarrollo.",
      tipo: "imagen",
      media: "asset/img-portafolio/constructoraxyz.webp",
      enlace: "https://constructoraxyz.infinityfree.me/",
      Codigolink: "https://github.com/CristianBolanos",
    },
    {
      titulo: "Tienda virtual de ropa con una experiencia de compra sencilla e intuitiva",
      descripcion:
        "Desarrollé una tienda virtual de ropa con el objetivo de ofrecer una forma práctica y atractiva de explorar productos en línea. Durante el proceso, trabajé en el diseño de la interfaz, la experiencia de usuario y el funcionamiento general de la tienda, buscando que la navegación fuera clara y fácil de usar. <br><br> Este proyecto también me permitió aprender a trabajar con herramientas de inteligencia artificial para convertir ideas en funcionalidades concretas, mejorar mis instrucciones y resolver problemas durante el desarrollo. <br><br> Además, estoy trabajando en una segunda tienda virtual con Medusa.js, Next.js y PostgreSQL, con la que estoy explorando una arquitectura más avanzada para la gestión de productos y datos. Esta segunda versión todavía no está publicada en internet. <br><br> Tecnologías utilizadas: React, TypeScript y Vite. Utilicé Windsurf como herramienta de apoyo durante el desarrollo.",
      tipo: "video",
      media: "asset/videos/video.mp4",
      enlace: "https://cristianbolanos.github.io/shop/",
      Codigolink: "https://github.com/CristianBolanos/shop",
    },
    {
      titulo: "Sistema de gestión de pedidos y despachos",
      descripcion:
        "Una solución web diseñada para centralizar el control de pedidos y facilitar la coordinación de las operaciones logísticas desde un único panel administrativo. <br><br> Permite registrar y consultar pedidos, controlar sus estados, organizar rutas de entrega y visualizar indicadores operativos para facilitar el seguimiento de cada despacho. <br><br> Ideal para: distribuidoras, comercios y negocios que necesitan organizar sus pedidos y mejorar el control de sus entregas. <br><br> Tecnologías utilizadas: Google sheets, App script, Utilicé Claude como herramienta de apoyo durante el desarrollo. ",
      tipo: "imagen",
      media: "asset/img-portafolio/control-pedidos.jfif",
      enlace: "https://cristianbolanos.github.io/Distribuidora-Demo/demo/",
      Codigolink: "https://github.com/CristianBolanos/Distribuidora-Demo",
    },
    {
      titulo: "Landing page para restaurantes enfocada en atraer clientes",
      descripcion:
        "Desarrollé una landing page para restaurantes, pensada para captar la atención de los visitantes, presentar la propuesta gastronómica y facilitar que los clientes conozcan el negocio y se animen a visitarlo o ponerse en contacto. <br><br> La página tiene un diseño moderno y adaptable a dispositivos móviles. Es una plantilla personalizable: el nombre del restaurante, las imágenes, el menú y la información del negocio se pueden ajustar según las necesidades de cada cliente. <br><br> La idea es ofrecer a los restaurantes una buena base para tener presencia en internet sin tener que empezar el sitio desde cero. <br><br> Tecnologías utilizadas: Astro, TypeScript y Tailwind CSS. Utilicé Claude como herramienta de apoyo durante el desarrollo. <br><br> ¿Quieres ver cómo funciona? Explora la demostración y descubre cómo se puede adaptar a un restaurante real.",
      tipo: "imagen",
      media: "asset/img-portafolio/restaurante.webp",
      enlace: "https://CristianBolanos.github.io/restaurante/",
      Codigolink: "https://github.com/CristianBolanos/restaurante",
    },
    {
      titulo: "SOAT Ya | Una página web para facilitar la cotización del SOAT",
      descripcion:
        "Desarrollé una landing page para la venta de SOAT, pensada para captar la atención de los usuarios y facilitarles el acceso a la información de forma clara y sencilla. <br><br> El objetivo fue crear una página fácil de navegar, con una estructura que permita al visitante entender la propuesta y encontrar rápidamente cómo continuar con el proceso de compra o solicitar información. <br><br> Durante el desarrollo, trabajé en la organización del contenido y en una interfaz enfocada en la experiencia del usuario y la conversión de visitantes en potenciales clientes. <br><br> Tecnologías utilizadas: HTML5, CSS3 y JavaScript. Utilicé Gemini como herramienta de apoyo durante el desarrollo.",
      tipo: "imagen",
      media: "asset/img-portafolio/soat.webp",
      enlace: "https://cristianbolanos.github.io/soat/",
      Codigolink: "https://github.com/CristianBolanos/soat",
    },


    {
      titulo: "Snake Game | Un juego clásico desarrollado con ayuda de IA",
      descripcion:
        "Este proyecto nació de mi curiosidad por explorar las herramientas de inteligencia artificial aplicadas al desarrollo web. Cuando empecé a experimentar con entornos como Cursor, decidí poner a prueba lo que podía construir dando instrucciones a la IA, revisando el código y guiando el proceso hasta conseguir un juego funcional. <br><br> El resultado fue una versión del clásico Snake, en la que el jugador controla una serpiente que debe recoger alimentos, crecer y evitar chocar consigo misma. <br><br> Más allá del juego, este proyecto me permitió familiarizarme con nuevas herramientas, aprender a formular mejores instrucciones y entender cómo la inteligencia artificial puede servir de apoyo para convertir una idea en algo funcional. <br><br> Tecnologías utilizadas: HTML5, CSS3 y JavaScript. Utilicé Cursor como herramienta de apoyo durante el desarrollo.",
      tipo: "imagen",
      media: "asset/img-portafolio/SnakeGame.webp",
      enlace: "https://CristianBolanos.github.io/SnakeGame/",
      Codigolink: "https://github.com/CristianBolanos/SnakeGame",
    },
    {
      titulo: "Landing page corporativa | Una práctica para poner en acción mis conocimientos",
      descripcion:
        "Este proyecto nació como una forma de poner en práctica lo aprendido en cursos de desarrollo web y comprobar hasta dónde podía llegar con mis propios conocimientos. <br><br> Desarrollé una landing page corporativa escribiendo el código manualmente, sin utilizar inteligencia artificial para generarlo. Me apoyé en tutoriales de YouTube, investigación propia y los conocimientos que fui adquiriendo durante mi aprendizaje. <br><br> El proceso me permitió reforzar mis bases en desarrollo web, experimentar con la estructura y el diseño de una página empresarial y ganar más confianza al escribir y organizar el código por mi cuenta. <br><br> Tecnologías utilizadas: HTML5, CSS3 y JavaScript.",
      tipo: "imagen",
      media: "asset/img-portafolio/corporativa.webp",
      enlace: "https://CristianBolanos.github.io/corporativa/",
      Codigolink: "https://github.com/CristianBolanos/corporativa",
    },

    {
      titulo: "Mi primer portafolio web | El comienzo de mi camino en el desarrollo web",
      descripcion:
        "Este fue mi primer portafolio web, un proyecto con el que empecé a darle forma a mi presencia en internet y a explorar cómo presentar mis conocimientos y trabajos de manera profesional.  <br><br> Partí de una plantilla web y la adapté a mi gusto, realizando modificaciones con Bootstrap, JavaScript, HTML y CSS para personalizar su apariencia y familiarizarme con la estructura de un sitio web. <br><br> Aunque hoy tengo más experiencia y nuevos conocimientos, este proyecto representa una etapa importante de mi aprendizaje y el punto de partida para seguir mejorando mis habilidades en desarrollo web. <br><br> Tecnologías utilizadas: HTML5, CSS3 y Bootstrap, JavaScript.",
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
                        <a href="${proyecto.enlace
          }" class="btn" target="_blank">Demo</a>
                        ${proyecto.Codigolink
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
                        <a href="${proyecto.enlace
          }" class="btn" target="_blank">Demo</a>
                        ${proyecto.Codigolink
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
