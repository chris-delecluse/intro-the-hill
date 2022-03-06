// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    let owned = document.getElementsByClassName("target");

    for (let i = 0; i < owned.length; i++) {
        owned[i].innerHTML = "owned";
    }
    
})();
