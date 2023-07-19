/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom"; //will use to convert this to a portal
import classes from "./notification.module.css";

//will be shown as a pending, success, or fail notification depending on the status
//this will be implemented locally with state
function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  //return reactDOM to create the portal
  return ReactDOM.createPortal((
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  ),
  //second element is a selector where we select where we portal to, use the native browser API
  //this should be the same id that you set in _document.js
  document.getElementById('notifications'));
}

export default Notification;