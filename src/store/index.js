import { combineReducers } from 'redux'
import connectionReducer,{ getNodes, getEdges, getXPage, getYPage } from '../reducers/neighborsReducer/connectionReducer'
import { getCurrentNode } from '../reducers/neighborsReducer/selectors';
export default combineReducers({
        connections: connectionReducer,
    });

export const _getNodes = state => getNodes(state.connections)
export const _getEdges = state => getEdges(state.connections)
export const _getCurrentNode = state => getCurrentNode(state.connections)
export const _getXpage = state => getXPage(state.connections)
export const _getYpage = state => getYPage(state.connections)






