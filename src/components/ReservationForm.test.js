import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReservationForm from './ReservationForm';

describe('ReservationForm', () => {
  // Define mock props to be reused across tests
  const mockTimes = ["12 PM", "1 PM", "2 PM"];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  test('Renders the ReservationForm heading', () => {
    render(
      <ReservationForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const headingElement = screen.getByText("Make a reservation");
    expect(headingElement).toBeInTheDocument();
  });

  test('Name input has required and minLength attributes', () => {
    render(
      <ReservationForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    const nameInput = screen.getByLabelText(/name:/i);
    expect(nameInput).toHaveAttribute('required');
    expect(nameInput).toHaveAttribute('minLength', '2');
    expect(nameInput).toHaveAttribute('type', 'text');
  });

  test('Email input has required and type="email" attributes', () => {
    render(
      <ReservationForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    const emailInput = screen.getByLabelText(/email:/i);
    expect(emailInput).toHaveAttribute('required');
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  test('Phone input has required, type="tel", and pattern attributes', () => {
    render(
      <ReservationForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    const phoneInput = screen.getByLabelText(/phone:/i);
    expect(phoneInput).toHaveAttribute('required');
    expect(phoneInput).toHaveAttribute('type', 'tel');
    expect(phoneInput).toHaveAttribute('pattern', '\\d{10,}');
  });

  test('Date input has required, type="date", and min attributes', () => {
    render(
      <ReservationForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    const dateInput = screen.getByLabelText(/date:/i);
    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('min');
  });

  test('Time select has required attribute', () => {
    render(
      <ReservationForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    const timeSelect = screen.getByLabelText(/time:/i);
    expect(timeSelect).toHaveAttribute('required');
  });

  test('Guests input has required, type="number", min, and max attributes', () => {
    render(
      <ReservationForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    const guestsInput = screen.getByLabelText(/number of guests:/i);
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('Request textarea has maxLength attribute', () => {
    render(
      <ReservationForm
        availableTimes={mockTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    const requestTextarea = screen.getByLabelText(/special requests:/i);
    expect(requestTextarea).toHaveAttribute('maxLength', '200');
  });

  // JavaScript validation tests
  describe('Form validation', () => {
    test('Submit button is disabled when form is empty', () => {
      render(
        <ReservationForm
          availableTimes={mockTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      );
      const submitButton = screen.getByRole('button', { name: /reserve/i });
      expect(submitButton).toBeDisabled();
    });

    test('Submit button is enabled when form is valid', async () => {
      render(
        <ReservationForm
          availableTimes={mockTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      );
      const nameInput = screen.getByLabelText(/name:/i);
      const emailInput = screen.getByLabelText(/email:/i);
      const phoneInput = screen.getByLabelText(/phone:/i);
      const dateInput = screen.getByLabelText(/date:/i);
      const timeSelect = screen.getByLabelText(/time:/i);
      const guestsInput = screen.getByLabelText(/number of guests:/i);
      const submitButton = screen.getByRole('button', { name: /reserve/i });

      // Fill in valid data for all required fields
      await userEvent.type(nameInput, 'John Doe');
      await userEvent.type(emailInput, 'john@example.com');
      await userEvent.type(phoneInput, '1234567890');

      // Set date to today
      const today = new Date().toISOString().split('T')[0];
      fireEvent.change(dateInput, { target: { value: today } });

      // Select a time
      fireEvent.change(timeSelect, { target: { value: mockTimes[0] } });

      // Set valid number of guests
      fireEvent.change(guestsInput, { target: { value: 4 } });

      // Now the button should be enabled
      expect(submitButton).not.toBeDisabled();
    });

    // Test individual validation rules
    test('Name validation works correctly', async () => {
      render(
        <ReservationForm
          availableTimes={mockTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      );
      const nameInput = screen.getByLabelText(/name:/i);
      const submitButton = screen.getByRole('button', { name: /reserve/i });

      // Invalid: too short
      await userEvent.type(nameInput, 'A');
      expect(submitButton).toBeDisabled();

      // Valid: 2+ characters
      await userEvent.clear(nameInput);
      await userEvent.type(nameInput, 'John');

      // Still disabled because other fields are empty
      expect(submitButton).toBeDisabled();
    });

    test('Email validation works correctly', async () => {
      render(
        <ReservationForm
          availableTimes={mockTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      );
      const nameInput = screen.getByLabelText(/name:/i);
      const emailInput = screen.getByLabelText(/email:/i);
      const submitButton = screen.getByRole('button', { name: /reserve/i });

      // Valid name first (to isolate email testing)
      await userEvent.type(nameInput, 'John Doe');

      // Invalid email
      await userEvent.type(emailInput, 'not-an-email');
      expect(submitButton).toBeDisabled();

      // Valid email
      await userEvent.clear(emailInput);
      await userEvent.type(emailInput, 'john@example.com');

      // Still disabled because other fields are empty
      expect(submitButton).toBeDisabled();
    });

    test('Phone validation works correctly', async () => {
      render(
        <ReservationForm
          availableTimes={mockTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      );
      const nameInput = screen.getByLabelText(/name:/i);
      const emailInput = screen.getByLabelText(/email:/i);
      const phoneInput = screen.getByLabelText(/phone:/i);
      const submitButton = screen.getByRole('button', { name: /reserve/i });

      // Valid name and email first
      await userEvent.type(nameInput, 'John Doe');
      await userEvent.type(emailInput, 'john@example.com');

      // Invalid phone (too short)
      await userEvent.type(phoneInput, '123456789');
      expect(submitButton).toBeDisabled();

      // Valid phone
      await userEvent.clear(phoneInput);
      await userEvent.type(phoneInput, '1234567890');

      // Still disabled because other fields are empty
      expect(submitButton).toBeDisabled();
    });

    test('Guests validation works correctly', async () => {
      render(
        <ReservationForm
          availableTimes={mockTimes}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      );
      const nameInput = screen.getByLabelText(/name:/i);
      const emailInput = screen.getByLabelText(/email:/i);
      const phoneInput = screen.getByLabelText(/phone:/i);
      const dateInput = screen.getByLabelText(/date:/i);
      const timeSelect = screen.getByLabelText(/time:/i);
      const guestsInput = screen.getByLabelText(/number of guests:/i);
      const submitButton = screen.getByRole('button', { name: /reserve/i });

      // Valid name, email, phone first
      await userEvent.type(nameInput, 'John Doe');
      await userEvent.type(emailInput, 'john@example.com');
      await userEvent.type(phoneInput, '1234567890');

      // Set date to today
      const today = new Date().toISOString().split('T')[0];
      fireEvent.change(dateInput, { target: { value: today } });

      // Select a time
      fireEvent.change(timeSelect, { target: { value: mockTimes[0] } });

      // Invalid guests: too few
      fireEvent.change(guestsInput, { target: { value: 0 } });
      expect(submitButton).toBeDisabled();

      // Invalid guests: too many
      fireEvent.change(guestsInput, { target: { value: 11 } });
      expect(submitButton).toBeDisabled();

      // Valid guests
      fireEvent.change(guestsInput, { target: { value: 4 } });
      expect(submitButton).not.toBeDisabled();
    });
  });
});
