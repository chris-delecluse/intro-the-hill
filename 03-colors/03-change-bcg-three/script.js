
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    document.getElementById("run").addEventListener("click", () => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);

        document.body.style.backgroundColor = "#" + randomColor;
    });

})();
