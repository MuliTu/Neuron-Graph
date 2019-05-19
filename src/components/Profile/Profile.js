import React from "react";
import "./style.scss";
import {connect} from 'react-redux'
import {_getXpage, _getYpage, _getCurrentNode} from '../../store/index'
import Student from "../Student/Student";
import Teacher from "../Teacher/Teacher";
import Course from "../Course/Course";
import FloatCard from "../FloatCard/FloatCard";

class Profile extends React.Component {
  
  selectComponentByType = () => {
    const {profile} = this.props
    if(profile.type !== undefined)
    switch (profile.type) {
      case "student":
        return <Student profile={profile} />;
      case "teacher":
        return <Teacher profile={profile} />;
      case "course":
        return <Course profile={profile} />;
      default:
    }
  };

  render() {
    const {xPage,yPage} = this.props
    return (
      <FloatCard top={yPage} left={xPage}>{this.selectComponentByType()}</FloatCard>
    );
  }
}

const mapStateToProps = state => ({
  profile: _getCurrentNode(state),
  xPage: _getXpage(state),
  yPage: _getYpage(state)
});
 
export default connect(mapStateToProps)(Profile);