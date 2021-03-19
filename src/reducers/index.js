import {DATA_LOADING, DATA_SUCCESS, DATA_ERR, ADD_SMURF, SET_FORM_ERR} from '../actions'


export const initialState = {
    smurfs : [],
    loading: false,
    error: '',
    formError: null,
    errorMessage: 'Name, Nickname, and Position are required fields',
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case DATA_LOADING:
            return({
                ...state,
                loading: true
            });
        case DATA_SUCCESS:
            return({
                ...state,
                loading:false,
                smurfs: action.payload,
                error: '',
            })
        case DATA_ERR: 
            return({
                ...state,
                loading:false,
                error: 'There was an error',
            })
        case ADD_SMURF: 
            return({
                ...state,
                smurfs: [...state.smurfs, action.payload]
            })
        case SET_FORM_ERR: 
            return{
                ...state,
                formError: action.payload

            }
        default:
            return state
    }

}

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.