import React from "react";
import Graph from "react-graph-vis";
import "../App.css";
import Profile from "../components/Profile/Profile";
import Options from './Options/Options'
import { connect } from "react-redux";
import {
  setData,
  setCurrentNode,
  setCoordinate,
} from "../reducers/neighborsReducer/actions";
import { _getNodes, _getEdges } from "../store/index";

class NeuronGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNodeClicked: false,
      hierarchical:false,
      treeSpacing:100
    };
  }

  onClickHierarchical = () =>{
    this.setState({
      hierarchical: !this.state.hierarchical
    },()=>this.forceUpdate())
  }
  componentDidMount() {
    this.props.setData();
    window.addEventListener("mousemove", this.onMouseMoveHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.onMouseMoveHandler);
  }

  onMouseMoveHandler = e => {
    this.props.setCoordinate({
      x: e.pageX,
      y: e.pageY + 20
    });
  };

  setCurrentNode = (node)=>{
    this.props.setCurrentNode(node);
    this.setState({
      isNodeClicked: true
    })
  }

  onHoverNodeHandler = event => {
    const { node } = event;
    this.setCurrentNode(node)
  };

  onBlueHandler = () => this.setState({ isNodeClicked: false });
  
  onClickNode = e => {
   
    const {nodes} = e
    if(nodes.length > 0)
    this.setCurrentNode(...nodes)
  }

  render() {
    const { nodes, edges } = this.props;
    const { isNodeClicked } = this.state;
    const options = {
      nodes: {
        size: 5,
        borderWidth: 5,
        shadow: {
          enabled: true
        }
      },
      autoResize: false,
      layout: {
        hierarchical:{
          enabled:this.state.hierarchical,
          nodeSpacing:this.state.treeSpacing
        } 
      },
      edges: {
        width: 1.11,
      },
      height: "500px",
      physics: {
        enabled: !this.state.hierarchical
      },
      interaction: {
        hover: true,
        hoverConnectedEdges: true,
        selectable: true,
        selectConnectedEdges: true,
        zoomView: true,
        dragView: true
      }
    };
    return (
      <div>
        Hierarchical
        <input type={'checkbox'} onClick={this.onClickHierarchical}/>
        <input type='number' onChange={e => this.setState({treeSpacing:parseInt(e.target.value)}) } value={this.state.treeSpacing}/>

        <Options/>
        {isNodeClicked ? <Profile /> : <div />}
        {edges ? (
          <Graph
            graph={{ nodes: nodes, edges: edges }}
            options={options}
            events={{
              hoverNode: this.onHoverNodeHandler,
              blurNode: this.onBlueHandler,
              select:this.onClickNode
            }}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  nodes: _getNodes(state),
  edges: _getEdges(state)
});

export default connect(
  mapStateToProps,
  { setData, setCurrentNode, setCoordinate}
)(NeuronGraph);