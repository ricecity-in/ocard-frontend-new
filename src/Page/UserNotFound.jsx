import React from "react";
import { Link } from "react-router-dom";
import "./UserNotFound.css";

const UserNotFound = () => {
  return (
    <div className="user-not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">Oops! User not found.</p>
      <p className="not-found-description">
        Sorry, the user you're looking for doesn't exist. If you think
        something is broken, report a problem.
      </p>
      <div className="button-container">
        <Link to="/" className="home-button1">
          Return Home
        </Link>
        <button className="report-button">Report Problem</button>
      </div>
    </div>
  );
};

export default UserNotFound;
