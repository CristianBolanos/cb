const translations = {
    es: {
        // logo: "Tu Nombre",
        home: "Inicio",
        experience: "Experiencia",
        projects: "Proyectos",
        blog: "Blog",
        contact: "Contacto",

        SaludoBanner: "Hola, soy Cristian Bolaños",
        // textDinamico:"Tecnólogo en sistemas, Apasionado por la Tecnología, Experto en Frontend",

        sendMessage: "Enviar Mensaje",
        SeeMore: "Ver más",
        readMore: "Leer más",
        close: "Cerrar",
        managePortfolio: "Administrar Portafolio",
        // sobre mi
        Aboutme: "Sobre Mí",
        AboutmeText: "Tecnólogo en sistemas con 1 año de experiencia, dedicado al sector de la tecnología a través de " +
            "empresas e independientes, con experiencia y conocimientos en computadoras, programación y redes informáticas." +

            " Actualmente, estoy aprendiendo sobre la IA para optimizar la productividad." +

            "Siempre he sentido gusto por armar y desarmar cosas y entender su funcionalidad, lo que me llevó a" +
            "interesarme por las computadoras y la tecnología.Me considero una persona autodidacta, ya que busco" +
            "soluciones de acuerdo con la necesidad del problema, aunque no hay nada como tener el apoyo de" +
            "alguien que pueda compartir su experiencia.",
        downloadCV: "Descargar CV",

        habilidades: "Mis Habilidades",
        tecnicas: "Habilidades Técnicas",
        blandas:"Habilidades Blandas",
        organizado:"Organizado",

    },
    en: {
        // logo: "Your Name",
        home: "Home",
        experience: "Experience",
        projects: "Projects",
        blog: "Blog",
        contact: "Contact",
        SaludoBanner:"Hello, I'm Cristian Bolaños",
        // textDinamico:"Systems Technologist, Passionate about Technology, Frontend Expert",

        sendMessage: "Send Message",
        SeeMore: "See more",
        readMore: "Read more",
        close: "Close",
        managePortfolio: "Manage Portfolio",
        // sobre mi
        Aboutme: "About me",
        AboutmeText: "Technologist in systems with 1 year of experience, dedicated to the technology sector through" +
        "companies and independent  projects, with experience and knowledge in computers, programming, and computer networks." +
        
        "Currently, I am learning about AI to optimize productivity." +

        "I have always been fascinated by assembling and disassembling things and understanding their functionality," +
        "which led me to become interested in computers and technology.I consider myself self- taught, as I seek solutions" +
        "according to the problem's needs, although there's no substitute for having the support of someone who can share their experience.",
        downloadCV: "Download CV",
       
        habilidades: "My Skills",
        tecnicas: "Technical Skills",
        blandas:"Soft Skills",
        organizado:"Organized",

    }
};

function updateLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
    
}



// $(document).ready(function() {
//     const savedLang = localStorage.getItem('language') || 'es';
//     $('#language-select').val(savedLang);
//     updateLanguage(savedLang);

//     $('#language-select').change(function() {
//         const lang = $(this).val();
//         updateLanguage(lang);
//     });
// });
