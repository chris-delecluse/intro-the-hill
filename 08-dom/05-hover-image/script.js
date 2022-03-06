// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {
    
    document.getElementsByTagName("img")[0].id = "image";
    let defaultData = document.getElementById("image").getAttribute('src');
    let data = document.getElementById("image").getAttribute('data-hover');

    document.getElementsByTagName("img")[0].addEventListener("mouseover", () => {
        document.getElementsByTagName("img")[0].setAttribute('src', data);
    })

    document.getElementsByTagName("img")[0].addEventListener("mouseout", () => {
        document.getElementsByTagName("img")[0].setAttribute('src', defaultData);
    })
})();
