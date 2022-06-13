import {getFileExtension} from './get-file-extension'

describe('getFileExtension', () => {
    it('should return false', () => {
        const string = ''
        const actual = getFileExtension(string)
        const expected = false

        expect(actual).toEqual(expected);
    });
    it('should return \'.js\'', () => {
        const string = 'component.test.js'
        const actual = getFileExtension(string)
        const expected = 'js'

        expect(actual).toEqual(expected);
    });
});