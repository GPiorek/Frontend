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

fibonacci(100)

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


console.log("7.Funkcja licząca pole figury")

function poleFigury(typ, ...wymiary) {
    let wynik;
    switch (typ) {
        case 'prostokąt':
            wynik = poleProstokata(wymiary[0], wymiary[1]);
            break;
        case 'trapez':
            wynik = poleTrapezu(wymiary[0], wymiary[1], wymiary[2]);
            break;
        case 'równoległobok':
            wynik = poleRownolegloboku(wymiary[0], wymiary[1]);
            break;
        case 'trójkąt':
            wynik = poleTrojkata(wymiary[0], wymiary[1]);
            break;
        default:
            wynik = 'Nieznany typ figury';
    }
    return wynik;
}

function poleProstokata(a, b) {
    return a * b;
}

function poleTrapezu(a, b, h) {
    return ((a + b) * h) / 2;
}

function poleRownolegloboku(a, h) {
    return a * h;
}

function poleTrojkata(a, h) {
    return (a * h) / 2;
}

let wynikProstokata = poleFigury('prostokąt', 5, 10);
console.log(wynikProstokata); 


console.log("8.Pole figur bez if itd..")
let figura;
function polaFigur(figura, a, b, h) {
    let powPola = {
        "prostokat": (a, b) => a * b,
        "trapez": (a, b, h) => ((a + b) * h) / 2,
        "rownoleglobok": (a, h) => a * h,
        "trojkat": (a, h) => (a * h) / 2
    };
 
    return powPola[figura](a, b, h);
}
console.log(polaFigur("trojkat",2,4,5))

console.log("9.Trójkąt Pascala")

function pascalTriangle(wysokosc) {
    let trojkat = [[1]];
    for (let i = 1; i < wysokosc; i++) {
        let wiersz = [1];
        for (let j = 1; j < i; j++) {
            wiersz[j] = trojkat[i - 1][j - 1] + trojkat[i - 1][j];
        }
        wiersz.push(1);
        trojkat.push(wiersz);
    }
    trojkat.forEach(wiersz => console.log(wiersz.join(' ')));
}

let wysokosc = pascalTriangle(10);

console.log("10.Cenzura")

function cenzura(niedozwoloneSlowa, zdanie) {
    let wynik = '';
    let slowo = '';
    
    for (let i = 0; i <= zdanie.length; i++) {
        let znak = zdanie[i] || ' '; 
        if (znak === ' ' || i === zdanie.length) {
            let czyCenzurowac = false;
            
            
            for (let j = 0; j < niedozwoloneSlowa.length; j++) {
                if (slowo === niedozwoloneSlowa[j]) {
                    czyCenzurowac = true;
                    break;
                }
            }

            
            if (czyCenzurowac) {
                for (let k = 0; k < slowo.length; k++) {
                    wynik += '*';
                }
            } else {
                wynik += slowo;
            }

            wynik += znak; 
            slowo = ''; 
        } else {
            slowo += znak; 
        }
    }
    
    return wynik.trim();
}

let zdanie = "Ala ma kota i psa";
let niedozwolone = ['Ala', 'kota'];
let wynikCenzury = cenzura(niedozwolone, zdanie);
console.log(wynikCenzury); 


