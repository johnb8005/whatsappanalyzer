import React from "react";

import Analysis from "./analysis/index";
import Loader from "./components/loader";
import FileUpload from "./components/file-upload";
import Icon from "./components/icon";

//import sampleData from './sampleData.js';

import "./App.css";

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

    // this function calls `onloadend`
    fileReader.readAsText(file);
  };

  const renderBody = () => {
    if (isLoading) {
      return <Loader />;
    }

    if (!isAnalyzed || !data) {
      return (
        <FileUpload
          accept=".txt"
          type="file"
          name="file"
          onChange={onChangeHandler}
        />
      );
    }

    // for dev
    // const data = sampleData;

    return (
      <div>
        <p>
          <button onClick={() => setIsAnalyzed(false)}>
            <Icon name="arrow-left" /> Reset
          </button>
        </p>
        <Analysis data={data} />
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>WhatsApp Chat Analyzer</h1>
        {renderBody()}
      </header>
    </div>
  );
};

export default App;
