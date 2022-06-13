/**
 * @param {number} bottleWeight: The weight of the entire bottle and contents
 * @param {string} scale: A string comparing the weight of the bottle contents to the weight of the bottle by itself
 */
export const contentWeight = (bottleWeight, scale) => {
    const scaleParts = scale.split(' ');
    const divisionValue = Number(scaleParts[0]);
    const scaleRelation = scaleParts[scaleParts.length - 1];
    const divisionUnit = bottleWeight / (divisionValue + 1);

    if (bottleWeight <= 0 || !Number.isInteger(bottleWeight)) {
        throw new Error('bottleweight should be a positive integer')
    }

    if (scaleRelation === 'larger') {
        return divisionUnit * divisionValue;
    } else {
        return divisionUnit * (1 / divisionValue) * divisionValue;
    }
}

try {
    contentWeight(-120, '2 times smaller'); // 40
} catch(err) {
    console.log('\x1b[41m', err.message)
}

// console.log(contentWeight(120, '2 times larger')); // 80
// console.log(contentWeight(2550, '50 times smaller')); // 50
// console.log(contentWeight(120, '2 times smaller')); // 40
// console.log(contentWeight(-120, '2 times smaller')); // 40