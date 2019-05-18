import {
  SET_NODES,
  SET_EDGES,
  SET_CURRENT_NODE,
  SET_COORDINATE,
  REMOVE_TEACHER,
  ADD_TEACHER,
  ADD_STUDENT,
  REMOVE_STUDENT,
  ADD_COURSE,
  REMOVE_COURSE
} from "./types";
import * as selectors from "./selectors";
import { statement } from "@babel/template";

const init = {
  teachers: [],
  tempTeachers: [],
  students: [],
  tempStudents: [],
  courses: [],
  tempCourses:[],
  nodes: [],
  edges: []
};

export default function(state = init, action) {
  switch (action.type) {
    case SET_NODES:
      const { teachers, students, courses } = action.payload;
      return {
        ...state,
        teachers: teachers,
        tempTeachers: teachers,
        students: students,
        tempStudents: students,
        courses: courses,
        tempCourses:courses
      };

    case SET_EDGES:
      return {
        ...state,
        edges: [...action.payload, ...state.edges],
        nodes: [...state.tempTeachers, ...state.tempStudents, ...state.tempCourses]
      };

    case SET_CURRENT_NODE:
      return { ...state, current: state.nodes[action.payload] };

    case SET_COORDINATE:
      return { ...state, xPage: action.payload.x, yPage: action.payload.y };

    case REMOVE_TEACHER:
      state.tempTeachers = state.tempTeachers.slice(0,state.tempTeachers.length - 1);
      return {
        ...state,
        nodes: [...state.tempTeachers, ...state.tempStudents, ...state.tempCourses]
      };
      case REMOVE_STUDENT:
      state.tempStudents = state.tempStudents.slice(0, state.tempStudents.length - 1);
      return {
        ...state,
        nodes: [...state.tempTeachers, ...state.tempStudents, ...state.tempCourses]
      };

      case REMOVE_COURSE:
      state.tempCourses = state.tempCourses.slice(0, state.tempCourses.length - 1);
      return {
        ...state,
        nodes: [...state.tempTeachers, ...state.tempStudents, ...state.tempCourses]
      };

    case ADD_TEACHER:
      state.tempTeachers = state.teachers.slice(0, state.tempTeachers.length + 1);
      return { ...state, nodes: [...state.tempTeachers, ...state.tempStudents, ...state.tempCourses]};

    case ADD_STUDENT:
      state.tempStudents = state.students.slice(0, state.tempStudents.length + 1);
      return {
        ...state,
        nodes: [...state.tempTeachers, ...state.tempStudents, ...state.tempCourses]
      };

      case ADD_COURSE:
      state.tempCourses = state.courses.slice(0, state.tempCourses.length + 1)
      return {
        ...state,
        nodes: [...state.tempTeachers, ...state.tempStudents, ...state.tempCourses]
      };


    default:
      return state;
  }
}

export const getNodes = state => {
  return selectors.getNodes(state);
};
export const getEdges = state => {
  return selectors.getEdges(state);
};
export const getXPage = state => {
  return selectors.getXPage(state);
};
export const getYPage = state => {
  return selectors.getYPage(state);
};
