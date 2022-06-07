"use strict";

const formattedElement = (number) => [...number.toString()].reduce((total, current) => total + Number(current), 0)
const squareAndSum = (array) => {
    const formattedArray = [];
    array.forEach(element => {
        if (element < 0) {
            element = Math.pow(element, 2)
        }
        let tempElement = formattedElement(element)
        while (tempElement.toString().length > 1) {
            tempElement = formattedElement(tempElement)
        }
        formattedArray.push(tempElement)
    });
    return formattedArray
}
console.log(squareAndSum([-1, 1, 12, -4, -5, 999])); // [1, 1, 3, 7, 7, 9]