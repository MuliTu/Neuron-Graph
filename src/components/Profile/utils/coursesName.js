import curses from '../../../utils/data/curses.json'
export const getCourseName = (cid)=>{
return curses.filter(course => course.cid.toString() === cid.toString())[0].name
}
