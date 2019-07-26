import { observable, action } from "mobx";
import axios from "axios";

export default class CommonStore {
  @observable modals = {};

  @action
  handleModal = (tar, status) => () => {
    this.modals[tar] = status;
    // console.log(this.modals[tar], this.modals);
  };
}
