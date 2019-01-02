import React, { Component } from "react";
import Axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: "",
      passwordInput: ""
    };
  }
  editLoginHandler = e => {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleLoginSubmitForm = e => {
    e.preventDefault();
    console.log(e);
    // const username = this.state.usernameInput;
    // const password = this.state.passwordInput;
    const user = {
      usernameInput: this.state.usernameInput,
      passwordInput: this.state.passwordInput
    };
    // localStorage.setItem("user", username);
    // localStorage.setItem("password", password);
    console.log("login this", this);
    Axios.post("http://localhost:9000/users/login", user).then(response => {
      // console.log(response.data);
      localStorage.setItem("user", response.data);
    });
    this.props.login();
  };
  render() {
    return (
      <div>
        <div>Login Component</div>
        <form action="" onSubmit={this.handleLoginSubmitForm}>
          <input
            type="text"
            name="usernameInput"
            onChange={this.editLoginHandler}
            placeholder="username"
            value={this.state.usernameInput}
            required
          />
          <input
            type="password"
            name="passwordInput"
            onChange={this.editLoginHandler}
            placeholder="password"
            value={this.state.passwordInput}
            required
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
