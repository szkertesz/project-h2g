import { splitOrder } from "./split-order";

describe('splitOrder', () => {
    it ('should return [1, 3, 5, 7, 9, 8, 6, 4, 2, 0]', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        const actual = splitOrder(array)
        const expected = [1, 3, 5, 7, 9, 8, 6, 4, 2, 0]

        expect(actual).toEqual(expected)
    })
    it ('should return [1, 3, 5, 7, 9, 8, 6, 4, 2, 0]', () => {
        const array = [3, 8, 1, 2, 7, 6, 5, 4, 9, 0]
        const actual = splitOrder(array)
        const expected = [1, 3, 5, 7, 9, 8, 6, 4, 2, 0]

        expect(actual).toEqual(expected)
    })
    it ('should return -1', () => {
        const array = undefined
        const actual = splitOrder(array)
        const expected = -1

        expect(actual).toEqual(expected)
    })
})