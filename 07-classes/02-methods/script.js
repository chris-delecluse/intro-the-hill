//07-classes/02-methods/script.js - 7.2: methods


(() => {
    class Person {
        constructor(firstmame, lastname) {
            this.firstmame = firstmame;
            this.lastname = lastname;
        }

        sayHello() {
            console.log("Hello, " + this.firstmame + " " + this.lastname + " !");
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        let a = prompt("Enter your firstname, please : ");
        let b = prompt("Enter your lastname, please : ");

        let hello = new Person(a, b);
        
        hello.sayHello();
    });

})();
