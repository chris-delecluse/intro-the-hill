// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    const slider = document.getElementById("slider");
    const target = document.getElementById("target");
    let number = 0;

    slider.addEventListener("change", () => {
        number =+ slider.value;
        
        target.innerHTML = "0" + number;
    })

})();