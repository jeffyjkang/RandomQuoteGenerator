import React, { Component } from "react";
import Register from "./Register";
import Login from "./Login";

const Authenticate = App =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [],
        loggedIn: false
      };
    }
    componentDidMount() {
      if (localStorage.getItem("user")) {
        console.log(
          "localstorage.getItem('user')=",
          localStorage.getItem("user")
        );
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    }
    //push new user from register component
    registerNewUser = newUser => {
      console.log("newUser", newUser.usernameInput, newUser.passwordInput);
      const registerUser = {
        username: newUser.usernameInput,
        password: newUser.passwordInput
      };
      // because of the window.location.reload() after users is pushed in
      // state of users gets reset to empty array, must use routes to
      // correct route instead of reload
      this.setState({ users: [...this.state.users, registerUser] });
      console.log("this.state in auth", this.state);
    };
    render() {
      if (this.state.loggedIn) return <App />;
      return (
        <div>
          <Register registerNewUser={this.registerNewUser} />
          <Login />
        </div>
      );
    }
  };

export default Authenticate;