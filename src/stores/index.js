// store
import AuthStore from "./AuthStore";
import PhotoStore from "./PhotoStore";
import CommonStore from "./CommonStore";

class RootStore {
  constructor() {
    this.auth = new AuthStore(this);
    this.photo = new PhotoStore(this);
    this.common = new CommonStore(this);
  }
}

export default RootStore;
