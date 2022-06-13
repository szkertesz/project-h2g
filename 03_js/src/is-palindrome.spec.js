import {isPalindrome} from './is-palindrome'

describe('isPalindrome', () => {
    it('should return false', () => {
        const text = ''
        const actual = isPalindrome(text)
        const expected = false
        expect(actual).toEqual(expected)
    });
    it('should return true', () => {
        const text = 'indul a gorog aludni'
        const actual = isPalindrome(text)
        const expected = true
        expect(actual).toEqual(expected)
    });
    it('should return true', () => {
        const text = 'aaaa'
        const actual = isPalindrome(text)
        const expected = true
        expect(actual).toEqual(expected)
    });
    it('should return -1', () => {
        const text = undefined
        const actual = isPalindrome(text)
        const expected = -1
        expect(actual).toEqual(expected)
    });
});