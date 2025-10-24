const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dolares", function () {
    const { fromEuroToDollar } = require('./app.js');
    const dolares = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be approximately 146.26 yenes", function () {
    const { fromDollarToYen } = require('./app.js');
    const yenes = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(yenes).toBeCloseTo(expected, 2);
});

test("One yen should be approximately 0.00578 libras", function () {
    const { fromYenToPound } = require('./app.js');
    const libras = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expected, 5);
});

