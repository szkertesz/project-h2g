export const evenSum = (array) => {
    if (!array) {
        return 0
    }
    if (!Array.isArray(array)) {
        return 0
    }
    const flatArr = array.flat(Infinity)
    return flatArr.reduce((sum, current) => {
        return current % 2 === 0 ? sum + current : sum
    }, 0)
}

export const evenSum2 = (array) => {
    if (!array) {
        return 0
    }
    if (!Array.isArray(array)) {
        return 0
    }
    return array.reduce((sum, current) => {
        return Array.isArray(current) ?
            sum + evenSum2(current) :
            current % 2 === 0 ?
                sum + current : sum
    }, 0)
}

// console.log(evenSum([1, [2, 3], [[4], 5]])); // 6
// console.log(evenSum([1, [1, 1], [[1], 1]])); // 0
// console.log(evenSum2([1, [2, 3], [[4], 5]])); // 6
// console.log(evenSum2([1, [1, 1], [[1], 1]])); // 0