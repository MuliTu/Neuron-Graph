import students from "../../utils/data/stud.json";
import teachers from "../../utils/data/teachers.json";
import curses from "../../utils/data/curses.json";
import { SET_NODES, SET_EDGES , SET_CURRENT_NODE, SET_COORDINATE } from "./types";

export const setData = state => dispatch => {
    setNodes(dispatch)
    
};

const setNodes = dispatch => {
  const list = [...teachers, ...students, ...curses];
  const indexForGraph = list.map((value, index) => ({ id: index, ...value }));
  const indexedTeachers = indexForGraph.slice(0, teachers.length).map(data => ({
    ...data,
    label: data.full_name,
    color: "red",
    shape: "circularImage",
    size: 30,
    borderWidth: 4.5,
    borderWidthSelected: 20,
  }));
  const indexedStudents = indexForGraph.slice(teachers.length, students.length+teachers.length).map(data => ({
    ...data,
    label: `${data.first_name} ${data.last_name}`,
    shape: "circularImage",
    size: 20,
    borderWidth: 2.5,
    borderWidthSelected: 20,
    
  }))
  ;
  const indexedCourses = indexForGraph.slice( students.length+teachers.length, indexForGraph.length).map(data => ({
    ...data,
    label: data.name,
    shape: "hexagon",
    color:'green',
    size: 20,
    borderWidth: 2.5,
    borderWidthSelected: 20,
    margin:20,
  }));
  dispatch({
    type: SET_NODES,
    payload: [...indexedTeachers,...indexedStudents,...indexedCourses]
  });
  setEdges(indexedTeachers,'courses',indexedCourses,'cid','Teaching',dispatch)
  setEdges(indexedStudents,'courses',indexedCourses,'cid','Study',dispatch)
};

export const setEdges = ( parents,parentProp,children,childrenProp,label='',dispatch) => {
  const connections = [];
  for (const parent of parents) {
    for (const child of children) {
      if (parent[parentProp].some(prop => prop.toString() === child[childrenProp].toString() ))
       {
        connections.push({
          from: parent.id,
          to: child.id,
          label:label,

        });
      }
    }
  }
dispatch({
    type:SET_EDGES,
    payload:connections
})
};

export const setCurrentNode = node => dispatch =>{
dispatch({
    type:SET_CURRENT_NODE,
    payload:node
})
}

export const setCoordinate = obj => dispatch => {
    dispatch({
        type:SET_COORDINATE,
        payload:{
            x:obj.x,
            y:obj.y
        }
    })

}

export const testArrayLess = state => dispatch => {
    dispatch({
        type:'LESS'
    })
}