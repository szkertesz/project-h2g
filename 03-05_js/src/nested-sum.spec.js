import { nestedSum } from "./nested-sum";

describe('nestedSum', () => {
    it ('should return 0 if input is an empty array', () => {
        const array = []
        const actual = nestedSum(array)
        const expected = 0

        expect(actual).toEqual(expected)
    })
    it('should return 115 if the input is [1, [2, [[[3]]]], [4, 5], 100]', () => {
        const array = [1, [2, [[[3]]]], [4, 5], 100]
        const actual = nestedSum(array)
        const expected = 115

        expect(actual).toEqual(expected)
    })
    it('should return 15 if the input is [1, [2, [3], [4, \'5\', null, undefined, [NaN, Infinity], [true, false], { id: \'1\' }, 5]]]', () => {
        const array = [1, [2, [3], [4, '5', null, undefined, [NaN, Infinity], [true, false], { id: '1' }, 5]]]
        const actual = nestedSum(array)
        const expected = 15

        expect(actual).toEqual(expected)
    })
})