import React, {useState} from 'react';

// import validate function
import {validateEmail} from '../../utils/helpers';

function ContactForm() {

    // declare & define an error message Hook for isValid, so it can be reused for different error that occurs
    // initial state of the error message is an empty string
    const [errorMessage, setErrorMessage] = useState('');

    // set the initial state to empty string so the forms fields refresh on every load
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    // destructure formState object
    const {name, email, message} = formState;

    // this function will sync the internal state of the component formState with the user input coming from the DOM
    // the onChange event listener will ensure that the handleChange function fires whenever a keystroke(each letter) is typed into the input field for 'name'
    function handleChange(e) {

        // this series of conditional statements will validate user's input. first email - if email is a legit email syntax, then name & message - if they're empty
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            
            // if the email isn't valid show the preset error message, if the email is valid the message will be empty
            if(!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }

        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        // console.log('errorMessage', errorMessage);
    }
    //console.log(formState);

    // function to handle the submission of the form data
    function handleSubmit(e) {
        e.preventDefault();
        
         // using setFormState function to update the formState value for the name property
        if(errorMessage) {
        <div>
            <p className="error-text">{errorMessage}</p>
        </div> 
        } else {
            setFormState({ ...formState, [e.target.name]: e.target.value})
        }
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}></input>
                </div>

                <div>
                    <label htmlFor="email">Email address: </label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange}></input>
                </div>

                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}></textarea>
                </div>

                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;