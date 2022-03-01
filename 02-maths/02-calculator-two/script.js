
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        let a = parseInt(document.getElementById("op-one").value);
        let b = parseInt(document.getElementById("op-two").value);

        switch (operation) {
            case 'addition' :
                alert(a + b);
                break;
            case 'substraction' :
                alert(a - b);
                break;
            case 'multiplication' :
                alert(a * b);
                break;
            case 'division' :
                alert(a / b);
                break;
            default :
                alert("Error");
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();