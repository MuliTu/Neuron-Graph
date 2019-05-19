import React from "react";
import Graph from "react-graph-vis";
import { connect } from "react-redux";
import { config } from "../../utils/config/options";
import Profile from "../../components/Profile/Profile";
import Options from "../Options/Options";
import MenuButton from "../../components/UI/menuButton/MenuButton";
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
      isOpen: false
    };
  }

  onClickHierarchical = () =>
    this.setState({ hierarchical: !this.state.hierarchical }, () =>
      this.forceUpdate()
    );

  componentDidMount() {
    this.props.setData();
    window.addEventListener("mousemove", this.onMouseMoveHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.onMouseMoveHandler);
  }

  onMouseMoveHandler = e =>
    this.props.setCoordinate({
      x: e.pageX,
      y: e.pageY + 20
    });

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
    const { isNodeClicked, isOpen, hierarchical } = this.state;
    const options = {
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
      <div>
        <MenuButton onClick={this.onClickOptions} isClicked={isOpen} />

        <Options
          onClickHierarchical={this.onClickHierarchical}
          treeSpacing={treeSpacing}
          onChangeTreeSpacing={this.onChangeTreeSpacingHandler}
          isOpen={isOpen}
        />

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