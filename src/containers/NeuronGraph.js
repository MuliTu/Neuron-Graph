import React from "react";
import Graph from "react-graph-vis";
import "../App.css";
import Profile from "../components/Profile/Profile";
import { connect } from "react-redux";
import {
  setData,
  setCurrentNode,
  setCoordinate,
  testArrayLess
} from "../reducers/neighborsReducer/actions";
import { _getNodes, _getEdges } from "../store/index";

class NeuronGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNodeClicked: false
    };
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
      autoResize: true,
      layout: {
        hierarchical: false
      },
      edges: {
        width: 0.11,
      },
      height: "500px",
      physics: {
        enabled: true
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
  { setData, setCurrentNode, setCoordinate, testArrayLess }
)(NeuronGraph);
