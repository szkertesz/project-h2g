import {evenSum} from './even-sum'

describe('evenSum', () => {
    it('should return 0', () => {
        const array = []
        const actual = evenSum(array)
        const expected = 0
        expect(actual).toEqual(expected)
    });
    it('should return 0', () => {
        const array = [1, [1, 1], [[1], 1]]
        const actual = evenSum(array)
        const expected = 0
        expect(actual).toEqual(expected)
    });
    it('should return 6', () => {
        const array = [1, [2, 3], [[4], 5]]
        const actual = evenSum(array)
        const expected = 6
        expect(actual).toEqual(expected)
    });
});