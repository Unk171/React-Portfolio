import { useState } from "react";

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailMissed, setEmailMissed] = useState(false);
  const [messageMissed, setMessageMissed] = useState(false);
  const [emailError, setEmailError] = useState("Email can't be empty");
  const [messageError, setMessageError] = useState("Message can't be empty");

  const nameHandler = (e) => {
    setUserName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Email is ivalid");
    } else {
      setEmailError("");
    }
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
    if (e.target.value) {
      setMessageError("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert("Your message sent");

    setUserName("");
    setEmail("");
    setMessage("");
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailMissed(true);
        break;
      case "message":
        setMessageMissed(true);
        break;
    }
  };

  return (
    <div className="container text-center">
      <h1>Contacts</h1>
      <h4>My contacts:</h4>
      <ul>
        <li>Email: 7353687@gmail.com</li>
        <li>Phone: 917-562-4343</li>
      </ul>
      <h5>Send me message:</h5>
      <form className="form" onSubmit={handleFormSubmit}>
        <div>
          <p className="m-0">Enter name</p>
          <input
            value={userName}
            name="userName"
            onChange={nameHandler}
            type="text"
            placeholder="username"
          />
        </div>
        <div>
          <p className="m-0">Enter email</p>
          {emailMissed && emailError && (
            <div style={{ color: "red" }}> {emailError} </div>
          )}
          <input
            onBlur={(e) => blurHandler(e)}
            value={email}
            name="email"
            onChange={emailHandler}
            type="email"
            placeholder="email"
          />
        </div>
        <div>
          <p className="m-0">Enter message</p>
          {messageMissed && messageError && (
            <div style={{ color: "red" }}> {messageError} </div>
          )}
          <input
            onBlur={(e) => blurHandler(e)}
            value={message}
            name="message"
            onChange={messageHandler}
            type="text"
            placeholder="Type your message here"
            style={{ width: "300px", height: "80px" }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
