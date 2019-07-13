import React from "react";

import { Router, Route } from "react-router-dom";
import { history } from "./history";

// component
import HeaderContainer from "./component/header";
import MainContainer from "./component/main";

function App() {
  return (
    <Router history={history}>
      <Route path={"/"} component={HeaderContainer} />
      <Route exact path={"/"} component={MainContainer} />
    </Router>
  );
}

export default App;
