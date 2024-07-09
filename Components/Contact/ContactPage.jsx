import React, { useState } from "react";
import "./ContactPage.css";
export const ContactPage = () => {
  return (
    <>
      <div className="contactpage-container">
        <h1 className="contactpage-heading"> Get in touch... </h1>

        <div className="contactpage-box">
          <form action="">
            <div className="form-container">
              <span
              >
                Name
              </span>
              <input
                className="inputfield"
                type="text"
                placeholder="Type your name..."
              />
            </div>
            <div className="form-container">
              <span>Email</span>
              <input
                className="inputfield"
                type="text"
                placeholder="Type your name..."
              />
            </div>
            <div className="form-container">
              <span>Your Message</span>
              <textarea
                className="inputfield"
                placeholder="leave your message...."
              ></textarea>
            </div>
          </form>
          <div className="socialContactlink">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </>
  );
};
