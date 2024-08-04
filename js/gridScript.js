document.addEventListener("DOMContentLoaded", () => {
    const images = [
        // { src: "images/covers/", title: "Título 1", details: [{type: "img", src: "images/detail1_1.jpg"}, {type: "img", src: "images/detail1_2.jpg"}] },
        { src: "images/covers/2024.jpg", title: "Title 1" },
        { src: "images/covers/colorado_lottery.jpg", title: "Title 2" },
        { src: "images/covers/dons_cabinets.jpg", title: "Title 3" },
        { src: "images/covers/dragoons.jpg", title: "Title 4" },
        { src: "images/covers/Friends_with_nature.gif", title: "Title 5" },
        { src: "images/covers/GWU.gif", title: "Title 6" },
        { src: "images/covers/IBD.jpg", title: "Title 7" },
        { src: "images/covers/mcd.jpg", title: "Title 8" },
        { src: "images/covers/Osito.jpg", title: "Title 9" },
        { src: "images/covers/QUICKCHARGE.jpg", title: "Title 10" },
        { src: "images/covers/reel.gif", title: "Title 11" },
        { src: "images/covers/Shelton.jpg", title: "Title 12" },
        { src: "images/covers/sitetracker.jpg", title: "Title 13" },
        { src: "images/covers/caveman.gif", title: "Title 14" },
        { src: "images/covers/SYLR.png", title: "Title 15" }
    ];

    const imageGrid = document.getElementById("image-grid");
    const detailView = document.getElementById("detail-view");
    const infoColumn = document.getElementById("info-column");
    const contentColumn = document.getElementById("content-column");

    images.forEach((image, index) => {
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

        imageItem.addEventListener("click", () => {
            showDetails(image, index);
        });

        imageGrid.appendChild(imageItem);
    });

    function showDetails(image, index) {
        infoColumn.innerHTML = `<h2>${image.title}</h2><p>Descripción del proyecto ${index + 1}</p>`;
        contentColumn.innerHTML = "";
        image.details.forEach(detail => {
            if (detail.type === "img") {
                const detailImg = document.createElement("img");
                detailImg.src = detail.src;
                contentColumn.appendChild(detailImg);
            } else if (detail.type === "video") {
                const detailVideo = document.createElement("video");
                detailVideo.src = detail.src;
                detailVideo.controls = true;
                contentColumn.appendChild(detailVideo);
            }
        });

        detailView.classList.add("active");
        detailView.scrollIntoView({ behavior: 'smooth' });
    }

    detailView.addEventListener("click", () => {
        detailView.classList.remove("active");
    });

    setTimeout(() => {
        document.body.classList.remove('hidden');
        document.body.classList.add('visible');
        setTimeout(() => {
            document.body.classList.remove('transition-bg');
            document.body.classList.add('bg-white');
        }, 1500);
    }, 10);
});
