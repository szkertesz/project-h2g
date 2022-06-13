export const getConvertedUUIDBlocks = uuid => {
    const clearUuidArr = Array.from(uuid.replace(/\-/g, ''));
    return Array.from({ length: clearUuidArr.length / 2 }, (v, i) => parseInt([clearUuidArr[2 * i], clearUuidArr[2 * i + 1]].join(''), 16))
}
// console.log(getConvertedUUIDBlocks('f782f011-636a-4d8b-9f63-dc34a4503c01')); // [247, 130, 240, 17, 99, 106, 77, 139, 159, 99, 220, 52, 164, 80, 60, 1]