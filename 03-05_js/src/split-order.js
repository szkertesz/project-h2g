export const splitOrder = (array) => {
    if (!array) {
        return -1
    }
    const oddsArr = []
    const evensArr = []
    array.forEach(element => {
        element % 2 === 0 ? evensArr.push(element) : oddsArr.push(element)
    });
    oddsArr.sort((a, b) => a - b)
    evensArr.sort((a, b) => b - a)
    return oddsArr.concat(evensArr)
}

// console.log(splitOrder([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // [1, 3, 5, 7, 9, 8, 6, 4, 2, 0]
// console.log(splitOrder([1, 4, 3, 2, 5, 6, 7, 8, 9, 0])); // [1, 3, 5, 7, 9, 8, 6, 4, 2, 0]
// console.log(splitOrder([3, 8, 1, 2, 7, 6, 5, 4, 9, 0])); // [1, 3, 5, 7, 9, 8, 6, 4, 2, 0]