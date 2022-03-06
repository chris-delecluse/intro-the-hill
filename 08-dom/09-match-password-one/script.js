// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    document.getElementById("run").addEventListener("click", () => {

        let passOne = document.getElementById("pass-one");
        let passTwo = document.getElementById("pass-two");
    
        if (passTwo.value != passOne.value) {
            passTwo.style.borderColor = "red"
        } else if (passTwo.value === '') {
            passTwo.style.borderColor = "red"
        } else {
            passTwo.style.borderColor = "green"
        }

    });


})();
