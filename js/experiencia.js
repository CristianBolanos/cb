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
            titulo: "Auxiliar Operativo",
            empresa: "Colácteos",
            periodo: "marzo 2024 - hasta junio 2024",
            funciones: "<strong>Funciones:</strong> Realizar el almacenamiento, acopio y despacho de mercancías. Controlar y gestionar el inventario. "+
            "Semaforización de productos según fechas de vencimiento. ",
            logros: "<strong>Logros:</strong> Durante un contrato eventual por temporada de vacaciones, adquirí conocimientos especializados en " +
                "operaciones y logré ejecutar un 95% de las funciones encomendadas, mejorando la eficiencia operativa de la empresa."
        },
        {
            titulo: "Marketing, diseño y estampador",
            empresa: "EAU EARTH FUEGO",
            periodo: " mayoc2023 - diciembre 2023",
            funciones: "<strong>Funciones:</strong> Administrar las redes sociales. Diseñar gráficos y materiales visuales. Crear y aplicar estampados. ",
            logros: "<strong>Logros:</strong> Adquirí y apliqué con éxito herramientas especializadas en estampados textiles, reduciendo errores en un " +
                "50% y mejorando la entrega a tiempo en un 90%"
        },
        {
            titulo: "Técnico de sistemas",
            empresa: "MicroApple",
            periodo: "agosto 2022 - octubre 2022",
            funciones: "<strong>Funciones:</strong> Realizar mantenimiento preventivo y correctivo de computadoras. Reemplazar y actualizar piezas de " +
                "equipos y software. Instalar sistemas operativos, programas y configurar redes LAN. ",
            logros: "<strong>Logros:</strong> Efectué y resolví soluciones autodidactas adaptadas a las necesidades específicas de cada problema, " +
                "alcanzando una reducción del 30% en tiempos de inactividad y una mejora del 25% en la satisfacción del usuario."
        },
        {
            titulo: "Auxiliar en programación y diseño",
            empresa: "Vektor Media",
            periodo: "septiembre 2018 - febrero 2019",
            funciones: "<strong>Funciones:</strong> Administrar páginas web actualizándolas periódicamente. Diseñar y editar elementos visuales con Photoshop. "+
            " Crear y personalizar plantillas web",
            logros: "<strong>Logros:</strong>  Logré una adaptación exitosa al equipo, aumentando la colaboración y productividad en un 30% y eficiencia "+ 
            "en un 25% gracias al aprendizaje de herramientas tecnológicas avanzadas."
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