import React from "react";
import NeuronGraph from "./containers/Graph/NeuronGraph";
import Options from "./containers/Options/Options";
import MenuButton from "./components/UI/menuButton/MenuButton";
import {_getTreeSpacing } from './store/index'
import { connect } from "react-redux";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hierarchical: false,
      isOpen: false
    };
  }
  onClickHierarchical = () => {
  this.setState({ hierarchical: !this.state.hierarchical }, 
    () => this.forceUpdate()
  );}

  onClickOptions = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen, hierarchical } = this.state;
    return (
      <div className="App">
        <div className='flex'>
          <div className='option_section'>
            <Options
              onClickHierarchical={this.onClickHierarchical}
              treeSpacing={this.props.treeSpacing}
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
              <h3>School Graph</h3>
              </div>
            </div>
            <div>
              <NeuronGraph hierarchical={hierarchical} treeSpacing={this.props.treeSpacing}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state =>({
  treeSpacing: _getTreeSpacing(state)
})

export default connect(mapStateToProps)(App)
