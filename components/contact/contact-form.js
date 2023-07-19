import React, { useState, useEffect } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

async function sendContactData(contactDetails) {
  //send request to the API route
  const response = await fetch("/api/contact", {
    //configure the request, so its not automatically a GET request with no data
    method: "POST",
    //need to extract the entered data for the body
    body: JSON.stringify(contactDetails),
    //make the backend aware that the request carries JSON data
    headers: {
      "Content-Type": "application/json",
    },
  });

  //get the data from the response
  const data = await response.json();

  //check the responses with an if check
  if (!response.ok) {
    //error response
    throw new Error(data.message || "Oops! Something went wrong!");
  }
}

function ContactForm() {
  //use state to manage the state for the different inputs with two way binding
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  //now bind them to the corresponding JSX elements and listen to changes

  //state to check the current status of the request for notification
  const [requestStatus, setRequestStatus] = useState(); //pending, success, or failed
  //state for the error handling
  const [requestError, setRequestError] = useState();

  //using use effect to show and hide the status message, this will r-execute whenever the request status changes
  useEffect(() => {
    if(requestStatus === 'success' || requestStatus === 'error') {
      //set a timer to reset request status
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      //clear timeout if we have an ongoing timer when a request is sent
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  //function to trigger when the form is submitted
  async function sendMessageHandler(event) {
    event.preventDefault();

    //can add client sided validation here

    //set the request status to pending
    setRequestStatus("pending");

    //wrap in a try/catch so we can tell if we need a success or error status
    try {
      await sendContactData({
        //pass the data we need to extract to the function
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      //set request status to sucess
      setRequestStatus("success");
      //clear the user input
      setEnteredEmail('');
      setEnteredName('');
      setEnteredMessage('');
    } catch (error) {
      //set request status to error
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  //derive the data for the notification and set the statuses
  let notification;
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Message sent!",
      message: "Your message has been sent to the author!",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Sending failed!",
      message: requestError,
    };
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
      {/*add conditional content for the notification*/}
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
