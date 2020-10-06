import React from "react";
import { Container, Form } from "react-bootstrap";
import "./Log_in.scss";

const Log_in = () => {
  return (
    <div className="log_in_container">
      <form className="log_in_form">
        <label>E-mail Address</label>

        <input type="email"></input>

        <label>Password</label>

        <input type="password"></input>
        <br />
        <input type="submit" value="Log In"></input>
      </form>
    </div>
  );
};

export default Log_in;
