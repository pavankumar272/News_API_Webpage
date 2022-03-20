export const SET_LATEST = 'SET_LATEST';
export const SET_BUSINESS = 'SET_BUSINESS';
export const SET_ENTERTAINMENT= 'SET_ENTERTAINMENT';
export const SET_HEALTH = 'SET_HEALTH';
export const SET_SCIENCE = 'SET_SCIENCE';
export const SET_SPORT = 'SET_SPORT';
export const SET_TECHNOLOGY = 'SET_TECHNOLOGY';
export const SET_GENERAL = 'SET_GENERAL';

function setLatest(data){
    return{
        type: SET_LATEST,
        payload: data
    }
}

function setBusiness(data){
    return{
        type: SET_BUSINESS,
        payload: data
    }
}   

function setEntertainment(data){
    return{
        type: SET_ENTERTAINMENT,
        payload: data
    }
}  

function setHealth(data){
    return{
        type: SET_HEALTH,
        payload: data
    }
}  

function setScience(data){
    console.log("setScience->", data);
    return{
        type: SET_SCIENCE,
        payload: data
    }
}  

function setSport(data){
    console.log("setScience->", data);
    return{
        type: SET_SPORT,
        payload: data
    }
}  

function setTechnology(data){
    console.log("setTechnology->", data);
    return{
        type: SET_TECHNOLOGY,
        payload: data
    }
}  

function setGeneral(data){
    console.log("setGeneral->", data);
    return{
        type: SET_GENERAL,
        payload: data
    }
}  
export { setLatest, setBusiness, setEntertainment, setHealth, setScience, setSport, setTechnology, setGeneral };