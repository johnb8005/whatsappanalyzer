import React from "./_snowpack/pkg/react.js";
import Analysis from "./analysis/index.js";
import Loader from "./components/loader.js";
import FileUpload from "./components/file-upload.js";
import Icon from "./components/icon.js";
import "./App.css.proxy.js";
const App = () => {
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isAnalyzed, setIsAnalyzed] = React.useState(false);
  const onChangeHandler = (event) => {
    setIsLoading(true);
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = (a) => {
      setIsAnalyzed(true);
      setIsLoading(false);
      setData(fileReader.result);
    };
    fileReader.readAsText(file);
  };
  const renderBody = () => {
    if (isLoading) {
      return /* @__PURE__ */ React.createElement(Loader, null);
    }
    if (!isAnalyzed || !data) {
      return /* @__PURE__ */ React.createElement(FileUpload, {
        accept: ".txt",
        type: "file",
        name: "file",
        onChange: onChangeHandler
      });
    }
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
      onClick: () => setIsAnalyzed(false)
    }, /* @__PURE__ */ React.createElement(Icon, {
      name: "arrow-left"
    }), " Reset")), /* @__PURE__ */ React.createElement(Analysis, {
      data
    }));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "App-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "WhatsApp Chat Analyzer"), renderBody()));
};
export default App;
