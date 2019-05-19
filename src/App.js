import React from "react";
import NeuronGraph from "./containers/Graph/NeuronGraph";
import Options from "./containers/Options/Options";
import MenuButton from "./components/UI/menuButton/MenuButton";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  onClickOptions = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;
    return (
      <div className="App">
        <div style={{ display: "flex" }}>
          <div className='option_section'>
            <Options
              onClickHierarchical={this.onClickHierarchical}
              treeSpacing={"1"}
              onChangeTreeSpacing={this.onChangeTreeSpacingHandler}
              isOpen={isOpen}
            />
          </div>
          <div style={{width:'100%'}}>
            <div className='top_wrapper'>
              <div className='center no-margin'>
              <MenuButton onClick={this.onClickOptions} isClicked={isOpen} />
                </div>
                <div className='center'>
              <h1>School Graphe</h1>
              </div>
            </div>
            <div style={{ float: "right" }}>
              <NeuronGraph />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
