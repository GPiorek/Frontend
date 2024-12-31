const hamMenu = document.querySelector('.hamburgerMenu');

const offScreenMenu = document.querySelector('.offScreenMenu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})
console.log("test")