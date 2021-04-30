import React from "../_snowpack/pkg/react.js";
import Icon from "./icon.js";
export default class FileUpload extends React.Component {
  onChange = (e) => {
    this.props.onChangeHandler(e);
  };
  render() {
    const name = this.props.name || "file";
    return /* @__PURE__ */ React.createElement("div", {
      className: "file-upload-wrapper"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "file-upload"
    }, /* @__PURE__ */ React.createElement("input", {
      accept: this.props.accept,
      type: "file",
      name,
      onChange: this.props.onChange
    }), /* @__PURE__ */ React.createElement(Icon, {
      name: "arrow-up"
    })));
  }
}
