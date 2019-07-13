import React from "react";

// material
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
// icon
import PhotoCamera from "@material-ui/icons/PhotoCameraOutlined";
import Favorite from "@material-ui/icons/FavoriteBorderOutlined";
import Account from "@material-ui/icons/AccountCircleOutlined";

// styled component
import { Title, RightIcon } from "../styled";

const Header = () => {
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton>
            <PhotoCamera />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            <Title>Weathergram</Title>
          </Typography>
          <RightIcon index={1}>
            <IconButton>
              <Favorite />
            </IconButton>
          </RightIcon>
          <RightIcon index={2}>
            <IconButton>
              <Account />
            </IconButton>
          </RightIcon>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
