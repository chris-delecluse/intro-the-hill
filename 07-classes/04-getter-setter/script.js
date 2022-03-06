// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {

    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        getter() {
            return this.firstname + ' ' + this.lastname;
        }

        setter() {
            return this.getter().split(' ');
        }

    }

    document.getElementById("run").addEventListener("click", () => {
        let ppl = new Person("Chuck", "Norris");

        console.log(ppl.getter());

        ppl.firstname = "Harry";
        ppl.lastname = "Potter"
    
        console.log(ppl.getter());
    })



})();
