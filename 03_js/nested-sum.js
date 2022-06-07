const nestedSum = (array) => {
    return array.reduce((sum, current) => {
        return Array.isArray(current) ?
            sum + nestedSum(current) :
            typeof current === 'number' && isFinite(current) ?
                sum + current : sum
    }, 0);
}
console.log(nestedSum([1, [2, [[[3]]]], [4, 5], 100])); // 115
console.log(nestedSum([1, [2, [3], [4, '5', null, undefined, [NaN, Infinity], [true, false], { id: '1' }, 5]]])); // 15