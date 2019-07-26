import { observable, action } from "mobx";
import axios from "axios";

export default class AuthStore {
  @observable isAuth = false;
  @observable userInfo = null;

  @action
  handleAuth = user_name => {
    return axios({
      method: "POST",
      url: `${process.env.REACT_APP_SERVER_PATH}/user`,
      data: { user_name }
    })
      .then(data => {
        console.log(data);
        this.userInfo = {
          user_name: data.data.user_name,
          user_seq: data.data.user_seq,
          user_desc: data.data.user_desc,
          user_profile: data.data.user_profile
        };
        this.isAuth = true;
        let auth = {
          user_seq: data.data.user_seq,
          token: data.data.token
        };
        localStorage.setItem("auth", JSON.stringify(auth));
      })
      .catch(err => {
        console.log(err);
      });
  };

  @action
  handleAuthCheck = () => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    return axios({
      method: "POST",
      url: `${process.env.REACT_APP_SERVER_PATH}/auth`,
      data: auth
    })
      .then(data => {
        console.log(data);
        if (data.data.result.indexOf("null") > 0) {
          this.isAuth = false;
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  @action
  handleGetUser = user_seq => {
    return axios({
      method: "GET",
      url: `${process.env.REACT_APP_SERVER_PATH}/user/${user_seq}`
    })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };
}
