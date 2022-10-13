const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const lists = document.querySelector('.lists')


openMenu.addEventListener('click', function () {
    closeMenu.classList.toggle("active");
    openMenu.classList.toggle("active");
    lists.classList.toggle("active");
})

closeMenu.addEventListener("click", function () {
    closeMenu.classList.toggle("active");
    openMenu.classList.toggle("active");
    lists.classList.toggle("active");
});