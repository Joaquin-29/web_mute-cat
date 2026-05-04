document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    if (toggleButton && navbarMenu) {
        toggleButton.addEventListener('click', function () {
            navbarMenu.classList.toggle('show');
        });
    }

    const currentLocation = window.location.href;
    const menuItems = document.querySelectorAll('.navbar a');
    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add('active');
        }
    });

    if (document.body.classList.contains('hidden')) {
        document.body.classList.remove('hidden');
        document.body.classList.add('visible');
    }
});
