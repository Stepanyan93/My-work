import {createSelector} from 'reselect'

const getUsersSelector = (state) => {
    return state.usersPage.users
};
export const getUserSelectorSuper = createSelector( getUsersSelector, (users) => {
 return users.filter(u => true)
});
export const getPageUsersCountSelector = (state) => {
    return state.usersPage.pageUsersCount
};
export const getUsersCountsSelector = (state) => {
    return state.usersPage.usersCount
};
export const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage
};
export const getIsFetchingSelector = (state) => {
    return state.usersPage.isFetching
};
export const getFollowingProcessSelector = (state) => {
    return state.usersPage.followingProcess
};
export const getIsAuthSelector = (state) => {
    return state.auth.isAuth
};