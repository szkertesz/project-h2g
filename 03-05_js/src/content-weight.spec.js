import {contentWeight} from './content-weight'

describe('contentWeight', () => {
    it('should throw error w/ \'bottleweight should be a positive integer\' message', () => {
        const bottleWeight = -1
        const scale = '2 times larger'
        const actual = () => {
            contentWeight(bottleWeight, scale)
        }
        const expectedErr = new Error('bottleweight should be a positive integer')

        expect(actual).toThrowError(expectedErr)
    })

    it('should throw error w/ \'scale option should be specified\' message if scale argument is an empty string', () => {
        const bottleWeight = 120
        const scale = ''
        const actual = () => {
            contentWeight(bottleWeight, scale)
        }
        const expectedErr = new Error('scale argument should be specified')

        expect(actual).toThrowError(expectedErr)
    })

    it('should return 80 if input is 120 & \'2 times larger\'', () => {
        const bottleWeight = 120
        const scale = '2 times larger'
        const actual = contentWeight(bottleWeight, scale)
        const expected = 80

        expect(actual).toEqual(expected)
    })
    it('should return 50 should return 80 if input is 2550 & \'50 times smaller\'', () => {
        const bottleWeight = 2550
        const scale = '50 times smaller'
        const actual = contentWeight(bottleWeight, scale)
        const expected = 50

        expect(actual).toEqual(expected)
    })
})