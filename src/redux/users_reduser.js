import {FollowApi, UsersApi} from "../api/Api";

let followType = 'FOLLOW';
let unFollowType = 'UN_FOLLOW';
let setUsersType = 'SET_USERS';
let totalCountType = 'TOTAL_COUNT';
let setCurrentPageType = 'SET_CURRENT-PAGE';
let toggleIsFetchingType = 'TOGGLE_IS_FETCHING';
let toggleFollowingProcessType = 'TOGGLE_FOLLOWING_PROCESS_TYPE';


let initialState = {
    users: [],
    pageUsersCount: 54,
    usersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProcess: [],
};


const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case toggleFollowingProcessType:
            return {
                ...state,
                followingProcess: action.followingProcessValue
                    ? [...state.followingProcess, action.userId]
                    : state.followingProcess.filter(id => id !== action.userId)
            };
        case toggleIsFetchingType:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case setCurrentPageType:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case totalCountType:
            return {
                ...state,
                usersCount: action.usersCount
            };
        case followType:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case unFollowType:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case setUsersType:
            return {
                ...state,
                users: [...action.users]
            };

        default:
            return state;

    }
};

export const followAC = (userId) => ({type: followType, userId: userId});
export const unFollowAC = (userId) => ({type: unFollowType, userId: userId});
export const setUsers = (users) => ({type: setUsersType, users: users});
export const totalUsersCount = (usersCount) => ({type: totalCountType, usersCount: usersCount});
export const setCurrentPage = (currentPage) => ({type: setCurrentPageType, currentPage});
export const toggleIsFetching = (isFetching) => ({type: toggleIsFetchingType, isFetching});
export const toggleFollowingProcess = (followingProcessValue, userId) => ({type: toggleFollowingProcessType, followingProcessValue, userId});


export const getUsers = (currentPage, pageUsersCount) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
    let data = await UsersApi.getUsers(currentPage, pageUsersCount);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(totalUsersCount(data.totalCount));




};
export const follow = (UserId) => async (dispatch) => {
    dispatch(toggleFollowingProcess(true, UserId));
    let data = await FollowApi.follow(UserId);
    if (data.resultCode === 0) {
        dispatch(followAC(UserId));
        dispatch(toggleFollowingProcess(false, UserId));
    }
};
export const unfollow = (UserId) => async (dispatch) => {
    dispatch(toggleFollowingProcess(true, UserId));
    let data = await FollowApi.unfollow(UserId);
    if (data.resultCode === 0) {
        dispatch(unFollowAC(UserId));
        dispatch(toggleFollowingProcess(false, UserId));
    }
};

export default usersReduser;