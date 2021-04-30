import React from "../_snowpack/pkg/react.js";
export default class Icon extends React.Component {
  render() {
    const {name} = this.props;
    const className = `fa fa-${name}`;
    return /* @__PURE__ */ React.createElement("i", {
      className
    });
  }
}
;
