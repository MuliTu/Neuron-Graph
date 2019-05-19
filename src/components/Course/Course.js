import React from "react";
import teachers from "../../utils/data/teachers.json";
import students from "../../utils/data/stud.json";
import ProfileRow from '../UI/ProfileRow/ProfileRow'
import "./style.scss";

const Course = ({ profile }) => {
  const teachingCourse = () => {
    return teachers
      .filter(t =>
        t.courses.some(curs => profile.cid.toString() === curs.toString())
      )
      .map(t => t.full_name);
  };
  const takingThisClass = () => {
    return students
      .filter(s =>
        s.courses.some(course => profile.cid.toString() === course.toString())
      )
      .map(res => `${res.first_name} ${res.last_name}`);
  };
  return (
    <div className="course">
      <ProfileRow labelName={'Course name'} data={profile.name} />
      <hr />
      <div>
        <b>&ensp;Teaching this course:</b>
        {teachingCourse().map((x, idx) => (
          <div key={idx}>
            &ensp;&ensp;{idx + 1}. {x}
          </div>
        ))}
      </div>
      <div>
        <b>&ensp;Students in course:</b>
        {takingThisClass().map((student, index) => (
          <div key={index}>
            &ensp;&ensp;{index + 1}. {student}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Course;
