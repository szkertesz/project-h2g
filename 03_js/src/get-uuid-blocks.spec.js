import {getUUIDBlocks} from './get-uuid-blocks'

describe('getUUIDBlocks', () => {
    it('should return [\'f7\', \'82\', \'f0\', \'11\', \'63\', \'6a\', \'4d\', \'8b\', \'9f\', \'63\', \'dc\', \'34\', \'a4\', \'50\', \'3c\', \'01\'] if the UUIS is \'f782f011 - 636a - 4d8b - 9f63 - dc34a4503c01\'', () => {
        const uuid = 'f782f011-636a-4d8b-9f63-dc34a4503c01'
        const actual = getUUIDBlocks(uuid)
        const expected = ['f7', '82', 'f0', '11', '63', '6a', '4d', '8b', '9f', '63', 'dc', '34','a4', '50', '3c', '01']

        expect(actual).toEqual(expected);
    });
    it('should return TRUE if the UUIS is \'f782f011 - 636a - 4d8b - 9f63 - dc34a4503c01\'', () => {
        const uuid = 'f782f011-636a-4d8b-9f63-dc34a4503c01'
        const actual = getUUIDBlocks(uuid)
        const expected = true

        expect(actual).toHaveLength(16);
    });
});