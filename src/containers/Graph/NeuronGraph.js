import React from "react";
import Graph from "react-graph-vis";
import { connect } from "react-redux";
import { config } from "../../utils/config/options";
import Profile from "../../components/Profile/Profile";
import {
  setData,
  setCurrentNode,
  setCoordinate
} from "../../reducers/neighborsReducer/actions";
import { _getNodes, _getEdges, _getTreeSpacing } from "../../store/index";
import "../../App.css";

class NeuronGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNodeClicked: false,
      width:'',
      height:''

    };
  }

  
  componentDidMount() {
    this.props.setData();
    this.setState({
      // height:`${window.innerHeight}px`,
      height:`${window.innerHeight}px`,
      width:`${window.innerWidth}px`
    },()=>console.log(this.state))
    window.addEventListener("mousemove", this.onMouseMoveHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.onMouseMoveHandler);
  }

  onMouseMoveHandler = e =>{
    this.props.setCoordinate({
      x: e.pageX + 300 <= window.innerWidth ? e.pageX : e.pageX - 300,
      y: e.pageY - 150 <= window.innerHeight? e.pageY - 150 : e.pageY
    });
  }

  setCurrentNode = node => {
    this.props.setCurrentNode(node);
    this.setState({
      isNodeClicked: true
    });
  };

  onHoverNodeHandler = e => {
    const { node } = e;
    this.setCurrentNode(node);
  };

  onBlueHandler = () => this.setState({ isNodeClicked: false });

  onClickNode = e => {
    const { nodes } = e;
    if (nodes.length > 0) this.setCurrentNode(...nodes);
  };

  onClickOptions = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { nodes, edges, treeSpacing,hierarchical } = this.props;
    const height = `${window.innerHeight - 100}px`
    const width = `${window.innerWidth }px`
    const { isNodeClicked } = this.state;
    const options = {
      // height:height,
      // width:width,
      ...config,
      layout: {
        hierarchical: {
          enabled: hierarchical,
          nodeSpacing: treeSpacing
        }
      },
      physics: {
        enabled: !hierarchical
      }
    };
    return (
      <div style={{float:"right"}}>
{isNodeClicked ? <Profile /> : <div />}
<Graph
  graph={{ nodes: nodes, edges: edges }}
  options={options}
  events={{
    hoverNode: this.onHoverNodeHandler,
    blurNode: this.onBlueHandler,
    select: this.onClickNode
  }}
 style={{width:width,height:height}}/>
     </div>
    );
  }
}

const mapStateToProps = state => ({
  nodes: _getNodes(state),
  edges: _getEdges(state),

});

export default connect(
  mapStateToProps,
  { setData, setCurrentNode, setCoordinate }
)(NeuronGraph);
