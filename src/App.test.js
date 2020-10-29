import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm';

test("renders App without crashing", () => {
  render(<App />);
});


test('Testing Form', async () => {
  
  render (
      <ContactForm />
    )
    // Get access to form fields
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    // Add text to form fields
    fireEvent.change(firstNameInput, {
      target: {
        value: 'Brandon',
        name: 'firstName'
      }
    })
    fireEvent.change(lastNameInput, {
      target: {
        value: 'Sievert',
        name: 'lastname'
      }
    })
    fireEvent.change(emailInput, {
      target: {
        value: 'brandonwsievert@gmail.com',
        name: 'email'
      }
    })
    fireEvent.change(messageInput, {
      target: {
        value: 'Here is a sample message for message input...',
        name: 'message'
      }
    })

    // Get access and click on button
    const button = screen.getByRole('button');
    fireEvent.click(button);

});