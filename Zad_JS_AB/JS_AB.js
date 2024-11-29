console.log("1.Trójka Pitagorasa")

function isPitagoras() {
    let a;
    let b;
    let c;
    if (a * a + b * b == c * c) {
        console.log("Liczby są 'trójką pitagorasa'");
    } else {
        console.log("Liczby nie są 'trójką pitagorasa'");
    }
}

isPitagoras(3, 4, 5)


console.log("2.liczby z przedzialu a-b podzielne przez c")

function isDevided() {
    let a = 2;
    let b = 10;
    let c = 5;
    for (let i = a; i <= b; i++) {
        if (i % c === 0) {
            console.log(i)
        }
    }
}

isDevided()


//Zad 3 Tabliczka mnożenia
console.log("3.Tabliczka mnożenia")

function multiplicationTable(size) {
    for (let i = 1; i < size; i++) {
        let row = ''
        for (let j = 1; j < size; j++) {
            row += i * j + '\t';
        }
        console.log(row);
    }
}

multiplicationTable(5);

console.log("4.Ciąg fibonacciego")

function fibonacci(range) {
    let j = 1
    for (let i = 1; i <= range; i++) {
        console.log(i)
        j += i;
        i = j - i;
    }

}

fibonacci(21)

console.log("5.Choinka")

function christmasTree(size) {
    for (let i = 1; i <= size; i++) {
        let k = ' ';
        for (let j = 1; j <= i; j++) {
            k += '*';
        }
        console.log(k);

    }
}

christmasTree(5)

console.log("6.Choinka nocą")

function christmasTreeAtNight(height) {
        for (let i = 0; i < height; i++){
            let tree = ''
            for (let j = 0; j < height - i; j++) {
                tree += '*';
            }
            for (let k = 0; k < i*2; k++) {
                tree += " "
            }
            for (let l = 0; l < height - i; l++) {
                 tree += '*'
            }
            console.log(tree);
        }
}

christmasTreeAtNight(5)


console.log("Funkcja licząca pole figury")

function calculationArea() {
    let a =
    switch (size) {
        case 1(trapez):
    }
}