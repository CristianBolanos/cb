// toogle-menu
// main-menu

const toggleMenuElement = document.getElementById("toogle-menu");
const mainMenuElement = document.getElementById("main-menu");
// const hamburgerWrapper = document.getElementById("toogle-menu");

toggleMenuElement.addEventListener('click', () => {
    mainMenuElement.classList.toggle("main-menu--show");
    toggleMenuElement.classList.toggle('active'); 
});





//const hamburgerWrapper = document.querySelector('.toogle-menu');

// hamburgerWrapper.addEventListener('click', () => {
//     hamburgerWrapper.classList.toggle('active');
// });
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

