import { render, screen } from '@testing-library/react';
import ReservationForm from './ReservationForm';

test('Renders the ReservationForm heading', () => {
    const mockTimes = ["12 PM", "1 PM", "2 PM"];
    const mockDispatch = jest.fn();
    
    render(<ReservationForm availableTimes={mockTimes} dispatch={mockDispatch} />);
    const headingElement = screen.getByText("Make a reservation");
    expect(headingElement).toBeInTheDocument();
})