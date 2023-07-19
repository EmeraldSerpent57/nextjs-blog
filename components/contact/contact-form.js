import React, { useState } from "react";
import classes from "./contact-form.module.css";

function ContactForm() {
  //use state to manage the state for the different inputs with two wat binding
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  //now bind them to the corresponding JSX elements and listen to changes

  //function to trigger when the form is submitted
  function sendMessageHandler(event) {
    event.preventDefault();

    //can add client sided validation here

    //send request to the API route
    fetch("/api/contact", {
      //configure the request, so its not automatically a GET request with no data
      method: "POST",
      //need to extract the entered data for the body
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage
        //these properties must match what you expect in your req.body
      }),
      //make the backend aware that the request carries JSON data
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
