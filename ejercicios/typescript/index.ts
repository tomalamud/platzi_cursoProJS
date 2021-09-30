// DOC: https://www.typescriptlang.org/docs/handbook/basic-types.html

// Boolean
let muted = true;
// más explícito
let muted2: boolean = true;

// Números
let numerador: number = 46;
let denominador: number = 3;
let resultado = numerador / denominador;

// String
let nombre: string = "Tomi";

// Arreglos
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raúl'];
// people.push(2);

let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push('Juan');
peopleAndNumbers.push(23);

// Enum (Sólo podrá ser uno de los siguientes tipos)
enum Color {
    Rojo,
    Verde,
    Azul,
}

enum ColorTipado {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es ${colorFavorito}`);

let colorPredilecto: ColorTipado = ColorTipado.Verde;
console.log(`Mi color predilecto es ${colorPredilecto}`);

// Any
let comodin: any = 2 + " lol " + true; 
comodin = { type: 'Wildcard' };

// Object
let someObject: object = { type: 'A wonderful object', phrase: "let's take an objective look at my object..." };


// funciones
function add(a: number, b: number): number {
    return a + b;
};

const sum = add(4, 6);

function createAdder(a: number): (number) => number {
    return function (b: number) {
        return a + b;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);
console.log(fourPlus6);

function fullName(firstName: string, lastName: string = 'Smith'): string {
    return `${firstName} ${lastName}`;
};

const myName = fullName('Tomás', 'Elizondo');
console.log(myName)

// interfaces --> contratos de como deben ser los objetos.
enum Color {
    Rojo2 = 'Rojo',
    Verde2 = 'Verde'
}

interface Rectangulo {
    alto: number,
    ancho: number,
    color: Color,
};

let rec: Rectangulo = {
    alto: 4,
    ancho: 6,
    color: Color.Rojo2,
};

function area(r: Rectangulo) {
    return r.alto * r.ancho;
}

const areaRect = area(rec);
console.log(areaRect);


rec.toString = function() {
    return `Un rectángulo ${this.color}`
}


console.log(rec.toString());