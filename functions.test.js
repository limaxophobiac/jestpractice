import {
    capitilize,
    reverseString,
    calculator,
    ceasarCipher,
    analyzeArray
} from './functions'


test('capitalize single letter', () => {
    expect(capitilize("a")).toBe("A")
});

test('capitalize empty string', () => {
    expect(capitilize("")).toBe("")
});

test('capitilize sentence with whitespace', () => {
    expect(capitilize("test number\n three")).toBe("Test number\n three")
});

test('capitalize doesnt alter numerical characters', () => {
    expect(capitilize("555")).toBe("555")
});

test('reverse single letter no change', () => {
    expect(reverseString("a")).toBe("a")
});

test('reverse sentence', () => {
    expect(reverseString("Testing sentence reversal")).toBe("lasrever ecnetnes gnitseT")
});

test('reverse empty string is empty string', () => {
    expect(reverseString("")).toBe("")
});

test('calculator adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1,2)).toBe(3);
});

test('calculator adds negative number', () => {
    expect(calculator.add(-24,-25)).toBe(-49);
});

test('calculator adds int and double', () => {
    expect(calculator.add(2,-23.4)).toBe(-21.4);
});

test('calculator subtracts 1 - 2 to equal -1', () => {
    expect(calculator.subtract(1,2)).toBe(-1);
});

test('calculator subtracts negative number', () => {
    expect(calculator.subtract(-14,-25)).toBe(11);
});

test('calculator subtracts int and double', () => {
    expect(calculator.subtract(3,-13.7)).toBe(16.7);
});

test('calculator divides 1/2 to equal 0.5', () => {
    expect(calculator.divide(1,2)).toBe(0.5);
});

test('calculator divides by negative number', () => {
    expect(calculator.divide(10,-5)).toBe(-2);
});

test('calculator divides int with double', () => {
    expect(calculator.divide(4, 2.5)).toBe(1.6);
});

test('calculator multiplies 1 * 2 to equal 2', () => {
    expect(calculator.multiply(1,2)).toBe(2);
});

test('calculator multiplies by negative number', () => {
    expect(calculator.multiply(7,-3)).toBe(-21);
});

test('calculator multiplies int with double', () => {
    expect(calculator.multiply(7, 3.6)).toBe(25.2);
});