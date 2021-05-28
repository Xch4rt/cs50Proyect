const navOpen = document.querySelector('.nav_hamburguer')
const navClose = document.querySelector('.close_toggle')
const menu = document.querySelector('.nav_menu')
const navContainer = document.querySelector('.nav_menu') 

navOpen.addEventListener('click', () =>
{
    menu.classList.add('open');
    document.body.classList.add('active');
    navContainer.style.left = '0';
    navContainer.style.wi = '30rem';
})


navClose.addEventListener('click', () =>
{
    menu.classList.remove('open');
    document.body.classList.remove('active');
    navContainer.style.left = '-30rem';
    navContainer.style.wi = '0';
})
// AOS es una animacion
AOS.init();