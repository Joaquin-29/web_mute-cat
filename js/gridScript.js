document.addEventListener("DOMContentLoaded", () => {
    const images = [
        { src: "./images/1.png", title: "Título 1" },
        { src: "./images/2.jpg", title: "Título 2" },
        { src: "images/3.jpg", title: "Título 3" },
        { src: "/images/4.gif", title: "Título 4" },
        { src: "/images/5.jpg", title: "Título 5" },
        { src: "/images/6.gif", title: "Título 6" },
        { src: "/images/7.gif", title: "Título 7" },
        { src: "/images/8.jpg", title: "Título 8" }
    ];

    const imageGrid = document.getElementById("image-grid");

    images.forEach(image => {
        const imageItem = document.createElement("div");
        imageItem.classList.add("image-item");

        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.title;

        const titleElement = document.createElement("div");
        titleElement.classList.add("image-title");
        titleElement.textContent = image.title;

        const viewElement = document.createElement("div");
        viewElement.classList.add("image-view");
        viewElement.textContent = "<< view >>";

        imageItem.appendChild(imgElement);
        imageItem.appendChild(titleElement);
        imageItem.appendChild(viewElement);

        imageGrid.appendChild(imageItem);
    });
});
