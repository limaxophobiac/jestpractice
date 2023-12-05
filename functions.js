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

function ceasarCipher(message, key){
    const alphabetArray = ['a', 'b', 'c', 'd', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let encrypted = '';
    for (let i = 0; i < message.length; i++){
        if (alphabetArray.includes(message.charAt(i).toLowerCase())){
            if (message.charAt(i).toLowerCase() === message.charAt(i))
                encrypted += alphabetArray[(alphabetArray.indexOf(message.charAt(i).toLowerCase()) + key)%26];
            else encrypted += alphabetArray[(alphabetArray.indexOf(message.charAt(i).toLowerCase()) + key)%26].toUpperCase();
        }
        else encrypted += message.charAt(i);
    }
    return encrypted;
  };

function analyzeArray(array){
    if (!Array.isArray(array)) throw new Error("Not an array");
    if (array.length == 0) return {average: undefined, min: undefined, max: undefined, length: 0}
    return {
        average: (array.reduce((sum, current) => sum + current)/array.length),
        min: array.reduce((oldMin, current) => oldMin > current ? current : oldMin),
        max: array.reduce((oldMax, current) => oldMax < current ? current : oldMax),
        length: array.length
    }
}

export {
    capitilize,
    reverseString,
    calculator,
    ceasarCipher,
    analyzeArray
}