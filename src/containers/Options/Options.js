import React, { Component } from 'react'
import './style.scss'
import { ADD_TEACHER, REMOVE_TEACHER, ADD_STUDENT, REMOVE_STUDENT, ADD_COURSE, REMOVE_COURSE } from '../../reducers/neighborsReducer/types';
import { connect } from 'react-redux';
class Options extends Component {
    
    removeTeacherHandler = () => this.props.removeTeacher()
    
    addTeacherHandler = () =>this.props.addTeacher()
  
    removeStudentHandler = () => this.props.removeStudent()

    addStudentHandler = () => this.props.addStudent()
    
    addCourseHandler = () => this.props.addCourse();

    removeCourseHandler = () => this.props.removeCourse()
    render() {
      console.log('options,',this.props)
    return (
      <div className='options'>
        <div>
            <p>Teachers</p>
            <button onClick={this.addTeacherHandler}> + </button>
            <button onClick={this.removeTeacherHandler}> - </button>
        </div>
        <div>
            <p>Students</p>
            <button onClick={this.addStudentHandler}> + </button>
            <button onClick={this.removeStudentHandler}> - </button>
        </div>
        <div>
            <p>Courses</p>
            <button onClick={this.addCourseHandler}> + </button>
            <button onClick={this.removeCourseHandler}> - </button>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
    return {
      addTeacher: () => dispatch({ type: ADD_TEACHER }),
      removeTeacher: () => dispatch({ type: REMOVE_TEACHER }),
      
      addStudent: () => dispatch({type:ADD_STUDENT}),
      removeStudent: () => dispatch({type:REMOVE_STUDENT}),

      addCourse:() =>dispatch({type:ADD_COURSE}),
      removeCourse:() =>dispatch({type:REMOVE_COURSE})
    }
  }
export default connect(null,mapDispatchToProps)(Options)
