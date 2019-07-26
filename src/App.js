import React, { Component } from "react";

import { Router, Route } from "react-router-dom";
import { history } from "./history";

// component
import HeaderContainer from "./component/header";
import MainContainer from "./component/main";
import AuthContainer from "./component/auth";
import { inject, observer } from "mobx-react";

@inject(stores => ({
  isAuth: stores.auth.isAuth
}))
@observer
class App extends Component {
  render() {
    const { isAuth } = this.props;
    // console.log(isAuth);
    return (
      <Router history={history}>
        <Route path={"/"} component={HeaderContainer} />
        <Route
          exact
          path={"/"}
          component={isAuth ? MainContainer : AuthContainer}
        />
      </Router>
    );
  }
}

export default App;
