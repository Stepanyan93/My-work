import {userdataThunkCreator} from "./auth_reduser";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
  initialized:false
};


const appReduser = (state = initialState,action) => {
        switch(action.type){
            case SET_INITIALIZED:
                return{
                    ...state,
                    initialized: true
                };
            default:
                return state;
        }

};

export const setInitializedActionCreate = () => ({type:SET_INITIALIZED});
export const initializedThunkCreate = () => (dispatch) => {
let Promise = dispatch(userdataThunkCreator());
    Promise.then(() =>{
        dispatch(setInitializedActionCreate())
    });
};

export default appReduser;