import React from "react";
import NeuronGraph from "./containers/NeuronGraph";

class App extends React.Component {
  render() {
    return <div className='App'>
      <h1>School Diagram</h1>
      <NeuronGraph />
    </div>;
  }
}

export default App;
