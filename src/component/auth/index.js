import React, { Component } from "react";
import Auth from "./Auth";
import { inject, observer } from "mobx-react";

@inject(stores => ({
  handleAuth: stores.auth.handleAuth
}))
@observer
class AuthContainer extends Component {
  state = {
    user_name: "kaspi6000@gmail.com"
  };

  handleChange = name => e => {
    this.setState({ [name]: e.target.value });
  };

  handleKeyPress = e => {
    console.log(e.keyCode);
  };

  handleAuthSubmit = () => {
    const { handleAuth } = this.props;
    const { user_name } = this.state;
    handleAuth(user_name);
  };

  render() {
    const { user_name } = this.state;
    const { handleChange, handleAuthSubmit, handleKeyPress } = this;
    // console.log(user_name);
    return (
      <Auth
        handleChange={handleChange}
        user_name={user_name}
        handleAuthSubmit={handleAuthSubmit}
        handleKeyPress={handleKeyPress}
      />
    );
  }
}

export default AuthContainer;
