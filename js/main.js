$(document).ready(function () {

    const $header = $('#main-header');
    const $hamburger = $('.hamburger');
    const $navLinks = $('.nav-links');

    // Header shrink on scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $header.addClass('shrink');
        } else {
            $header.removeClass('shrink');
        }
    });

    // Hamburger menu toggle
    $hamburger.click(function (e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $navLinks.toggleClass('active');
    });

    // Close menu when clicking outside
    $(document).click(function (event) {
        if (!$(event.target).closest('#main-header').length) {
            $hamburger.removeClass('active');
            $navLinks.removeClass('active');
        }
    });

    // Close menu when scrolling
    $(window).scroll(function () {
        if ($navLinks.hasClass('active')) {
            $hamburger.removeClass('active');
            $navLinks.removeClass('active');
        }
    });

    // Dynamic text
    // const texts = ['Desarrollador Web Creativo', 'Experto en Frontend', 'Apasionado por la Tecnología'];
    const texts = ['Tecnólogo en sistemas', 'Apasionado por la Tecnología', 'Experto en Frontend'];

    // const texts = [translations.es.textDinamico, translations.en.textDinamico]; 

    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        $('#dynamic-text').text(letter);
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 100);
        }
    }());



    // Theme toggle
    $('#theme-toggle').click(function () {
        $('body').toggleClass('dark-theme');
        localStorage.setItem('theme', $('body').hasClass('dark-theme') ? 'dark' : 'light');
        updateThemeIcon();
    });

    function updateThemeIcon() {
        const isDarkTheme = $('body').hasClass('dark-theme');
        $('#theme-toggle').html(isDarkTheme ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>');
    }

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        $('body').addClass('dark-theme');
        updateThemeIcon();
    }

    // Language toggle
    // $('#language-select').change(function () {
    //     const lang = $(this).val();
    //     // Implement language change logic here
    //     console.log('Language changed to:', lang);
    // });

    // Language toggle
    $('#language-select').change(function () {
        const lang = $(this).val();
        updateLanguage(lang);
    });

    // Load saved language
    // const savedLang = localStorage.getItem('language') || 'es';
    // $('#language-select').val(savedLang);
    // updateLanguage(savedLang)

    // Load recent projects
    const recentProjects = [
        {
            title: "Ecommerce",
            description: "Ecommerce creada con nocode, Tecnologías utilizadas: react, typescripts,Vite. Cosas aprendidas a manejar la imaginación para perfecionar las instrucciones de los prompt a la IA en la creación del proyecto dando un buen manejo de IU y UX y su funcionalidad.",
            tipo: "video",
            media: "../asset/videos/video.webm",
            enlace: "https://cristianbolanos.github.io/shop/",
            Codigo: "https://github.com/CristianBolanos/shop"
        },
        {
            title: "SOAT Ya",
            description: "Website venta de soat. Tecnologías utilizadas: HTML5, CSS3, JavaScript.",
            tipo: "imagen",
            media: "asset/img-portafolio/soat.webp",
            link: "https://cristianbolanos.github.io/soat/",
            Codigo: "https://github.com/CristianBolanos/soat"
        },
        {
            title: "Snake Game",
            description: "Juego de Snake Game. Tecnologías utilizadas: HTML5, CSS3, JavaScript.",
            tipo: "imagen",
            media: "asset/img-portafolio/SnakeGame.webp",
            link: "https://cristianbolanos.github.io/SnakeGame/",
            Codigo: "https://github.com/CristianBolanos/SnakeGame"
        },

    ];

    // Esperar a que el DOM esté completamente cargado
    $(document).ready(function () {
        const projectsContainer = $('.projects-grid');
        projectsContainer.empty();

        recentProjects.forEach(project => {
            const descripcionCorta = project.description.length > 150 ?
                project.description.substring(0, 150) + '...' :
                project.description;

            let mediaContent;
            let botonesHtml;

            if (project.tipo === "video") {
                mediaContent = `<div class=\"media-container video-card-container\" style=\"position:relative;\">\n                    <video src=\"${project.media}\" class=\"card-media card-video\" controls preload=\"none\" tabindex=\"0\">\n                        Tu navegador no soporta el elemento video.\n                    </video>\n                    <div class=\"play-overlay-modern\" style=\"display:flex; align-items:center; justify-content:center; position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none;\">\n                        <i class=\"fas fa-play play-icon-modern\" style=\"font-size:3rem; color:white; background:rgba(0,0,0,0.4); border-radius:50%; padding:18px; pointer-events:auto; cursor:pointer; transition:opacity 0.2s;\"></i>\n                    </div>\n                </div>`;
                botonesHtml = `
                    <div class=\"botones-principales\">\n                        <a href=\"${project.link || project.enlace}\" class=\"btn\" target=\"_blank\">Demo</a>\n                        ${project.Codigo ? `<a href=\"${project.Codigo}\" class=\"btn\" target=\"_blank\">Código</a>` : ''}\n                    </div>\n                    <button class=\"btn ver-mas\" type=\"button\">Ver más</button>\n                `;
            } else {
                mediaContent = `<div class=\"media-container\">\n                    <img src=\"${project.media}\" alt=\"${project.title}\" class=\"card-media\">\n                </div>`;
                botonesHtml = `
                    <div class=\"botones-principales\">\n                        <a href=\"${project.link || project.enlace}\" class=\"btn\" target=\"_blank\">Demo</a>\n                        ${project.Codigo ? `<a href=\"${project.Codigo}\" class=\"btn\" target=\"_blank\">Código</a>` : ''}\n                    </div>\n                    <button class=\"btn ver-mas\" type=\"button\">Ver más</button>\n                `;
            }

            const projectCard = `
                <div class=\"project-card\">\n                    ${mediaContent}\n                    <div class=\"content\">\n                        <h3>${project.title}</h3>\n                        <p class=\"descripcion-corta\">${descripcionCorta}</p>\n                        <p class=\"descripcion-completa\" style=\"display: none;\">${project.description}</p>\n                        <div class=\"botones-container\">\n                            ${botonesHtml}\n                        </div>\n                    </div>\n                </div>\n            `;
            projectsContainer.append(projectCard);
        });

        // Manejador para el botón "Ver más"
        projectsContainer.on('click', '.ver-mas', function () {
            const card = $(this).closest('.project-card');
            const descripcionCorta = card.find('.descripcion-corta');
            const descripcionCompleta = card.find('.descripcion-completa');

            if (descripcionCorta.is(':visible')) {
                descripcionCorta.hide();
                descripcionCompleta.show();
                $(this).text('Ver menos');
            } else {
                descripcionCompleta.hide();
                descripcionCorta.show();
                $(this).text('Ver más');
            }
        });

        // Lógica moderna para videos en cards
        projectsContainer.on('click', 'video.card-video', function (e) {
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
            const overlay = $(this).closest('.video-card-container').find('.play-overlay-modern');
            if (this.paused) {
                overlay.fadeIn(150);
            } else {
                overlay.fadeOut(150);
            }
        });
        projectsContainer.on('click', '.play-icon-modern', function (e) {
            e.stopPropagation();
            const video = $(this).closest('.video-card-container').find('video.card-video')[0];
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
            const overlay = $(this).closest('.video-card-container').find('.play-overlay-modern');
            if (video.paused) {
                overlay.fadeIn(150);
            } else {
                overlay.fadeOut(150);
            }
        });
        projectsContainer.on('play pause ended', 'video.card-video', function () {
            const overlay = $(this).closest('.video-card-container').find('.play-overlay-modern');
            if (this.paused) {
                overlay.fadeIn(150);
            } else {
                overlay.fadeOut(150);
            }
        });
        // Inicializar overlays
        projectsContainer.find('.video-card-container').each(function () {
            const video = $(this).find('video.card-video')[0];
            const overlay = $(this).find('.play-overlay-modern');
            if (video && video.paused) {
                overlay.show();
            } else {
                overlay.hide();
            }
        });
        // Doble click en la card de video para abrir el video en modal (opcional)
        // projectsContainer.on('dblclick', '.video-card-container', function (e) {
        //     const videoSrc = $(this).find('video.card-video').attr('src');
        //     if (videoSrc) {
        //         // Aquí puedes abrir tu modal personalizado si lo deseas
        //     }
        // });
    });

    // Form validation
    const $form = document.querySelector('#contact-form');
    if ($form) { // Verifica si el formulario existe
        $form.addEventListener('submit', handleSubmit);
    }
    async function handleSubmit(event) {
        event.preventDefault()
        const name = document.getElementById('name').value.trim()
        const email = document.getElementById('email').value.trim()
        const message = document.getElementById('message').value.trim()

        if (name === '' || email === '' || message === '') {
            alert('Por favor, rellena todos los campos obligatorios.')
            return
        }

        if (!isValidEmail(email)) {
            alert('Por favor, introduce un email válido.')
            return
        }

        const form = new FormData(this)
        const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers: {
                'Accept': 'application/json'
            }
        })
        if (response.ok) {
            this.reset()
            document.getElementById('success-message').style.display = 'block'; // Mostrar mensaje de éxito
            setTimeout(() => {
                document.getElementById('success-message').style.display = 'none'; // Ocultar mensaje después de 3 segundos
            }, 3000)
        } else {
            alert('Error al enviar el mensaje')
        }
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    // Smooth scrolling
    $('a[href^="#"]').on('click', function (event) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }
    });

    // Detectar el modo del sistema y aplicar el tema correspondiente
    function applySystemTheme() {
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isDarkMode) {
            $('body').addClass('dark-theme');
        } else {
            $('body').removeClass('dark-theme');
        }
    }

    // Llamar a la función al cargar la página
    applySystemTheme();

    // Escuchar cambios en el modo del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applySystemTheme);



    // Set current year in footer fecha
    // document.getElementById('currentYear').textContent = new Date().getFullYear();

});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'es', includedLanguages: 'en-CA,en,fr,it,pt,de,ru', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true }, 'google_translate_element');
}

// Set current year in footer fecha
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});

// function googleTranslateElementInit() {
//     new google.translate.TranslateElement({ pageLanguage: 'es', includedLanguages: 'ca,eu,gl,en,fr,it,pt,de,ru', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true }, 'google_translate_element');
// }
