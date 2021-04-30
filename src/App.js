import React from "react";

import Analysis from "./analysis/index";
import Loader from "./components/loader";
import FileUpload from "./components/file-upload";
import Icon from "./components/icon";

//import sampleData from './sampleData.js';

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      isAnalyzed: false,
      data: null,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler = (event) => {
    this.setState({ isLoading: true });

    const file = event.target.files[0];

    const fileReader = new FileReader();
    fileReader.onloadend = (a) => {
      const data = fileReader.result;
      const isAnalyzed = true;
      const isLoading = false;

      console.log(data);

      this.setState({ data, isAnalyzed, isLoading });
    };

    // this function calls `onloadend`
    fileReader.readAsText(file);
  };

  reset = () => {
    const isAnalyzed = false;

    this.setState({ isAnalyzed });
  };

  renderBody() {
    const { data, isAnalyzed, isLoading } = this.state;

    if (isLoading) {
      return <Loader />;
    }

    if (!isAnalyzed || !data) {
      //return <input accept=".txt" type="file" name="file" onChange={this.onChangeHandler}/>;
      return (
        <FileUpload
          accept=".txt"
          type="file"
          name="file"
          onChange={this.onChangeHandler}
        />
      );
    }

    // for dev
    // const data = sampleData;

    return (
      <div>
        <p>
          <button onClick={() => this.reset()}>
            <Icon name="arrow-left" /> Reset
          </button>
        </p>
        <Analysis data={data} />
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>WhatsApp Chat Analyzer</h1>
          {this.renderBody()}
        </header>
      </div>
    );
  }
}

export default App;
