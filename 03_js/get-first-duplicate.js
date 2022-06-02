const getFirstDuplicate = text => {
    // solution #1
    const countOccurence = (char) => {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#using_indexof_to_count_occurrences_of_a_letter_in_a_string
        let count = 0;
        let position = text.indexOf(char);
        while (position !== -1) {
            count++;
            position = text.indexOf(char, position + 1);
        }
        return count;
    }
    let length = text.length
    for (let index = 0; index < length; index++) {
        if (countOccurence(text[index]) === 2) {
            return text[index];
        }
    }
    return ''
}

console.log(getFirstDuplicate('abccb')); // 'b'
console.log(getFirstDuplicate('aabccb')); // 'a'
console.log(getFirstDuplicate('abcdefghijklmnoj')); // 'j'
console.log(getFirstDuplicate('abc')); // ''