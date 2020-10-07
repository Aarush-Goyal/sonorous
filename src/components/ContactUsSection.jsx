import React from "react";
import "./css/ContactUsSection.css";
import { Button, TextField } from "@material-ui/core";
function ContactUsSection() {
  return (
    <div className="ContactUsSection">
      <h1>Contact Us</h1>
      <form action="https://formspree.io/f/mzbkdvlo" method="POST">
        <TextField
          className="TextField"
          id="standard-basic"
          type="text"
          name="_replyto"
          placeholder="Email"
          label="Email"
        />
        <br />
        <TextField
          className="TextField"
          id="standard-basic"
          type="text"
          name="message"
          placeholder="Message"
          label="Message"
        />
        <br />
        <br />
        <Button
          className="Button"
          type="submit"
          variant="contained"
          color="primary"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}

export default ContactUsSection;
