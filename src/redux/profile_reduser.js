import {ProfileAPI} from "../api/Api";
import {stopSubmit} from 'redux-form';

const addPostType = 'Add-New-Post-Data';
const setUserProfileType = 'SET_USER_PROFILE';
const setUserProfileStatusType = 'SET_USER_PROFILE_STATUS';
const uploadPhotoType = 'UPLOAD_PHOTO';

let initialState = {
    postData: [
        {message: "hello how w are you?", likeCount: '45'},
        {message: "What'is your name", likeCount: '56'},
        {message: "hello how w are you?", likeCount: '3'},
        {message: "hello how w are you?", likeCount: '5'},
        {message: "hello how w are you?", likeCount: '15'}
    ],
    setProfileInfo: null,
    profileStatus: ""
};

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case addPostType:
            let addPostData = {
                message: action.newPost,
                likeCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, addPostData],
            };
        case setUserProfileType:
            return {
                ...state,
                setProfileInfo: action.setProfileInfo
            };

        case setUserProfileStatusType:
            return {
                ...state,
                profileStatus: action.status
            };
        case uploadPhotoType:
            return {
              ...state,
              setProfileInfo: {...state.setProfileInfo, photos:action.photo}
            };
        default:
            return state;
    }
};


export const addNewPostActionCreator = (newPost) => ({type: addPostType, newPost});
export const setUserProfileActionCreator = (setProfileInfo) => ({type: setUserProfileType, setProfileInfo});
export const setUserProfileStatusActionCreator = (status) => ({type: setUserProfileStatusType, status});
export const uploadPhotoActionCreator = (photo) => ({type:uploadPhotoType,photo});

export const setuserprofileinfo = (userId) => async (dispatch) => {
    let data = await ProfileAPI.profilepage(userId);
    dispatch(setUserProfileActionCreator(data));

};
export const getuserprofilestatus = (userId) => async (dispatch) => {
    let data = await ProfileAPI.getProfileStatus(userId);
    dispatch(setUserProfileStatusActionCreator(data));

};
export const setuserprofilestatus = (status) => async (dispatch) => {
    let response = await ProfileAPI.setProfileStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setUserProfileStatusActionCreator(status));
    }
};
export const setProfileInfoUser = (profile) => async (dispatch, getState) => {
    let userId = getState().auth.id;
    let response = await ProfileAPI.setProfileInfo(profile);
    if (response.data.resultCode === 0) {
        dispatch(setuserprofileinfo(userId));
    } else {
        dispatch(stopSubmit('profileUserInfo', {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
};
export const uploadPhotoCreator = (photo) => (dispatch) => {
    ProfileAPI.uploadPhoto(photo).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(uploadPhotoActionCreator(response.data.data.photos))
        }
    })
};

export default profileReduser;