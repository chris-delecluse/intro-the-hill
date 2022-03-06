// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    const input = document.getElementById("pass-one");
    const counter = document.getElementById("counter");
    
    input.setAttribute("maxlength", 10);

    input.addEventListener("input", (e) => {
        let currLength = e.target.value.length;

        counter.innerHTML = currLength + "/10";
    });

})();
