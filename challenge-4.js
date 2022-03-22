function listSorting(needle, haystack) {
    let lastIndex=null
    for (let index = 0; index < haystack.length; index++) {
        if(haystack[index] === needle){
            lastIndex = index
        }
        else if(!(typeof(haystack[index]) === "number") && haystack[index].includes(needle)){
            lastIndex = [index, haystack[index].indexOf(needle)]
        }
    }

    return lastIndex ? lastIndex : -1
}

const testArr = [1,2,3,4,5,6,60,80,6]
const testNeedle= 6

console.log(listSorting(testNeedle,testArr))

module.exports = listSorting
