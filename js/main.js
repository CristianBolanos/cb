$(document).ready(function () {

    const $header = $('#main-header');
    const $hamburger = $('.hamburger');
    const $navLinks = $('.nav-links');

    // Header shrink on scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $header.addClass('shrink');
            // $header.css('background-color', 'var(--background-color)');
        } else {
            $header.removeClass('shrink');
            // $header.css('background-color', 'transparent');
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
    const savedLang = localStorage.getItem('language') || 'es';
    $('#language-select').val(savedLang);
    updateLanguage(savedLang)

    // Load recent projects
    const recentProjects = [
        {
            title: "Snake Game",
            description: "Juego de Snake Game. Tecnologías utilizadas: HTML5, CSS3, JavaScript.",
            image: "asset/img-portafolio/SnakeGame.webp",
            link: "https://cristianbolanos.github.io/SnakeGame/",
            Codigo: "https://github.com/CristianBolanos/SnakeGame"
        },
        {
            title: "Corporativa",
            description: "Landing pages corporativa. Tecnologías utilizadas: HTML5, CSS3, JavaScript. ",
            image: "asset/img-portafolio/corporativa.webp",
            link: "https://CristianBolanos.github.io/corporativa/",
            Codigo: "https://github.com/CristianBolanos/corporativa"
        },
        {
            title: "Restaurante",
            description: "Landing pages Restaurante. Tecnologías utilizadas: HTML5, CSS3, Bootstrap.",
            image: "asset/img-portafolio/restaurante.webp",
            link: "https://CristianBolanos.github.io/restaurante/",
            Codigo: "https://github.com/CristianBolanos/restaurante"
        }
    ];

    const projectsContainer = $('.projects-grid');
    recentProjects.forEach(project => {
        const projectCard = `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}">
                <div class="content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" class="btn" target="_blank">Demo</a>
                    <a href="${project.Codigo}" class="btn" target="_blank">Código</a>
                </div>
            </div>
        `;
        projectsContainer.append(projectCard);
    });

    // Form validation
    const $form = document.querySelector('#contact-form')
    $form.addEventListener('submit', handleSubmit)

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


});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'es', includedLanguages: 'en-CA,en,fr,it,pt,de,ru', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true }, 'google_translate_element');
}

// function googleTranslateElementInit() {
//     new google.translate.TranslateElement({ pageLanguage: 'es', includedLanguages: 'ca,eu,gl,en,fr,it,pt,de,ru', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true }, 'google_translate_element');
// }







