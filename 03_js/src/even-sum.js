export const evenSum = (array) => {
    if (!array) {
        return -1
    }
    if (!Array.isArray(array)) {
        return -1
    }
    const flatArr = array.flat(Infinity)
    return flatArr.reduce((sum, current) => {
        return current % 2 === 0 ? sum + current : sum
    }, 0)
}

// console.log(evenSum([1, [2, 3], [[4], 5]])); // 6
// console.log(evenSum([1, [1, 1], [[1], 1]])); // 0