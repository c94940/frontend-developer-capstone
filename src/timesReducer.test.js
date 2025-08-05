import { initializeTimes, updateTimes } from './timesReducer.js';

describe('initializeTimes', () => {
    test('returns the correct initial times array', () => {
        expect(initializeTimes()).toEqual([
            "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9PM"
        ]);
    });
});

describe('updateTimes', () => {
    test('returns the same value as initializeTimes for now', () => {
        const prevState = ["12 PM", "1 PM"];
        const action = { type: "UPDATE_TIMES", date: "2024-01-01" };
        expect(updateTimes(prevState, action)).toEqual(initializeTimes());
    });
});