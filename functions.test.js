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



test('analyze length 0 array', () => {
    expect(analyzeArray([])).toEqual({average: undefined, min: undefined, max: undefined, length: 0});
});

test('analyze length 1 array', () => {
    expect(analyzeArray([5])).toEqual({average: 5, min: 5, max: 5, length: 1});
});

test('analyze length 5 array of positive integers', () => {
    expect(analyzeArray([1,2,3,4,5])).toEqual({average: 3, min: 1, max: 5, length: 5});
});

test('avergage of length 5 array of negative numbers and doubles', () => {
    expect(analyzeArray([-5.2,32.3,55.2,-44.1,0]).average).toBeCloseTo(7.64);
});

test('max of length 5 array of negative numbers and doubles', () => {
    expect(analyzeArray([-5.2,32.3,55.2,-44.1,0]).max).toBe(55.2);
});

test('min of length 5 array of negative numbers and doubles', () => {
    expect(analyzeArray([-5.2,32.3,55.2,-44.1,0]).min).toBe(-44.1);
});


test('expect to throw an error if not an array', () => {
    expect(() => analyzeArray("dfgsdfg")).toThrow();
});


test('z + 1 to equal a', () => {
    expect(ceasarCipher("z", 1)).toEqual("a");
});

test('capitalization', () => {
    expect(ceasarCipher("A", 1)).toEqual("B");
});

test('word', () => {
    expect(ceasarCipher("Hello", 3)).toEqual("Khoor");
});

test('including non letters', () => {
    expect(ceasarCipher("H7j3", 27)).toEqual("I7k3");
});

