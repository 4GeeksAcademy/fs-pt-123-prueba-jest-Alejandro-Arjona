let valorEuro = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};

const fromEuroToDollar = function (valorEnEuro) {
    let valorEnDolares = valorEnEuro * 1.07;
    return valorEnDolares;
}

const fromDollarToYen = function (valorEnDolares) {
    let valorEnEuro = valorEnDolares / valorEuro.USD;
    let valorEnYen = valorEnEuro * valorEuro.JPY;
    return valorEnYen;
};

const fromYenToPound = function (valorEnYen) {
    let valorEnEuro = valorEnYen / valorEuro.JPY;
    let valorEnLibras = valorEnEuro * valorEuro.GBP;
    return valorEnLibras;
};

console.log("Hello World")
const sum = (a, b) => {
    return a + b
}

console.log(sum(7, 3))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };