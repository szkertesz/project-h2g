export const getUUIDBlocks = uuid => {
    const clearUuidArr = Array.from(uuid.replace(/\-/g, ''));
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    // Array.from(arrayLike, (element, index) => { /* ... */ } )
    return Array.from({length: clearUuidArr.length / 2}, (v, i) => [clearUuidArr[2 * i], clearUuidArr[2 * i + 1]].join(''))
}

// console.log(getUUIDBlocks('f782f011-636a-4d8b-9f63-dc34a4503c01')); // ['f7', '82', 'f0', '11', '63', '6a', '4d', '8b', '9f', '63', 'dc', '34',' a4', '50', '3c', '01']