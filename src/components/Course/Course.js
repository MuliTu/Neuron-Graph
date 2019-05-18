import React from 'react'
import teachers from '../../utils/data/teachers.json'

const  Course = ({profile})=> {
    const teachingCource = () =>{
     return teachers.filter(t => t.courses.some(curs => profile.cid.toString() === curs.toString())).map(t => t.full_name)
    }
  return (
    <div>
      <div>Course name: {profile.name}</div>
      <div>Teaching this course: {
        teachingCource().map((x,idx)=>(<div>{idx + 1}. {x}</div>))
      }
      </div>
    </div>
  )
}
export default Course
