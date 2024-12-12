console.log("11.Obiekty")

class car {
    constructor(age, mileage, startingPrice, endPrice) {
        this.age = age;
        this.mileage = mileage;
        this.startingPrice = startingPrice;
        this.endPrice = endPrice;
    }

    increasePrice() {
        this.startingPrice += 1000;
        this.endPrice = this.startingPrice;
        for (let i = 1; i <= this.age; i++) {
            this.endPrice -= 1000;
        }
        let j = this.mileage / 100000;
        for (let i = 1; i <= j; i++) {
            this.endPrice -= 10000;
        }
    }

    increaseStartingPrice() {
        this.endPrice = this.startingPrice;
        this.startingPrice += 1000;
    }

    decreasePriceByAge() {
        for (let i = 1; i <= this.age; i++) {
            this.endPrice -= 1000;
        }
    }

    decreasePriceByMilage() {
        let j = this.mileage / 100000;
        for (let i = 1; i <= j; i++) {
            this.endPrice -= 10000;
        }
    }

    putAgeAndMileage() {
        auto.age = 5;
        auto.mileage = 200000;
    }


}

var tab = [
    new car(14, 300000, 50000,)
]

function adIfBigger() {
    if (auto.endPrice >= 10000) {
        tab.push(auto)
    }
}

function adAgeForEach() {
    tab.forEach(car => car.age += 1)
}

function increasePriceForTab() {
    tab.forEach(car => car.increasePrice());
}


auto = new car();
auto.startingPrice = 60000;
auto.endPrice = auto.startingPrice;


auto.putAgeAndMileage();
auto.increasePrice();
adIfBigger();
console.log(auto);
adAgeForEach()
increasePriceForTab();
console.log(tab)

console.log("12.Student")

class Ocena {
    constructor(subject, grade) {
        this.subject = subject;
        this.grade = grade;
    }
}

class Student {
    constructor(name, lastName, averageGrade, grades) {
        this.name = name;
        this.lastName = lastName;
        this.averageGrade = 0;
        this.grades = [];
    }

    hello() {
        console.log(`Hello, ${this.name} ${this.lastName}\nYour grades:\n${this.oceny}\nYour average grade is: ${this.averageGrade}`);
    }

    x= 0
    set addGrade(x) {
        if(x instanceof Ocena) {
            this.grades.push(x);
            this.calculateAverageGrade()
        }
    }

    get oceny(){
        let result = ''
        for(let grade of this.grades) {
            result += `${grade.subject} - ${grade.grade}\n`;
        }
        return result;
    }

    calculateAverageGrade() {
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i].grade;
        }
        sum /= this.grades.length;
        student.averageGrade = sum;
    }
}

student = new Student("Tomasz","Nowak");
student.addGrade = new Ocena("Math",2)
student.addGrade = new Ocena("Biology",5)
student.hello()
console.log(student.oceny)