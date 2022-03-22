function transpose(arr) {
    if((arr.length >= 1 && arr.length <= 10) && (arr[0].length >= 1 && arr[0].length <= 10)){
        const transposeArr = []
        for (let n = 0; n < arr[0].length; n++){
            const row = []
            for (let m = 0; m< arr.length; m++){
                row.push(arr[m][n])
            }
            transposeArr.push(row)
        }
        return transposeArr
    }
}

const test= [
      [5, 13, 9],
      [12, 4, 6],
      [17, 8, 3],
      [9, 14, 7],
      [3, 1, 21],
    ];

console.log(transpose(test))

module.exports = transpose
