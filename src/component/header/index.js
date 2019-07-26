import React, { Component } from "react";
import Header from "./Header";

import { inject, observer } from "mobx-react";

@inject(stores => ({
  handleAddPhoto: stores.photo.handleAddPhoto,
  handleAuthCheck: stores.auth.handleAuthCheck,
  handleModal: stores.common.handleModal
}))
@observer
class HeaderContainer extends Component {
  componentDidMount() {
    const { handleAuthCheck, handleGetUser } = this.props;
    handleAuthCheck();
  }
  handlePhoto = e => {
    const { handleAddPhoto } = this.props;
    // console.log("photo");
    console.log(e.target.files[0]);
    handleAddPhoto(e.target.files[0]);
    // let reader = new FileReader();
    // reader.readAsDataURL(e.target.files[0]);
    // reader.onload = function(e) {
    //   // console.log(reader.result);

    //   handleAddPhoto(reader.result);
    // };
  };
  render() {
    const { handlePhoto } = this;
    const { handleModal, handleAddPhoto } = this.props;
    return <Header handleAddPhoto={handleAddPhoto} handleModal={handleModal} />;
  }
}

export default HeaderContainer;
