import React, { Component } from "react";
import "./style.scss";
import {
  ADD_TEACHER,
  REMOVE_TEACHER,
  ADD_STUDENT,
  REMOVE_STUDENT,
  ADD_COURSE,
  REMOVE_COURSE
} from "../../reducers/neighborsReducer/types";
import { connect } from "react-redux";
import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
class Options extends Component {

  removeTeacherHandler = () => this.props.removeTeacher();

  addTeacherHandler = () => this.props.addTeacher();

  removeStudentHandler = () => this.props.removeStudent();

  addStudentHandler = () => this.props.addStudent();

  addCourseHandler = () => this.props.addCourse();

  removeCourseHandler = () => this.props.removeCourse();
  render() {
    return (
      <div className={this.props.isOpen? 'open_window':'close_window'}>
        <h3>Options</h3>
        <div className="options">
          <div className='col'>
            <p>Teachers</p>
            <Button label={"+"} onClick={this.addTeacherHandler} />
            <Button label={"-"} onClick={this.removeTeacherHandler} />
          </div>
          <div className='col'>
            <p>Students</p>
            <Button label={"+"} onClick={this.addStudentHandler} />
            <Button label={"-"} onClick={this.removeStudentHandler} />
          </div>
          <div className='col'>
            <p>Courses</p>
            <Button label={"+"} onClick={this.addCourseHandler} />
            <Button label={"-"} onClick={this.removeCourseHandler} />
          </div>
          <div className='col'>
            <p>Hierarchical</p>
            <Checkbox onChange={this.props.onClickHierarchical} />  
          </div>
          <div className='col'>
            <p>Tree Spacing (on Hierarchical)</p>
            <input type={'number'} value={this.props.treeSpacing} onChange={this.props.onChangeTreeSpacing}/>
            </div>
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
    removeCourse: () => dispatch({ type: REMOVE_COURSE })
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Options);
