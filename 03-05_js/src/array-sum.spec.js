import { arraySum } from "./array-sum";

describe('arraySum', () => {
    it ('should return 0 when input is an empty array', () => {
        const array = []
        const actual = arraySum(array)
        const expected = 0

        expect(actual).toEqual(expected)
    })
    it ('should return 0 if input is undefined', () => {
        const array = undefined
        const actual = arraySum(array)
        const expected = 0

        expect(actual).toEqual(expected)
    })
    it ('should return 0 if input is Infinity', () => {
        const array = Infinity
        const actual = arraySum(array)
        const expected = 0

        expect(actual).toEqual(expected)
    })
    it('should return 15 if [1, 2, 3, 4, 5] is given', () => {
        const array = [1, 2, 3, 4, 5]
        const actual = arraySum(array)
        const expected = 15

        expect(actual).toEqual(expected)
    })
    it('should return 15 if input is [1, 2, 3, 4, \'5\', null, undefined, NaN, Infinity, true, false, { id: \'1\' }, 5]', () => {
        const array = [1, 2, 3, 4, '5', null, undefined, NaN, Infinity, true, false, { id: '1' }, 5]
        const actual = arraySum(array)
        const expected = 15

        expect(actual).toEqual(expected)
    })
})