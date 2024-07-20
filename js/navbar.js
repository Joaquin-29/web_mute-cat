document.addEventListener('DOMContentLoaded', function () {
    console.log("navbar script");
    
    const toggleButton = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    toggleButton.addEventListener('click', function () {
        navbarMenu.classList.toggle('show');
    });
});
