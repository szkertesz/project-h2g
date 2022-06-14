import {getLongestString} from './get-longest-string'

describe('getLongestString', () => {
    it('should return -1 if an empty array is given', () => {
        const array = []
        const actual = getLongestString(array)
        const expected = -1
        expect(actual).toEqual(expected)
    });
    it('should return \'longest_string\' if the array is [1, \'longest_string\', \'shorter_str\']', () => {
        const array = [1, 'longest_string', 'shorter_str']
        const actual = getLongestString(array)
        const expected = 'longest_string'
        expect(actual).toEqual(expected)
    });
    it('should return an empty string if the array is [1, [2, 3], [[4], 5]]', () => {
        const array = [1, [2, 3], [[4], 5]]
        const actual = getLongestString(array)
        const expected = ''
        expect(actual).toEqual(expected)
    });
});