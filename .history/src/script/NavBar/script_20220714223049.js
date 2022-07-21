let togglleMenu = document.getElementById('list-mb');

togglleMenu.addEventListener('click', (e) => {
    let chageMenu = document.querySelector(".list-header");
    chageMenu.classList.toggle('responsive');


})