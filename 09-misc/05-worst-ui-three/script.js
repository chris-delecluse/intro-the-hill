// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {
    const loopOne = () => {
        inputOne.setAttribute('value', i);
        if (i >= 499) {
            i = 459;
        }
        i++;
        myTimeoutOne = setTimeout(loopOne, 400);
    }

    const loopTwo = () => {
        inputTwo.setAttribute('value', ii);
        if (ii <= 0) {
            ii = 100;
        }
        ii--;
        myTimeoutTwo = setTimeout(loopTwo, 600);
    }

    const loopThree = () => {
        inputThree.setAttribute('value', j);
        if (j >= 99) {
            j = 0;
        }
        j++;
        myTimeoutThree = setTimeout(loopThree, 400);
    }

    const loopFour = () => {
        inputFour.setAttribute('value', jj);
        if (jj < 0) {
            jj = 100;
        }
        jj--;
        myTimeoutFour = setTimeout(loopFour, 500);
    }

    const showResult = () => {
        let resultOne = `${inputOne.value}`;
        let resultTwo = `${inputTwo.value}`;
        let resultThree = `${inputThree.value}`;
        let resultFour  = `${inputFour.value}`;

        if (resultTwo <= 9) {
            resultTwo = `0${resultTwo}`;
        }
        if (resultThree <= 9) {
            resultThree = `0${resultThree}`;
        }
        if (resultFour <= 9) {
            resultFour = `0${resultFour}`;
        }

        target.innerHTML = `0${resultOne}${resultTwo}${resultThree}${resultFour}`;
    }
    
    const target = document.getElementById("target");
    
    const inputOne = document.getElementById("part-one");
    const inputTwo = document.getElementById("part-two");
    const inputThree = document.getElementById("part-three");
    const inputFour = document.getElementById("part-four");
    
    const btnOne = document.getElementById("fix-part-one");
    const btnTwo = document.getElementById("fix-part-two");
    const btnThree = document.getElementById("fix-part-three");
    const btnFour = document.getElementById("fix-part-four");
    
    let myTimeoutOne;
    let myTimeoutTwo;
    let myTimeoutThree;
    let myTimeoutFour;

    let i = 460;
    let ii = 99;
    let j = 0;
    let jj = 99;

    loopOne();
    loopTwo();
    loopThree();
    loopFour();
    
    btnOne.addEventListener("click", () => {
        clearTimeout(myTimeoutOne);
        
        showResult();
    })
    
    btnTwo.addEventListener("click", () => {
        clearTimeout(myTimeoutTwo);
        
        showResult();
    })

    btnThree.addEventListener("click", () => {
        clearTimeout(myTimeoutThree);

        showResult();
    })

    btnFour.addEventListener("click", () => {
        clearTimeout(myTimeoutFour);

        showResult();
    })
    
})();