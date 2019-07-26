import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { inject, observer } from "mobx-react";

@inject(stores => ({
  handleModal: stores.common.handleModal,
  modals: stores.common.modals
}))
@observer
class UploadModal extends Component {
  state = {
    contents: "",
    location: "",
    tags: "",
    file: null,
    fileName: ""
  };
  componentDidMount() {
    const { handleModal } = this.props;
    handleModal("upload", false);
  }

  handlePhoto = () => {
    const { contents, location, tags, file } = this.state;
    const { handleAddPhoto } = this.props;
    handleAddPhoto(file, contents, location, tags);
  };

  handleChange = name => e => {
    if (name === "fileName") {
      console.log(e.target.files[0]);
      this.setState({ file: e.target.files[0] });
      this.setState({ fileName: e.target.files[0].name });
      return;
    }
    this.setState({ [name]: e.target.value });
  };
  render() {
    const { modals, handleModal } = this.props;
    const { contents, location, tags, fileName } = this.state;
    return (
      <Dialog
        open={typeof modals.upload === "undefined" ? false : modals.upload}
        // onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">사진 올리기</DialogTitle>
        <DialogContent>
          <DialogContentText>
            나의 동네의 날씨를 자랑하세요 {"> <"}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="contents"
            label="Contents"
            type="text"
            value={contents}
            onChange={this.handleChange("contents")}
            fullWidth
          />
          <TextField
            margin="dense"
            id="location"
            label="location"
            type="text"
            value={location}
            onChange={this.handleChange("location")}
            fullWidth
          />
          <TextField
            margin="dense"
            id="tags"
            label="tags"
            type="text"
            value={tags}
            onChange={this.handleChange("tags")}
            fullWidth
          />
          <TextField
            margin="dense"
            id="weather"
            label="날씨 사진"
            type="file"
            // value={fileName}
            onChange={this.handleChange("fileName")}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModal("upload", false)} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handlePhoto} color="primary">
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default UploadModal;
