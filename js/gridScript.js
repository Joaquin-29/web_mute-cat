document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            src: "images/covers/2024.jpg",
            title: "Reel 2024",
            details: {
                summary: "Resumen de proyecto. Falta video en yt",
                media: [
                    { type: "video", src: "https://www.youtube.com/" }
                ]
            }
        },
        {
            src: "images/covers/colorado_lottery.jpg",
            title: "Colorado Lottery",
            details: {
                summary: "Resumen de proyecto.",
                media: [
                    { type: "video", src: "https://www.youtube.com/embed/r7Xn22dSd7A?si=iPbQfcjn709T4Hhs" },
                ]
            }
        },
        {
            src: "images/covers/dons_cabinets.jpg",
            title: "Don's Cabinets",
            details: {
                summary: "Resumen de proyecto.",
                media: [
                    { type: "video", src: "https://www.youtube.com/embed/Ytm0Zh1-k5I?si=FpYMZJs4tNxmSaGh" },
                    { type: "img", src: "images/dc_1.jpeg" },
                    { type: "img", src: "images/dc_2.jpeg" },
                    { type: "img", src: "images/dc_3.jpeg" }
                ]
            }
        },
        {
            src: "images/covers/dragoons.jpg",
            title: "Dragoons",
            details: {
                summary: "Resumen de proyecto.",
                media: [
                    { type: "video", src: "https://www.youtube.com/embed/RM2udpaIsBY?si=uYwXnbaSkcGqNali" }
                ]
            }
        },
        {
            src: "images/covers/Friends_with_nature.gif",
            title: "Friends with Nature",
            details: {
                summary: "Resumen de proyecto.",
                media: [
                    { type: "video", src: "https://www.youtube.com/embed/nnWqfMagt20?si=vKIdf5VrNQJGTYVG" }
                ]
            }
        },
        {
            src: "images/covers/GWU.gif",
            title: "GWU",
            details: {
                summary: "Resumen de proyecto.",
                media: [
                    { type: "video", src: "https://www.youtube.com/embed/zU27kxU0A_0?si=XEPIzVL3W5sPRsbF" }
                ]
            }
        },
        {
            src: "images/covers/IBD.jpg",
            title: "IBD",
            details: {
                summary: "Resumen de proyecto.",
                media: [
                    { type: "video", src: "https://www.youtube.com/embed/5WAN2gr5eaA?si=8OAf5P_eOFfePKDh" },
                    { type: "video", src: "https://www.youtube.com/embed/EinZV6NWQts?si=po8u2Q14fsdUNyit" },
                    { type: "video", src: "https://www.youtube.com/embed/ZVgVh1wLJDU?si=_F5FT8Zp8FfGyHq1" },
                    { type: "img", src: "images/IBD_1.jpg" },
                    { type: "img", src: "images/IBD_2.jpg" },
                    { type: "img", src: "images/IBD_3.jpg" },
                    { type: "img", src: "images/IBD_4.jpg" },
                    { type: "img", src: "images/IBD_5.jpg" },
                    { type: "img", src: "images/IBD_6.jpg" },
                    { type: "img", src: "images/IBD_7.jpg" }
                ]
            }
        },
        {
            src: "images/covers/mcd.jpg",
            title: "MCD Coffee Day",
            details: {
                summary: "Resumen de proyecto.",
                media: [
                    { type: "video", src: "https://www.youtube.com/embed/ERc4cMURkxE?si=hGuH1WZFNpXtWYDZ" },
                    { type: "gif", src: "images/ncd_1.gif" },
                    { type: "gif", src: "images/ncd_2.gif" }
                ]
            }
        },
        {
            src: "images/covers/Osito.jpg",
            title: "iPlayMe2",
            details: {
                summary: "Resumen de proyecto.",
                media: [
                    { type: "video", src: "https://www.youtube.com/embed/WYvxJKHu1EE?si=tTFkuMxJitQ6m4Xh" },
                ]
            }
        },
        {
            src: "images/covers/QUICKCHARGE.jpg",
            title: "QUICKCHARGE",
            details: {
                summary: "Resumen de proyecto.",
                media: [
                    { type: "video", src: "https://www.youtube.com/embed/mDnFu3_8k50?si=e-DYq1yXa7bVBRA7" }
                ]
            }
        },
        {
            src: "images/covers/reel.gif",
            title: "Reel 2023",
            details: {
                summary: "Resumen de proyecto. Falta video en yt.",
                media: [
                    { type: "video", src: "https://www.youtube.com/embed/animationReelVideoID" }
                ]
            }
        },
        {
            src: "images/covers/Shelton.jpg",
            title: "Shelton Nar Nahb",
            details: {
                summary: "Resumen de proyecto.",
                media: [
                    { type: "video", src: "https://www.youtube.com/embed/vVy80-rsOQk?si=I9ovF0gQ3y_JykZi" }
                ]
            }
        },
        {
            src: "images/covers/sitetracker.jpg",
            title: "Sitetracker",
            details: {
                summary: "Resumen de proyecto.",
                media: [
                    { type: "video", src: "https://www.youtube.com/embed/i51G3OJIif8?si=-INx_G1ucOJ5xrYW" },
                ]
            }
        },
        {
            src: "images/covers/caveman.gif",
            title: "The Caveman",
            details: {
                summary: "Resumen de proyecto. Falta video en yt.",
                media: [
                    { type: "video", src: "https://www.youtube.com/embed/comedyAnimationVideoID" },
                    { type: "img", src: "images/caveman_1.jpeg" },
                    { type: "img", src: "images/caveman_2.jpeg" },
                    { type: "img", src: "images/caveman_3.jpeg" },
                    { type: "img", src: "images/caveman_4.jpeg" }
                ]
            }
        },
        {
            src: "images/covers/SYLR.png",
            title: "Title 15",
            details: {
                summary: "Resumen de proyecto.",
                media: [
                    { type: "video", src: "https://www.youtube.com/embed/zCd0HCtVo60?si=OmmqBF5hC8xtPzzn" },
                ]
            }
        }
    ];

    const imageGrid = document.getElementById("image-grid");
    const detailView = document.getElementById("detail-view");
    const infoColumn = document.getElementById("info-column");
    const contentColumn = document.getElementById("content-column");

    projects.forEach((project, index) => {
        const imageItem = document.createElement("div");
        imageItem.classList.add("image-item");

        const imgElement = document.createElement("img");
        imgElement.src = project.src;
        imgElement.alt = project.title;

        const titleElement = document.createElement("div");
        titleElement.classList.add("image-title");
        titleElement.textContent = project.title;

        const viewElement = document.createElement("div");
        viewElement.classList.add("image-view");
        viewElement.textContent = "<< view >>";

        imageItem.appendChild(imgElement);
        imageItem.appendChild(titleElement);
        imageItem.appendChild(viewElement);

        imageItem.addEventListener("click", () => {
            showDetails(project, index);
        });

        imageGrid.appendChild(imageItem);
    });

    function smoothScrollToTop(duration) {
        const start = window.scrollY;
        const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    
        const documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        const destinationOffset = 0;
        const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);
    
        if ('requestAnimationFrame' in window === false) {
            window.scroll(0, destinationOffsetToScroll);
            return;
        }
    
        function scroll() {
            const now = 'now' in window.performance ? performance.now() : new Date().getTime();
            const time = Math.min(1, ((now - startTime) / duration));
            const timeFunction = time * (2 - time);
            window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));
    
            if (window.scrollY === destinationOffsetToScroll) {
                return;
            }
    
            requestAnimationFrame(scroll);
        }
    
        scroll();
    }
    
    function showDetails(project, index) {
        infoColumn.innerHTML = `<h2>${project.title}</h2><p>${project.details.summary}</p>`;
        
        contentColumn.innerHTML = '';
        project.details.media.forEach(mediaItem => {
            const wrapper = document.createElement("div");
            wrapper.classList.add("media-wrapper");
    
            if (mediaItem.type === "img") {
                const imgElement = document.createElement("img");
                imgElement.src = mediaItem.src;
                wrapper.appendChild(imgElement);
            } else if (mediaItem.type === "video") {
                const iframeElement = document.createElement("iframe");
                iframeElement.src = mediaItem.src;
                iframeElement.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
                iframeElement.allowFullscreen = true;
                wrapper.appendChild(iframeElement);
            }
    
            contentColumn.appendChild(wrapper);
        });
        
        detailView.classList.add("visible");
        smoothScrollToTop(1000);
    }
    
    
    
});
