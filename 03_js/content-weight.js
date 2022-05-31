/**
 * @param {number} bottleWeight: The weight of the entire bottle and contents
 * @param {string} scale: A string comparing the weight of the bottle contents to the weight of the bottle by itself
 */
const contentWeight = (bottleWeight, scale) => {
    const scaleParts = scale.split(' ');
    const divisionValue = Number(scaleParts[0]);
    const scaleRelation = scaleParts[scaleParts.length - 1];
    const divisionUnit = bottleWeight / (divisionValue + 1);
    if (scaleRelation === 'larger') {
        return divisionUnit * divisionValue;
    } else {
        return divisionUnit * (1 / divisionValue) * divisionValue;
    }
}

console.log(contentWeight(120, '2 times larger')); // 80
console.log(contentWeight(2550, '50 times smaller')); // 80
console.log(contentWeight(120, '2 times smaller')); // 40