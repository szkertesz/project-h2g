"use strict";
// Solution #1
// const sumDigits = (number) => [...number.toString()].reduce((total, current) => total + Number(current), 0)

// const squareAndSum = (array) => {
//     const formattedArray = [];
//     array.forEach(element => {
//         if (element < 0) {
//             element = Math.pow(element, 2)
//         }
//         let tempElement = sumDigits(element)
//         while (tempElement.toString().length > 1) {
//             tempElement = sumDigits(tempElement)
//         }
//         formattedArray.push(tempElement)
//     });
//     return formattedArray
// }

// Refactoring
/**
 * 
 * @param {*} number 
 * @returns 
 */

export const sumDigits = number => Array.from(number.toString()).reduce((total, current) => total + Number(current), 0)

export const squareAndSum = (array) => {
    if (!array) return [];
    return array.map(element => {
        if (element < 0) {
            element = Math.pow(element, 2)
        }
        let summedElement = sumDigits(element)
        return summedElement.toString().length > 1 ? sumDigits(summedElement) : summedElement
    });
}

// console.log(squareAndSum([-1, 1, 12, -4, -5, 999])); // [1, 1, 3, 7, 7, 9]