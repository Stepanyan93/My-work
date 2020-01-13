import {LoginApi, ProfileAPI} from "../api/Api";
import {stopSubmit} from 'redux-form'

let SET_USER_DATA_TYPE = 'SET_USER_DATA_TYPE';
let SET_USER_PHOTO = 'SET_USER_PHOTO';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    photo:undefined

};
const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA_TYPE:
            return {
                ...state,
                ...action.payload
            };
        case SET_USER_PHOTO:
                return{
                  ...state,
                    photo: action.userPhoto
                };
        default:
            return state;

    }
};

export const setUserDataActionCreator = (id, email, login, isAuth) => ({
    type: SET_USER_DATA_TYPE,
    payload: {id, email, login, isAuth}
});
export const setUserPhotoActionCreate= (userPhoto) => ({type:SET_USER_PHOTO,userPhoto});

export const userdataThunkCreator = () => async (dispatch) => {
    let response = await LoginApi.login();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setUserDataActionCreator(id, email, login, true));
    }
};
export const loginUserThunkCreator = (email, password, rememberMe) => async (dispatch) => {
    let response = await LoginApi.loginUser(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(userdataThunkCreator())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit('login', {_error: message}));
    }
};
export const loginOutUserThunkCreator = () => async (dispatch) => {
    let response = await LoginApi.loginOutUser();
    if (response.data.resultCode === 0) {
        dispatch(setUserDataActionCreator(null, null, null, false))
    }
};
export const profilePhotoAuthUser = (userId) => async (dispatch) => {
    let data = await ProfileAPI.profilepage(userId);
    dispatch(setUserPhotoActionCreate(data.photos.large))
};
export default authReduser;