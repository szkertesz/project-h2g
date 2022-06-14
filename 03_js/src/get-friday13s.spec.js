import {getFriday13s} from './get-friday13s'

describe('getFriday13s', () => {
    it('should return [\'1999.08.13.\'\, \'2000.10.13\'] if the start & end year are 1999 & 2000', () => {
        const start = 1999
        const end = 2000
        const actual = getFriday13s(start, end)
        const expected = ['1999.08.13.', '2000.10.13.']

        expect(actual).toEqual(expected);
    });
    it('should return  [\'2000.10.13\'] if the year is 2000', () => {
        const start = 2000
        const end = null
        const actual = getFriday13s(start, end)
        const expected = ['2000.10.13.']

        expect(actual).toEqual(expected);
    });
    it('should return -1 if start year is an empty string &the end year is null', () => {
        const start = ''
        const end = null
        const actual = getFriday13s(start, end)
        const expected = -1

        expect(actual).toEqual(expected);
    });
});