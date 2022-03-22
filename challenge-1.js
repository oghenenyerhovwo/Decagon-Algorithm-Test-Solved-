let number = 0
const calValue = (roman, index, letter, value, first = null,second = null ) => {
    if(roman[index] === letter){
        if(roman[index + 1] && (roman[index + 1] === first || roman[index + 1] === second ) ){
            number -= value
        } else{
            number += value
        }
    }

}

function romanToDecimal(roman) {
    for (let index = roman.length - 1; index >= 0; index--) {
        calValue(roman, index, "I", 1, first = "V",second = "X" )
        calValue(roman, index, "V", 5,)
        calValue(roman, index, "X", 10, first = "L",second = "C" )
        calValue(roman, index, "L", 50,)
        calValue(roman, index, "C", 100, first = "D",second = "M" )
        calValue(roman, index, "D", 500,)
        calValue(roman, index, "M", 1000)
        
    }

    return number
}

module.exports = romanToDecimal
