
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        let input = parseInt(document.getElementById("number").value);
        
        for (let i = input - 1; i >= 1; i--) {
            input *= i;
        }

        alert(input);
    });

})();
