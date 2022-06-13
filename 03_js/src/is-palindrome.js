export const isPalindrome = (text) => {
    if (typeof text !== 'string') {
        return -1
    }
    // solution #1
    // const clearText = text.replace(/\s+/g, '');
    // if (!clearText) {
    //     return false;
    // }
    // const reversedText = clearText.split('').reverse().join('');
    // return reversedText === clearText ? true : false;

    // solution #1 refactored
    const clearText = text.replace(/\s+/g, '');
    return clearText && clearText === clearText.split('').reverse().join('') ? true : false;
}

// console.log(isPalindrome('')); // false
// console.log(isPalindrome('     ')); // false
// console.log(isPalindrome('anna')); // true
// console.log(isPalindrome('anna    ')); // true
// console.log(isPalindrome('indul a gorog aludni')); // true
// console.log(isPalindrome('alma')); // false