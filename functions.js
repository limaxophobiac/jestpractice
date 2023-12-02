function capitilize(text){
    return text.length > 0 ? text[0].toUpperCase() + text.slice(1) : ""
}

function reverseString(text){
    return text.split("").reverse().join("")
}

const calculator = {
    add: (x, y) => x+y,
    subtract:  (x, y) => x-y,
    divide: (x, y) => x/y,
    multiply: (x, y) => x*y
}

function ceasarCipher(text, factor){
    return ""
}

function analyzeArray(array){
    return {average: 1, min: 1, max: 1, length: 1}
}

export {
    capitilize,
    reverseString,
    calculator,
    ceasarCipher,
    analyzeArray
}