export const arraySum = (array) => {
    if (!Array.isArray(array)) {
        return 0
    }
    return array.reduce((sum, current) => {
        return typeof current === 'number' && isFinite(current) ?
        sum + current : sum
    }, 0)
}

// console.log(arraySum([1, 2, 3, 4, 5])); // 15
// console.log(arraySum([1, 2, 3, 4, '5', null, undefined, NaN, Infinity, true, false, { id: '1' }, 5])); // 15