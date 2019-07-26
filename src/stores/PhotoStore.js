import { observable, action } from "mobx";
import axios from "axios";

export default class PhotoStore {
  @observable photoList = null;
  @observable auth;

  constructor(RootStore) {
    this.auth = RootStore.auth;
  }

  @action
  handleAddPhoto = (file, photo_contents, photo_location, tags) => {
    // @param photo_contents
    // @param photo_binary
    // @param photo_location
    // @param user_seq
    const { userInfo } = this.auth;

    let form_Data = new FormData();
    form_Data.append("file", file);

    const data = {
      file: form_Data,
      photo_contents,
      photo_location,
      tags,
      user_seq: userInfo.user_seq
    };
    console.log(data);
    return axios({
      method: "POST",
      url: `${process.env.REACT_APP_SERVER_PATH}/photo`,
      data: data
    })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  @action
  handleGetPhoto = () => {
    return axios({
      method: "GET",
      url: `${process.env.REACT_APP_SERVER_PATH}/photo`
    })
      .then(data => {
        console.log(data);
        this.photoList = data.data;
      })
      .catch(err => {
        console.log(err);
      });
  };
}
