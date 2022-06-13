import { getFirstDuplicate } from './get-first-duplicate.js'

describe('getFirstDuplicate', () => {
    it ('should return b if \'abccb\' is given', () => {
        const text = 'abccb'
        const actual = getFirstDuplicate(text)
        const expected = 'b'

        expect(actual).toEqual(expected)
    })
    it ('should return empty string if \'abc\' is given', () => {
        const text = 'abc'
        const actual = getFirstDuplicate(text)
        const expected = ''

        expect(actual).toEqual(expected)
    })
    test ('should return empty string when undefined is given', () => {
        const text = undefined
        const actual = getFirstDuplicate(text)
        const expected = ''

        expect(actual).toEqual(expected)
    })
})