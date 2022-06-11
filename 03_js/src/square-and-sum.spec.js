import { sumDigits, squareAndSum } from './square-and-sum.js';

describe('squareAndSum', () => {
    it('should return an empty array', () => {
        const array = '';
        const actual = squareAndSum(array);
        const expected = [];

        expect(actual).toEqual(expected)
    })
    it('should return an empty array', () => {
        const array = [];
        const actual = squareAndSum(array);
        const expected = [];

        expect(actual).toEqual(expected)
    })
    it('should return an empty array', () => {
        const array = undefined;
        const actual = squareAndSum(array);
        const expected = [];

        expect(actual).toEqual(expected)
    })
    it('should return [1, 1, 3, 7, 7, 9]', () => {
        const array = [-1, 1, 12, -4, -5, 999];
        const actual = squareAndSum(array);
        const expected = [1, 1, 3, 7, 7, 9];

        expect(actual).toEqual(expected)
    })
})