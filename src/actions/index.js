import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const DATA_LOADING = 'DATA_LOADING'
export const DATA_SUCCESS = 'DATA_SUCCESS'
export const DATA_ERR = 'DATA_ERR'
export const ADD_SMURF = 'ADD_SMURF'
export const SET_FORM_ERR = "SET_FORM_ERR"


export const fetchSmurfs = () => {
    return ((dispatch)=>{

        dispatch({type:DATA_LOADING})

        axios.get('http://localhost:3333/smurfs')
            .then( res => {
                    console.log(res)
                    dispatch({type: DATA_SUCCESS , payload: res.data})} )
            .catch( err => dispatch({type:DATA_ERR, payload: 'something went wrong'}))
    })
}


export const addSmurf = (smurfData) => {
    return {type: ADD_SMURF, payload: smurfData} 
}

export const setError = (smurfData) => {
    if(smurfData==='' || smurfData.position === "" || smurfData.nickname === ""){
        return {type:SET_FORM_ERR, payload: true}
    }
    else {
        return {type:SET_FORM_ERR, payload: false}
    }
}
