import curses from '../../../utils/data/curses.json'
export const getCurseName = (cid)=>{
return curses.filter(course => course.cid.toString() === cid.toString())[0].name
}
