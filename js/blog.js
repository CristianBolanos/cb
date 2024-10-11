$(document).ready(function() {
    const blogPosts = [
        {
            titulo: "Introducción a React Hooks",
            fecha: "15 de Mayo, 2023",
            resumen: "En este artículo, exploramos los conceptos básicos de React Hooks y cómo pueden mejorar el desarrollo de componentes funcionales.",
            enlace: "#"
        },
        {
            titulo: "Optimización de rendimiento en aplicaciones web",
            fecha: "1 de Mayo, 2023",
            resumen: "Descubre técnicas avanzadas para mejorar el rendimiento de tus aplicaciones web y ofrecer una mejor experiencia de usuario.",
            enlace: "#"
        },
        {
            titulo: "Introducción a GraphQL",
            fecha: "15 de Abril, 2023",
            resumen: "Aprende los fundamentos de GraphQL y cómo puede revolucionar la forma en que construyes y consumes APIs.",
            enlace: "#"
        },
        // Agrega más entradas de blog aquí...
    ];

    const itemsPerPage = 10;
    let currentPage = 1;

    function displayBlogPosts(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedBlogPosts = blogPosts.slice(start, end);

        const container = $('#blog-container');
        container.empty();

        paginatedBlogPosts.forEach(post => {
            const postHtml = `
                <div class="blog-post">
                    <h2><a href="${post.enlace}">${post.titulo}</a></h2>
                    <p class="fecha">${post.fecha}</p>
                    <p>${post.resumen}</p>
                    <a href="${post.enlace}" class="btn">Leer más</a>
                </div>
            `;
            container.append(postHtml);
        });

        updatePagination();
    }

    function updatePagination() {
        const totalPages = Math.ceil(blogPosts.length / itemsPerPage);
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
                displayBlogPosts(currentPage);
            });

            paginationContainer.append(pageLink);
        }
    }

    displayBlogPosts(currentPage);
});



// agregue codigo
// function createBlogPost(post) {
//     return `
//         <div class="blog-post">
//             <h2>${post.titulo}</h2>
//             <p class="fecha">${post.fecha}</p>
//             <p class="resumen">${post.resumen}</p>
//             <div class="contenido-completo" style="display: none;">
//                 ${post.contenidoCompleto}
//             </div>
//             <button class="btn btn-expand" data-translate="readMore">Leer más</button>
//             <button class="btn btn-close" style="display: none;" data-translate="close">Cerrar</button>
//         </div>
//     `;
// }

// $(document).ready(function() {
//     // ... (previous code)

//     $(document).on('click', '.btn-expand', function() {
//         const post = $(this).closest('.blog-post');
//         post.find('.resumen').hide();
//         post.find('.contenido-completo').show();
//         $(this).hide();
//         post.find('.btn-close').show();
//     });

//     $(document).on('click', '.btn-close', function() {
//         const post = $(this).closest('.blog-post');
//         post.find('.resumen').show();
//         post.find('.contenido-completo').hide();
//         $(this).hide();
//         post.find('.btn-expand').show();
//     });
// });