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
      hierarchical: false,
      width:'',
      height:''

    };
  }

  onClickHierarchical = () =>
    this.setState({ hierarchical: !this.state.hierarchical }, () =>
      this.forceUpdate()
    );

  componentDidMount() {
    this.props.setData();
    this.setState({
      height:(window.innerHeight - 100).toString(),
      width:window.innerWidth.toString()
    })
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
    const { nodes, edges, treeSpacing } = this.props;
    const { isNodeClicked, height, width, hierarchical } = this.state;
    const options = {
      ...config,
      height:height,
      width:width,
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
               {/* <MenuButton onClick={this.onClickOptions} isClicked={isOpen} /> */}

       {/* <Options
          onClickHierarchical={this.onClickHierarchical}
          treeSpacing={treeSpacing}
          onChangeTreeSpacing={this.onChangeTreeSpacingHandler}
          isOpen={isOpen}
        /> */}
{isNodeClicked ? <Profile /> : <div />}
<Graph
  graph={{ nodes: nodes, edges: edges }}
  options={options}
  events={{
    hoverNode: this.onHoverNodeHandler,
    blurNode: this.onBlueHandler,
    select: this.onClickNode
  }}
/>
     </div>
    );
  }
}

const mapStateToProps = state => ({
  nodes: _getNodes(state),
  edges: _getEdges(state),
  treeSpacing: _getTreeSpacing(state)
});

export default connect(
  mapStateToProps,
  { setData, setCurrentNode, setCoordinate }
)(NeuronGraph);
