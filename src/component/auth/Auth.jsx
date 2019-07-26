import React from "react";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import { LoginDiv } from "../styled";

const Auth = props => {
  const { user_name, handleChange, handleAuthSubmit, handleKeyPress } = props;
  return (
    <Container fixed>
      <LoginDiv>
        <Input
          placeholder="Email 입력하세요."
          value={user_name}
          onChange={handleChange("user_name")}
          onKeyPress={handleKeyPress}
        />
        <Button variant="outlined" onClick={handleAuthSubmit}>
          Send
        </Button>
      </LoginDiv>
    </Container>
  );
};

export default Auth;
