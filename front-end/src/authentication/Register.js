import React, { Component } from "react";
import axios from "axios";
import { FormContainer, SignContainer } from "../ReusableStyles";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: "",
      passwordInput: ""
    };
  }
  editRegisterHandler = e => {
    // console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleRegisterSubmitForm = properties => e => {
    e.preventDefault();
    // console.log("this.props in register submit button", properties);
    // const username = this.state.usernameInput;
    // const password = this.state.passwordInput;
    // localStorage.setItem("user", username);
    // localStorage.setItem("password", password);
    properties.registerNewUser(this.state);
    const user = {
      usernameInput: this.state.usernameInput,
      passwordInput: this.state.passwordInput
    };
    axios.post("http://localhost:9000/users/register", user).then(response => {
      // console.log("response in submit form", response.data);
      localStorage.setItem("user", response.data);
    });
  };
  render() {
    // console.log("this.props in Register component", this.props);
    return (
      <SignContainer>
        <div>Register Component</div>
        <FormContainer
          action=""
          onSubmit={this.handleRegisterSubmitForm(this.props)}
        >
          <input
            type="text"
            name="usernameInput"
            onChange={this.editRegisterHandler}
            placeholder="username"
            value={this.state.usernameInput}
            required
          />
          <input
            type="password"
            name="passwordInput"
            onChange={this.editRegisterHandler}
            placeholder="password"
            value={this.state.passwordInput}
            required
          />
          <button>Register</button>
        </FormContainer>
      </SignContainer>
    );
  }
}

export default Register;
