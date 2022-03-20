import { combineReducers } from 'redux'
import { SET_LATEST,SET_BUSINESS, SET_ENTERTAINMENT, SET_HEALTH, SET_SCIENCE, SET_SPORT, SET_TECHNOLOGY, SET_GENERAL} from './Action'

const initalLatestState ={
    data: []
}

const setLatestNewsReducer=(state = initalLatestState, action)=>{
    // console.log(" from reducer ", action)
    switch (action.type) {
        case SET_LATEST:
            return{
                ...state,
                data : action.payload
            }
    
        default:
            return state
    }
}

const initalBusinessState = {
    data: []
}

const setBusinessNewsReducer=(state = initalBusinessState, action)=>{
    
    switch (action.type) {
        case SET_BUSINESS:
            console.log('setBusinessNewsReducer', action)
            return{
                ...state,
                data : action.payload
            }
        default:
            return state
    }
}

const initalEntertainmentState = {
    data: []
}

const setEntertainmentNewsReducer=(state = initalEntertainmentState, action)=>{
    switch (action.type) {
        case SET_ENTERTAINMENT:
            return{
                ...state,
                data : action.payload
            }
        default:
            return state
    }
}

const initalHealthState = {
    data: []
}

const setHealthNewsReducer=(state = initalHealthState, action)=>{
    switch (action.type) {
        case SET_HEALTH :
            return{
                ...state,
                data : action.payload
            }
        default:
            return state
    }
}

const initalScienceState = {
    data: []
}

const setScienceNewsReducer=(state = initalScienceState, action)=>{
    switch (action.type) {
        case SET_SCIENCE :
            console.log("setScienceNewsReducer", action);
            return{
                ...state,
                data : action.payload
            }
        default:
            return state
    }
}

const initalSportState = {
    data: []
}

const setSportNewsReducer=(state = initalSportState, action)=>{
    switch (action.type) {
        case SET_SPORT :
            console.log("setSportNewsReducer", action);
            return{
                ...state,
                data : action.payload
            }
        default:
            return state
    }
}


const initalTechnologyState = {
    data: []
}

const setTechnologyNewsReducer=(state = initalTechnologyState, action)=>{
    switch (action.type) {
        case SET_TECHNOLOGY :
            console.log("setTechnologyNewsReducer", action);
            return{
                ...state,
                data : action.payload
            }
        default:
            return state
    }
}

const initalGeneralState = {
    data: []
}

const setGeneralNewsReducer=(state = initalGeneralState, action)=>{
    switch (action.type) {
        case SET_GENERAL :
            console.log("setGeneralNewsReducer", action);
            return{
                ...state,
                data : action.payload
            }
        default:
            return state
    }
}

const rootReducer =  combineReducers({setLatestNewsReducer, setBusinessNewsReducer, setEntertainmentNewsReducer, setHealthNewsReducer, setScienceNewsReducer, setSportNewsReducer, setTechnologyNewsReducer, setGeneralNewsReducer})

export default rootReducer