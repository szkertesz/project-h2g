import {isPalindrome} from './is-palindrome'

describe('isPalindrome', () => {
    it('should return false if the input is an empty string', () => {
        const text = ''
        const actual = isPalindrome(text)
        const expected = false
        expect(actual).toEqual(expected)
    });
    it('should return true if the input is \'indul a gorog aludni\'', () => {
        const text = 'indul a gorog aludni'
        const actual = isPalindrome(text)
        const expected = true
        expect(actual).toEqual(expected)
    });
    it('should return true if the input is \'aaaa\'', () => {
        const text = 'aaaa'
        const actual = isPalindrome(text)
        const expected = true
        expect(actual).toEqual(expected)
    });
    it('should return -1 if the input is undefined', () => {
        const text = undefined
        const actual = isPalindrome(text)
        const expected = false
        expect(actual).toEqual(expected)
    });
});