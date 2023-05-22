import { useState } from "react";
import "./BookACall.css";
import axios from "axios";
import Phone from "../../assets/phone.png"

export default function BookACall() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [received, setReceived] = useState(false);

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setReceived(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    axios.post(`https://api.cookk.co/api/v1/ask_question`, {
      full_name: name,
      email: email,
      message: message,
    });
  };

  return (
    <div className="book-call-container">
      <h1>Ask a question</h1>
      <form className="joinus-form" onSubmit={(e) => handleCreate(e)}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          maxLength="50"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          maxLength="50"
          required
          onChange={handleChange}
        />
        <textarea
          className="input-message"
          type="text"
          placeholder="Message"
          name="message"
          value={message}
          required
          onChange={handleChange}
        />
        <div className="call-footer">
          <button className="joinus-form-button">Send</button>
          <button
            onClick={() => {
              window.location.href = "tel:19175007609";
            }}
            type="button"
            className="phone-button"
          >
            <a href="/" target="_blank">
              <img alt="icons" src={Phone} />
            </a>
          </button>
        </div>
      </form>
      {received && <h5>Thank you! We have received your information.</h5>}
      {/* <iframe
          id="calendly"
          src="https://calendly.com/ainurbookkeeper/30min"
          width="100%"
          height="100%"
          frameborder="0"
          title='book'
      ></iframe> */}
    </div>
  );
}
