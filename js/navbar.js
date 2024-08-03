document.addEventListener('DOMContentLoaded', function () {
    $("#navbar").load("navbar.html", function () {
        const toggleButton = document.getElementById('navbar-toggle');
        const navbarMenu = document.getElementById('navbar-menu');

        if (toggleButton && navbarMenu) {
            toggleButton.addEventListener('click', function () {
                navbarMenu.classList.toggle('show');
            });
        }

        setTimeout(() => {
            document.body.classList.remove('hidden');
            document.body.classList.add('visible');
        }, 50);
    });
});