import React, { Component } from "react";

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
    const username = this.state.usernameInput;
    const password = this.state.passwordInput;
    localStorage.setItem("user", username);
    localStorage.setItem("password", password);
    properties.registerNewUser(this.state);
    // window.location.reload();
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
