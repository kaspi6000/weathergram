import React, { Component } from "react";
import Main from "./Main";

import { inject, observer } from "mobx-react";

@inject(stores => ({
  userInfo: stores.auth.userInfo,
  handleGetPhoto: stores.photo.handleGetPhoto,
  photoList: stores.photo.photoList
}))
@observer
class Maincontainer extends Component {
  componentDidMount() {
    const { handleGetPhoto } = this.props;

    handleGetPhoto();
  }
  render() {
    const { photoList } = this.props;
    console.log(this.props.userInfo.user_name);
    return <Main photoList={photoList} />;
  }
}

export default Maincontainer;
