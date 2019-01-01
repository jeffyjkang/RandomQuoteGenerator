import React, { Component } from "react";

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
    const username = this.state.usernameInput;
    const password = this.state.passwordInput;
    localStorage.setItem("user", username);
    localStorage.setItem("password", password);
    // window.location.reload();
    console.log("login this", this);
    // this.props.history.push("/");
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
          />
          <input
            type="password"
            name="passwordInput"
            onChange={this.editLoginHandler}
            placeholder="password"
            value={this.state.passwordInput}
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
