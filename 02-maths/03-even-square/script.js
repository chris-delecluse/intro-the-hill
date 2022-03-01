
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {
    document.getElementById("run").addEventListener("click", () => {
        sqrtNumber = 1;

        for (let i = 0; sqrtNumber < 21; i++) {

            sqrtNumber = i * i;
            if (sqrtNumber < 21) {
                alert(sqrtNumber);
            } else {
                return 0;
            }
        }
    });
})();