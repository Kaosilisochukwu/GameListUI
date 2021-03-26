import React from "react";
import Input from "../components/Input";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Get in Touch</h1>
      <p>
        trysail transome furl Sea Legs scallywag jack Ketch chandler mizzenamost
        reef sails skysail. Shiver me timbers loot buckoo belaying pin Sea Legs
        boom gunwalls boogy jury mast fore
      </p>
      <div className="contact-form">
        <h4>Contact Form</h4>
        <div className="contact-detail">
          <Input label="Name*" type="text" />
          <Input label="Email Address*" type="text" />
        </div>
        <div>
          <label className="input-label">Message*</label>
          <textarea required rows="5"></textarea>
        </div>
        <button className="send">Send</button>
      </div>
    </div>
  );
};

export default Contact;
