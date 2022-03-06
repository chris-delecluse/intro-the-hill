// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    
    class Cat extends Animal {
         constructor (name) {
            super (name)
            this.name = name;
        }

        static greeting = "Miaaouuu";
    }

    class Dog extends Cat {
        constructor(name) {
            super(name)
            this.name = name;
        }

        static greeting = "Wuuuuuuf";
    }

    document.getElementById("run").addEventListener("click", () => {
        let cat = new Cat("Miaouu", "Speedy");
        let dog = new Dog("Athena");
    
        let a = cat.constructor.greeting;
        let b = dog.constructor.greeting;
    
        console.log(cat.sayHello(a));
        console.log(dog.sayHello(b));
    })
})();
