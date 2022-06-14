export const getLongestString = array => {
    if (array.length < 1) {
        return -1
    }
    // solution #1
    // let currentLongest = '';
    // for (const item of array) {
    //     typeof item === 'string' && item.length > currentLongest ? currentLongest = item : currentLongest = currentLongest
    // }
    // return currentLongest;

    // solution #2
    return array.reduce((longest, current) => {
        if (typeof current === 'string' && current.length > longest.length) {
            longest = current
        }
        return longest
    }, '')
}

// console.log(getLongestString([[1, 2, 3, 4, 5], 'alma'])); // 'alma'
// console.log(getLongestString(['abc', 'a', 'ab'])); // 'abc'
// console.log(getLongestString([1, 2, 3])); // ''