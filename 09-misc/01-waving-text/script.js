// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    const randFonts = (array) => {
        let rand = Math.floor(Math.random() * array.length);

        return array[rand];
    }

    const element = document.getElementById("target");
    const paragraph = document.getElementById("target").innerHTML.split("");
    const fonts = ["0.8em", "1.1em", "1.3em", "1.5em", "1.7em"];

    element.innerHTML = "";

    paragraph.forEach(el => {
        let span = document.createElement("span");
        span.innerHTML = el;
        span.style.fontSize = randFonts(fonts);
        element.appendChild(span)
    })

})();