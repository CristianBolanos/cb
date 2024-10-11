$(document).ready(function() {
    $('.dashboard-menu button').click(function() {
        const section = $(this).data('section');
        loadDashboardContent(section);
    });

    function loadDashboardContent(section) {
        // In a real application, you would fetch this data from a server
        let content = '';
        switch (section) {
            case 'blog':
                content = `
                    <h2 data-translate="manageBlog">Administrar Blog</h2>
                    <button class="btn" data-translate="newPost">Nueva Entrada</button>
                    <ul class="dashboard-list">
                        <li>
                            <span>Título del Post 1</span>
                            <button class="btn btn-small" data-translate="edit">Editar</button>
                            <button class="btn btn-small btn-danger" data-translate="delete">Eliminar</button>
                        </li>
                        <!-- Add more blog posts here -->
                    </ul>
                `;
                break;
            case 'projects':
                content = `
                    <h2 data-translate="manageProjects">Administrar Proyectos</h2>
                    <button class="btn" data-translate="newProject">Nuevo Proyecto</button>
                    <ul class="dashboard-list">
                        <li>
                            <span>Nombre del Proyecto 1</span>
                            <button class="btn btn-small" data-translate="edit">Editar</button>
                            <button class="btn btn-small btn-danger" data-translate="delete">Eliminar</button>
                        </li>
                        <!-- Add more projects here -->
                    </ul>
                `;
                break;
            case 'experience':
                content = `
                    <h2 data-translate="manageExperience">Administrar Experiencia</h2>
                    <button class="btn" data-translate="newExperience">Nueva Experiencia</button>
                    <ul class="dashboard-list">
                        <li>
                            <span>Título de la Experiencia 1</span>
                            <button class="btn btn-small" data-translate="edit">Editar</button>
                            <button class="btn btn-small btn-danger" data-translate="delete">Eliminar</button>
                        </li>
                        <!-- Add more experiences here -->
                    </ul>
                `;
                break;
        }
        $('#dashboard-content').html(content);
        updateLanguage(localStorage.getItem('language') || 'es');
    }
});