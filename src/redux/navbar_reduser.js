import {UsersApi} from "../api/Api";

let setFriendsType = 'SET_FRIENDS';
let setFriendsCountType = 'SET_FRIENDS_COUNT';
let setFriendsCurrentPageType = 'SET_FRIENDS_CURRENT_PAGE';
let toggleIsFetchingType = 'TOGGLE_IS_FETCHING'

let initialState = {
    friendsData: [],
    pageFriendsCount: 100,
    friendsCount: 0,
    currentPage: 1,
    isFetching: true
};
const navbarReduser = (state =initialState ,action) => {
    switch(action.type){
        case setFriendsType:
            return{
                ...state,
                friendsData:[...action.friends.filter(u => u.followed === true)]
            };
        case setFriendsCountType:
            return{
                ...state,
                friendsCount:action.friendsCount
            };
        case setFriendsCurrentPageType:
            return{
              ...state,
                currentPage:action.currentPage
            };
        case toggleIsFetchingType:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }

};

 const setFriendsActionCreator = (friends) => ({type:setFriendsType,friends});
const setFriendsCountActionCreator = (friendsCount) => ({type:setFriendsCountType,friendsCount});
export const setFriendsCurrentPageActionCreator = (currentPage) => ({type:setFriendsCurrentPageType,currentPage});
export const toggleIsFetchingActionCreator = (isFetching) => ({type: toggleIsFetchingType, isFetching});

 export const setFriendsThunkCreator = (currentPage,pageFriendsCount) => async(dispatch) => {
     dispatch(setFriendsCurrentPageActionCreator(currentPage));
     dispatch(toggleIsFetchingActionCreator(true));
     let data = await UsersApi.getUsers(currentPage,pageFriendsCount);
     dispatch(toggleIsFetchingActionCreator(false));
    dispatch(setFriendsActionCreator(data.items));
  dispatch(setFriendsCountActionCreator(data.totalCount))
};

export default navbarReduser;



