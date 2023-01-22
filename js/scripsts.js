// toogle-menu
// main-menu


const toggleMenuElement = document.getElementById("toogle-menu");
const mainMenuElement = document.getElementById("main-menu");

toggleMenuElement.addEventListener('click', () => {
    mainMenuElement.classList.toggle("main-menu--show");
});

// let toogle = document.getElementById("toggle-menu");
// let  main = document.getElementById("main-menu");
// let contador = 0;

// toogle.addEventListener("click", function(){
//     if(contador == 0){
//         main.className = ('main dos')
//         contador=1;
//     }else{
//         main.classList.remove('dos');
//         main.className = ('main dos');
//         contador=0;
//     }
// })


