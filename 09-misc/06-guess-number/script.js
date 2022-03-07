// 09-misc/06-guess-number/script.js - 9.6: guess the number
(() => {

    const randNumber = () => {
        return Math.floor(Math.random() * 100)
    }

    const mysteryNumber = randNumber();
    let guess = 0;

    do {
        input = parseInt(prompt(`Enter a number to guess : `));

        guess++;  
        
        if (input < mysteryNumber) {
            alert(`Its too low !`);
        } else if (input > mysteryNumber && input <= 100) {
            alert(`Its too high !`);
        } else if (input === mysteryNumber) {
            alert(`That's it ! you needed ${guess} guesses :)`);
        } else {
            alert(`You are out of number`);
        }

    } while(input != mysteryNumber)
})();