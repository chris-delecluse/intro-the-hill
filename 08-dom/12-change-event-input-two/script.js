// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    const validity = document.getElementById("validity");
    const input = document.getElementById("pass-one");
    
    input.addEventListener("input", (e) => {
        let currValue = e.target.value;
        let regex = "^(?=.*?\\d.*\\d)[a-zA-Z0-9]{8,}$";

        if (!currValue.match(regex)) {
            validity.innerHTML = "Not ok";
            input.style.backgroundColor = "#F5172040";
        } else {
            validity.innerHTML = "Ok";
            input.style.backgroundColor = "#81B62240";
        }
    });
})();
