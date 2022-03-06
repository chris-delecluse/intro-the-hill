// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    let src = document.getElementById("source").dataset.image; // contient l'adresse de l'image.
    document.getElementById("source").remove(); // remove un element par son id.

    let img = document.createElement("img"); // création d'un tag img.
    img.setAttribute('src', src);

    let target = document.getElementById("target");
    target.appendChild(img); // ajoute la nouvelle balise créer comme enfant de l'element qui posede l'id 'target'.
})();