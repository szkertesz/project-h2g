import {getConvertedUUIDBlocks} from './get-converted-uuid-blocks'

describe('getConvertedUUIDBlocks', () => {
    it('should return -1 if input is an empty string', () => {
        const uuid = ''
        const actual = getConvertedUUIDBlocks(uuid)
        const expected = -1

        expect(actual).toEqual(expected);
    });
    it('should return -1 if input is undefined', () => {
        const uuid = undefined
        const actual = getConvertedUUIDBlocks(uuid)
        const expected = -1

        expect(actual).toEqual(expected);
    });
    it('should return [247, 130, 240, 17, 99, 106, 77, 139, 159, 99, 220, 52, 164, 80, 60, 1] if f782f011-636a-4d8b-9f63-dc34a4503c01 in given', () => {
        const uuid = 'f782f011-636a-4d8b-9f63-dc34a4503c01'
        const actual = getConvertedUUIDBlocks(uuid)
        const expected = [247, 130, 240, 17, 99, 106, 77, 139, 159, 99, 220, 52, 164, 80, 60, 1]

        expect(actual).toEqual(expected);
    });
    it('should return TRUE if f782f011-636a-4d8b-9f63-dc34a4503c01 is given', () => {
        const uuid = 'f782f011-636a-4d8b-9f63-dc34a4503c01'
        const actual = getConvertedUUIDBlocks(uuid)
        const expected = true

        expect(actual).toHaveLength(16);
    });
});