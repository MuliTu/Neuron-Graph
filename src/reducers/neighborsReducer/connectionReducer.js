import { SET_NODES, SET_EDGES,SET_CURRENT_NODE, SET_COORDINATE} from "./types";
import * as selectors from './selectors'

const init = {
    nodes:[],
    edges:[]
};

export default function (state = init, action) {
    switch (action.type) {

        case SET_NODES:
            return {...state,nodes: action.payload}

        case SET_EDGES:
        return {...state, edges:[...action.payload,...state.edges]}
        
        case SET_CURRENT_NODE:
        return {...state, current:state.nodes[action.payload]}

        case SET_COORDINATE:
        return {...state,xPage:action.payload.x,yPage:action.payload.y}
       
        default:
            return state

    }
}


export const getNodes = state => {return selectors.getNodes(state)}
export const getEdges = state => {return selectors.getEdges(state)}
export const getXPage = state => {return selectors.getXPage(state)}
export const getYPage = state => {return selectors.getYPage(state)}