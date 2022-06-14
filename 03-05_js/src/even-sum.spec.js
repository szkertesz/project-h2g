import { evenSum, evenSum2} from './even-sum'

describe('evenSum', () => {
    it('should return 0 if input is undefined', () => {
        const array = undefined
        const actual = evenSum(array)
        const expected = 0
        expect(actual).toEqual(expected)
    });
    it('should return 0 if input is 0', () => {
        const array = 0
        const actual = evenSum(array)
        const expected = 0
        expect(actual).toEqual(expected)
    });
    it('should return 0 if input is 123', () => {
        const array = 123
        const actual = evenSum(array)
        const expected = 0
        expect(actual).toEqual(expected)
    });
    it('should return 0 if input is an empty array', () => {
        const array = []
        const actual = evenSum(array)
        const expected = 0
        expect(actual).toEqual(expected)
    });
    it('should return 0 if input is [1, [1, 1], [[1], 1]]', () => {
        const array = [1, [1, 1], [[1], 1]]
        const actual = evenSum(array)
        const expected = 0
        expect(actual).toEqual(expected)
    });
    it('should return 6 if input is [1, [2, 3], [[4], 5]]', () => {
        const array = [1, [2, 3], [[4], 5]]
        const actual = evenSum(array)
        const expected = 6
        expect(actual).toEqual(expected)
    });
    it('should return 0 if input is undefined', () => {
        const array = undefined
        const actual = evenSum2(array)
        const expected = 0
        expect(actual).toEqual(expected)
    });
    it('should return 0 if input is 0', () => {
        const array = 0
        const actual = evenSum2(array)
        const expected = 0
        expect(actual).toEqual(expected)
    });
    it('should return 0 if input is 123', () => {
        const array = 123
        const actual = evenSum2(array)
        const expected = 0
        expect(actual).toEqual(expected)
    });
    it('should return 0 if input is an empty array', () => {
        const array = []
        const actual = evenSum2(array)
        const expected = 0
        expect(actual).toEqual(expected)
    });
    it('should return 0 if input is [1, [1, 1], [[1], 1]]', () => {
        const array = [1, [1, 1], [[1], 1]]
        const actual = evenSum2(array)
        const expected = 0
        expect(actual).toEqual(expected)
    });
    it('should return 6 if input is [1, [2, 3], [[4], 5]]', () => {
        const array = [1, [2, 3], [[4], 5]]
        const actual = evenSum2(array)
        const expected = 6
        expect(actual).toEqual(expected)
    });
});