
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Keller programmer');


    let userAge;
    let userGender;
    let userCity;
    
    let userConfirm;

    while (userConfirm != "yes") {
        userAge = prompt("What is your age ?");
        userGender = prompt("What is your gender ?");
        userCity = prompt("Where you from ?");

        alert("Your data : \n" + "Age : " + userAge + "\n" + "Gender : " + userGender + "\n" + "City :" + userCity + "\n");

        userConfirm = prompt("Enter 'yes' if the informartion is correct : ");
    }
})();
