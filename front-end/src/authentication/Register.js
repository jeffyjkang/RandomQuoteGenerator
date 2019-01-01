import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: "",
      passwordInput: ""
    };
  }
  editRegisterHandler = e => {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleRegisterSubmitForm = properties => e => {
    e.preventDefault();
    console.log("this.props", properties);
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
      console.log(response);
      localStorage.setItem("user", response.token);
    });
  };
  render() {
    console.log("this.props in Register component", this.props);
    return (
      <div>
        <div>Register Component</div>
        <form action="" onSubmit={this.handleRegisterSubmitForm(this.props)}>
          <input
            type="text"
            name="usernameInput"
            onChange={this.editRegisterHandler}
            placeholder="username"
            value={this.state.usernameInput}
          />
          <input
            type="password"
            name="passwordInput"
            onChange={this.editRegisterHandler}
            placeholder="password"
            value={this.state.passwordInput}
          />
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
