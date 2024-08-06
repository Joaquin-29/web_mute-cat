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

        const currentLocation = window.location.href;
        const menuItems = document.querySelectorAll('.navbar a');

        menuItems.forEach(item => {
            if (item.href === currentLocation) {
                item.classList.add('active');
            }
        });
    });
});