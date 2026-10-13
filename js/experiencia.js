$(document).ready(function () {
    const experiencias = [
        // {
        //     titulo: "Desarrollador Web Senior",
        //     empresa: "Empresa A",
        //     periodo: "Enero 2020 - Presente",
        //     descripcion: "Responsable del desarrollo y mantenimiento de aplicaciones web utilizando React y Node.js. Lideré un equipo de 5 desarrolladores en proyectos de gran escala."
        // },
        // {
        //     titulo: "Desarrollador Frontend",
        //     empresa: "Empresa B",
        //     periodo: "Marzo 2018 - Diciembre 2019",
        //     descripcion: "Desarrollé interfaces de usuario responsivas y accesibles utilizando HTML5, CSS3 y JavaScript. Colaboré en la implementación de una nueva arquitectura frontend basada en Vue.js."
        // },
        // {
        //     titulo: "Desarrollador Web Junior",
        //     empresa: "Empresa C",
        //     periodo: "Junio 2016 - Febrero 2018",
        //     descripcion: "Participé en el desarrollo de sitios web para clientes utilizando WordPress y PHP. Aprendí sobre optimización de rendimiento y SEO."
        // },
        // Agrega más experiencias aquí...
        {
            titulo: "Freelance",
            empresa: "SYSHELP",
            periodo: "agosto 2024 - Actualidad ",
            funciones: "<strong>Responsabilidades:</strong> Actualmente estoy en proyecto de investigación sobre la inteligencia artificial para optimizar " +
                "la productividad. Actualizando conocimientos en desarrollo web y tecnologías. Creando proyectos web personales con inteligencia artificial. ",
            logros: "<strong>Logros:</strong> aprendizaje de herramientas con inteligencia artificial y su manejo."
        },
        {
            titulo: "Trabajo independiente",
            empresa: "Gema",
            periodo: "junio de 2025 - septiembre 2026",
            funciones: "<strong>Responsabilidades: </strong> Administración y actualización de catálogos de productos en los marketplaces Falabella, AlCarrito y la aplicación Brilla; publicación de productos nuevos gestionando imágenes, descripciones, especificaciones técnicas, precios e información comercial; actualización de contenidos digitales manteniendo la coherencia visual y la correcta presentación de los productos en línea; diseño de piezas promocionales para apoyar campañas comerciales. ",
            logros: "<strong>Logros:</strong> Gestión simultánea de catálogos en tres canales de venta digital; fortalecimiento de competencias en redacción comercial, actualización de contenidos y diseño de piezas promocionales para ecommerce."
        },
        {
            titulo: "Auxiliar Comercial y Logístico",
            empresa: "Vision y Marketing",
            periodo: "noviembre 2025 - mayo 2026",
            funciones: "<strong>Responsabilidades: </strong> Seguimiento de indicadores de gestión comercial, administración y control del sistema DMS, coordinación de procesos logísticos y comerciales, seguimiento a cronogramas de entrega, relacionamiento con proveedores, gestión de inventarios, control documental de la operación, elaboración de reportes para la gerencia y apoyo en la ejecución de estrategias comerciales. ",
            logros: "<strong>Logros:</strong>  Cumplimiento de los indicadores establecidos desde el primer mes, optimización de la trazabilidad documental y fortalecimiento de la coordinación entre las áreas comercial y operativa. "
        },
        {
            titulo: "Auxiliar Operativo",
            empresa: "Colácteos",
            periodo: "marzo 2024 - junio 2024",
            funciones: "<strong>Responsabilidades:</strong> Control de inventarios, almacenamiento y despacho, organización de mercancía, gestión de productos por fechas de vencimiento.",
            logros: "<strong>Logros:</strong> Cumplimiento del 95 % de los objetivos durante el contrato, fortalecimiento de los procesos operativos. "
        },
        {
            titulo: "Marketing Digital - Diseño - Producción",
            empresa: "EAU EARTH FUEGO",
            periodo: " mayo 2023 - diciembre 2023",
            funciones: "<strong>Responsabilidades:</strong> Administración de redes sociales, atención a clientes, diseño publicitario, gestión de producción y cumplimiento de tiempos de entrega de pedidos.",
            logros: "<strong>Logros:</strong> Reducción de errores en un 90 % y cumplimiento de entregas a tiempo en un 95 %. "
        },
        {
            titulo: "Técnico de sistemas",
            empresa: "MicroApple",
            periodo: "agosto 2022 - octubre 2022",
            funciones: "<strong>Responsabilidades:</strong> Soporte técnico, atención a clientes, configuración de equipos, instalación de redes y solución de incidentes tecnológicos. ",
            logros: "<strong>Logros:</strong> Reducción del 30 % en tiempos de respuesta e incremento del 25 % en la satisfacción de clientes "
        },
        {
            titulo: "Auxiliar en programación y diseño",
            empresa: "Vektor Media",
            periodo: "septiembre 2018 - febrero 2019",
            funciones: "<strong>Responsabilidades:</strong> Administración de tiendas ecommerce y páginas web, actualización de contenido digital, desarrollo de plantillas web y diseño gráfico. ",
            logros: "<strong>Logros:</strong> Optimización de procesos digitales e incremento de la productividad del equipo. "
        },
    ];

    const itemsPerPage = 10;
    let currentPage = 1;

    function displayExperiencias(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedExperiencias = experiencias.slice(start, end);

        const container = $('#experiencia-container');
        container.empty();

        paginatedExperiencias.forEach(exp => {
            const experienciaHtml = `
                <div class="experiencia-item">
                    <h2>${exp.titulo}</h2>
                    <h3>${exp.empresa}</h3>
                    <p class="periodo">${exp.periodo}</p>
                    <p>${exp.funciones}</p>
                    <p>${exp.logros}</p>
                </div>
            `;
            container.append(experienciaHtml);
        });

        updatePagination();
    }

    function updatePagination() {
        const totalPages = Math.ceil(experiencias.length / itemsPerPage);
        const paginationContainer = $('#pagination');
        paginationContainer.empty();

        for (let i = 1; i <= totalPages; i++) {
            const pageLink = $('<a>', {
                href: '#',
                text: i,
                class: i === currentPage ? 'active' : ''
            });

            pageLink.click(function (e) {
                e.preventDefault();
                currentPage = i;
                displayExperiencias(currentPage);
            });

            paginationContainer.append(pageLink);
        }
    }

    displayExperiencias(currentPage);
});