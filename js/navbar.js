document.addEventListener('DOMContentLoaded', function () {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;

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
        })
        .catch(error => {
            console.error('Error al cargar el navbar:', error);
        });
});
