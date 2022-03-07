// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    document.getElementById("run").addEventListener("click", () => {

        let passOne = document.getElementById("pass-one");
        let passTwo = document.getElementById("pass-two");
    
        if (passTwo.value != passOne.value) {
            passTwo.classList.add("error")
        }
    });
})();