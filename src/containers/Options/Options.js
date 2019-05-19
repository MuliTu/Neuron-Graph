import React, { Component } from "react";
import "./style.scss";
import Option from "../../components/UI/Option/Option";
import {
  ADD_TEACHER,
  REMOVE_TEACHER,
  ADD_STUDENT,
  REMOVE_STUDENT,
  ADD_COURSE,
  REMOVE_COURSE,
  CHANGE_TREE_SPACING
} from "../../reducers/neighborsReducer/types";
import { connect } from "react-redux";
import Checkbox from "../../components/UI/Checkbox/Checkbox";
import Input from "../../components/UI/Input/Input";
import { _getTreeSpacing } from "../../store";
class Options extends Component {
  removeTeacherHandler = () => this.props.removeTeacher();

  addTeacherHandler = () => this.props.addTeacher();

  removeStudentHandler = () => this.props.removeStudent();

  addStudentHandler = () => this.props.addStudent();

  addCourseHandler = () => this.props.addCourse();

  removeCourseHandler = () => this.props.removeCourse();

  changeHierarchicalHandler = () => this.props.onClickHierarchical();

  changeTreeSpacingHandler = e =>
    this.props.changeTreeSpacing(parseInt(e.target.value));

  render() {
    return (
      <div className={this.props.isOpen ? "open_window" : "close_window"}>
        <h3>Options</h3>
        <div className="options">
          <Option
            label={"Teachers"}
            onClickPlus={this.addTeacherHandler}
            onClickMinus={this.removeTeacherHandler}
          />
          <Option
            label={"Students"}
            onClickPlus={this.addStudentHandler}
            onClickMinus={this.removeStudentHandler}
          />
          <Option
            label={"Courses"}
            onClickPlus={this.addCourseHandler}
            onClickMinus={this.removeCourseHandler}
          />
          <Checkbox
            label={"Hierarchical"}
            onChange={this.changeHierarchicalHandler}
          />
          <Input
            label={"Tree Spacing (on Hierarchical)"}
            value={this.props.treeSpacingValue}
            onChange={this.changeTreeSpacingHandler}
          />
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addTeacher: () => dispatch({ type: ADD_TEACHER }),
    removeTeacher: () => dispatch({ type: REMOVE_TEACHER }),

    addStudent: () => dispatch({ type: ADD_STUDENT }),
    removeStudent: () => dispatch({ type: REMOVE_STUDENT }),

    addCourse: () => dispatch({ type: ADD_COURSE }),
    removeCourse: () => dispatch({ type: REMOVE_COURSE }),

    changeTreeSpacing: num =>
      dispatch({
        type: CHANGE_TREE_SPACING,
        payload: num
      })
  };
};

const mapStateToProps = state => ({
  treeSpacingValue: _getTreeSpacing(state)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);
