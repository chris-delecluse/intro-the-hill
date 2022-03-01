// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        let number = document.getElementById("numbers").value;
        let sortedNumber = [];

        sortedNumber = number.split(" ");

        for (let i = 0; i < sortedNumber.length; i++) {
            sortedNumber[i] = parseInt(sortedNumber[i]);
        }

        sortedNumber.sort((a, b) => a - b);

        alert(sortedNumber);
    });    
})();