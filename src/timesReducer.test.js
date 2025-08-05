import { initializeTimes, updateTimes } from './timesReducer.js';
import { fetchAPI } from './api.js';

// Mock the fetchAPI function
jest.mock('./api.js', () => ({
    fetchAPI: jest.fn(),
    submitAPI: jest.fn(() => true)
}));

describe('initializeTimes', () => {
    test('returns an empty array as initial state', () => {
        // initializeTimes now returns an empty array
        expect(initializeTimes()).toEqual([]);
    });
});

describe('updateTimes', () => {
    test('calls fetchAPI with the selected date and returns its result', () => {
        // Setup
        const mockTimes = ['17:00', '18:00', '19:30'];
        fetchAPI.mockReturnValue(mockTimes);

        const prevState = [];
        const selectedDate = new Date('2023-01-15');
        const action = { type: "UPDATE_TIMES", date: selectedDate };

        // Execute
        const result = updateTimes(prevState, action);

        // Verify
        expect(fetchAPI).toHaveBeenCalledWith(selectedDate);
        expect(result).toEqual(mockTimes);
    });

    test('returns the previous state when no date is provided', () => {
        // Setup
        const prevState = ['17:00', '18:00'];
        const action = { type: "UPDATE_TIMES" }; // No date provided

        // Execute
        const result = updateTimes(prevState, action);

        // Verify
        expect(result).toEqual(prevState);
    });
});
