const hamburgerMenu = document.querySelector('.menu-mobile');
const initialHamburgerSrc = hamburgerMenu.querySelector('img').src;
const closeHamburgerSrc = `img/icon-close.svg`;

hamburgerMenu.addEventListener('click', function() {
    const img = hamburgerMenu.querySelector('img');
    const menu = hamburgerMenu.querySelector('ul');

    menu.classList.toggle('menu-hidden');

    if(!menu.classList.contains('menu-hidden')) {
        img.src = closeHamburgerSrc;
    } else {
        img.src = initialHamburgerSrc;
    }
});