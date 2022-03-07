// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {
    
    const btnOne = document.getElementById("part-one");
    const btnTwo = document.getElementById("part-two");
    const btnThree = document.getElementById("part-three");
    const btnFour = document.getElementById("part-four");
    
    let number = 460;
    let number2 = 0;
    let number3 = 0;
    let number4 = 0;

    btnOne.addEventListener("click", () => {
        if(btnOne.innerHTML <= 460) {
            number = 460;
        } else if (btnOne.innerHTML >= 499) {
            number = 460;
        }
        number++;

        btnOne.innerHTML = number;
        btnOne.value = number;

        show();
    })
    
    btnTwo.addEventListener("click", () => {
       if (btnTwo.innerHTML >= 99) {
            number2 = 0;
       }
       number2++;

       btnTwo.innerHTML = number2;
       btnTwo.value = number2;

       show();
    })

    btnThree.addEventListener("click", () => {
       if (btnThree.innerHTML >= 99) {
            number3 = 0;
       }
       number3++;

       btnThree.innerHTML = number3;
       btnThree.value = number3;

       show();
    })

    btnFour.addEventListener("click", () => {
        if (btnFour.value >= 99) {
             number4 = 0;
        }
        number4++;
 
        btnFour.innerHTML = number4;
        btnFour.value = number4;
        show();
     })

     const show = () => {
        let one = `${btnOne.value}`;
        let two = `${btnTwo.value}`;
        let three = `${btnThree.value}`;
        let four = `${btnFour.value}`;

        if (two <= 9) {
            two = `0${two}`;
        } 
        if (three <= 9) {
            three = `0${three}`;
        } 
        if (four <= 9) {
            four = `0${four}`;
        }

        document.getElementById("target").innerHTML = `0${one}${two}${three}${four}`;
     }
})();
