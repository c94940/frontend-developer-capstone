import { fetchAPI } from './api.js';

export const initializeTimes = () => [];

export const updateTimes = (state, action) => {
  if (action && action.date) {
    const selectedDate = new Date(action.date);
    return fetchAPI(selectedDate);
  }
  return state;
};