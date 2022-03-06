// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    let i = 0;

    document.getElementsByTagName("img")[0].id = "image";
    let data = document.getElementById("image");

    document.getElementById("next").addEventListener("click", () => {
        data.setAttribute('src', gallery[i]);
        i++;
        if (i === gallery.length) {
            i = 0;
        }
    });
})();
