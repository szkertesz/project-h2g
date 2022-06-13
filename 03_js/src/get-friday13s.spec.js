import {getFriday13s} from './get-friday13s'

describe('getFriday13s', () => {
    it('should return [\'1999.08.13.\'\, \'2000.10.13\']', () => {
        const start = 1999
        const end = 2000
        const actual = getFriday13s(start, end)
        const expected = ['1999.08.13.', '2000.10.13.']

        expect(actual).toEqual(expected);
    });
    it('should return  [\'2000.10.13\']', () => {
        const start = 2000
        const end = null
        const actual = getFriday13s(start, end)
        const expected = ['2000.10.13.']

        expect(actual).toEqual(expected);
    });
    it('should return -1', () => {
        const start = ''
        const end = null
        const actual = getFriday13s(start, end)
        const expected = -1

        expect(actual).toEqual(expected);
    });
});