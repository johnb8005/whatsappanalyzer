import React from "./_snowpack/pkg/react.js";
import Analysis from "./analysis/index.js";
import Loader from "./components/loader.js";
import FileUpload from "./components/file-upload.js";
import Icon from "./components/icon.js";
import "./App.css.proxy.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isAnalyzed: false,
      data: null
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  onChangeHandler = (event) => {
    this.setState({isLoading: true});
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = (a) => {
      const data = fileReader.result;
      const isAnalyzed = true;
      const isLoading = false;
      this.setState({data, isAnalyzed, isLoading});
    };
    fileReader.readAsText(file);
  };
  reset = () => {
    const isAnalyzed = false;
    this.setState({isAnalyzed});
  };
  renderBody() {
    const {data, isAnalyzed, isLoading} = this.state;
    if (isLoading) {
      return /* @__PURE__ */ React.createElement(Loader, null);
    }
    if (!isAnalyzed || !data) {
      return /* @__PURE__ */ React.createElement(FileUpload, {
        accept: ".txt",
        type: "file",
        name: "file",
        onChange: this.onChangeHandler
      });
    }
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
      onClick: () => this.reset()
    }, /* @__PURE__ */ React.createElement(Icon, {
      name: "arrow-left"
    }), " Reset")), /* @__PURE__ */ React.createElement(Analysis, {
      data
    }));
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "App"
    }, /* @__PURE__ */ React.createElement("header", {
      className: "App-header"
    }, /* @__PURE__ */ React.createElement("h1", null, "WhatsApp Chat Analyzer"), this.renderBody()));
  }
}
export default App;
