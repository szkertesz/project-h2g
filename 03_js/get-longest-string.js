const getLongestString = array => {
    // solution #1
    let currentLongest = '';
    for (const item of array) {
        typeof item === 'string' && item.length > currentLongest ? currentLongest = item : currentLongest = currentLongest
    }
    return currentLongest;
}

console.log(getLongestString([[1, 2, 3, 4, 5], 'alma'])); // 'alma'
console.log(getLongestString(['abc', 'a', 'ab'])); // 'abc'
console.log(getLongestString([1, 2, 3])); // ''