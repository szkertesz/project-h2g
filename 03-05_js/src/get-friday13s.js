export const getFriday13s = (startYear, endYear) => {
    if (!startYear && !endYear) {
        return -1
    }

    const rangeStart = new Date(startYear, 0, 1);
    const rangeEnd = endYear ? new Date(endYear, 12, 31) : new Date(startYear, 12, 31);
    const getDaysArray = (start, end) => {
        const arr = []
        for (const dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
            arr.push(new Date(dt));
        }
        return arr;
    };

    return getDaysArray(rangeStart, rangeEnd)
        .filter((date) => {
            return date.getDay() === 5 && date.getDate() === 13
        })
        .map(friday => new Intl.DateTimeFormat('hu').format(friday).replace(/\s/g, ''))
}

// console.log(getFriday13s(1999, 2000)); // ['1999.08.13.', '2000.10.13']
// console.log(getFriday13s(2000)); // ['2000.10.13']