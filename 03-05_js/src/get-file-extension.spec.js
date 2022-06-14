import { getFileExtension } from './get-file-extension'

describe('getFileExtension', () => {
    it('should return false if input is an empty string', () => {
        const string = ''
        const actual = getFileExtension(string)
        const expected = false

        expect(actual).toEqual(expected);
    });
    it('should return \'js\' if input is component.test.js', () => {
        const string = 'component.test.js'
        const actual = getFileExtension(string)
        const expected = 'js'

        expect(actual).toEqual(expected);
    });
    it('should return false if input is README', () => {
        const string = 'README'
        const actual = getFileExtension(string)
        const expected = false

        expect(actual).toEqual(expected);
    });
    it('should return false if input is .bash_rc', () => {
        const string = '.bash_rc'
        const actual = getFileExtension(string)
        const expected = false

        expect(actual).toEqual(expected);
    });
});