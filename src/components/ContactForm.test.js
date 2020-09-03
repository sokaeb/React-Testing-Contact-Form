import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

    // 1st test: see if form renders 
test("renders ContactForm without crashing", () => {
  render(<ContactForm />);
});

test("ContactForm input fields are working and can submit data", () => {
    render(<ContactForm />);
    
    // 2nd test: see if labels are on the form 
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const email = screen.getByLabelText(/email/i);
    const message = screen.getByLabelText(/message/i);

    // 3rd test: see if inputs are working
    fireEvent.change(firstName, {target: { value: 'John'}}); 
    fireEvent.change(lastName, {target: { value: 'Johnson'}}); 
    fireEvent.change(email, {target: { value: 'john@son.com'}}); 
    fireEvent.change(message, {target: { value: 'My message.'}}); 

    // 4th test: see if submit button can be clicked
    const submitBtn = screen.getByTestId(/submit/i);
    fireEvent.click(submitBtn);

    // 5th test: see if form validations appear accordingly 
    // const validation = () => {
    // const labelErrors = screen.getAllByTestId(/label/i)
    //     if(labelErrors === ''){
    //         fireEvent.change(firstName, {target: { value: ''}});
    //         const errorMessage = screen.getByText(/Looks like there was an error: required/i);
    //         return errorMessage;
    //     }
    //     expect(validation).toHaveTextContent('Looks like there was an error: required');
    // };
       
    const validation = () => {
    if(firstName === ''){
        fireEvent.change(firstName, {target: { value: ''}});
        const errorMessage = screen.getByText(/Looks like there was an error: required/i);
        return errorMessage;
    }
    expect(validation).toHaveTextContent('Looks like there was an error: required') 
    }

    
  });


