import React from "react";
import { UploadModal } from "../common/Modals";

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

const Header = props => {
  const { handlePhoto, handleModal, handleAddPhoto } = props;
  return (
    <div>
      <UploadModal handleAddPhoto={handleAddPhoto} />
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton onClick={handleModal("upload", true)}>
            {/* <label htmlFor="photoUpload"> */}
            <PhotoCamera />
            {/* </label> */}
            {/* <input
              type="file"
              id="photoUpload"
              style={{ display: "none" }}
              onChange={handlePhoto}
            /> */}
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
