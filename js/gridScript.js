document.addEventListener("DOMContentLoaded", () => {
    const images = [
        { src: "images/1.png", title: "Título 1", details: [{type: "img", src: "images/detail1_1.jpg"}, {type: "img", src: "images/detail1_2.jpg"}] },
        { src: "images/2.jpg", title: "Título 2", details: [{type: "img", src: "images/detail2_1.jpg"}] },
        { src: "images/3.jpg", title: "Título 3", details: [{type: "img", src: "images/detail3_1.jpg"}] },
        { src: "images/4.gif", title: "Título 4", details: [{type: "img", src: "images/detail4_1.jpg"}] },
        { src: "images/5.jpg", title: "Título 5", details: [{type: "img", src: "images/detail5_1.jpg"}] },
        { src: "images/6.gif", title: "Título 6", details: [{type: "img", src: "images/detail6_1.jpg"}] },
        { src: "images/7.gif", title: "Título 7", details: [{type: "img", src: "images/detail7_1.jpg"}] },
        { src: "images/8.jpg", title: "Título 8", details: [{type: "img", src: "images/detail8_1.jpg"}] }
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
