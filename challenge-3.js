function binaryReversal(value) {
    let numValue = Number(value)
    let binary = ""
    while (numValue >= 1) {
        binary = String(numValue % 2) + binary
        numValue = Math.floor(numValue/2)
    }
    const padBinary =("0".repeat((8 * Math.ceil(binary.length / 8)-binary.length))) +binary
    let reverseDigit = 0
    for (let index = 0; index < padBinary.length; index++) {
        reverseDigit += Number(padBinary[index]) * (2**index)  
    }
    return reverseDigit
}

console.log(binaryReversal("47"))

module.exports = binaryReversal
