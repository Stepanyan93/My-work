import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    getUsers
} from "../../redux/users_reduser";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPageSelector, getFollowingProcessSelector, getIsAuthSelector, getIsFetchingSelector,
    getPageUsersCountSelector,
    getUsersCountsSelector, getUserSelectorSuper
} from "../../redux/users_selector";



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageUsersCount)
    };

    onPgaeChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageUsersCount)
    };

    render() {
        return (<Users usersCount={this.props.usersCount}
                       pageUsersCount={this.props.pageUsersCount}
                       currentPage={this.props.currentPage}
                       onPgaeChanged={this.onPgaeChanged}
                       users={this.props.users}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       isFetching={this.props.isFetching}
                       followingProcess={this.props.followingProcess}
        />)
    };
}

const mapStateToProps = (state) => {
    return {
        users: getUserSelectorSuper(state),
        pageUsersCount: getPageUsersCountSelector(state),
        usersCount: getUsersCountsSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingProcess: getFollowingProcessSelector(state),
        isAuth: getIsAuthSelector(state)
    }
};

export default compose(
    connect(mapStateToProps, {getUsers, unfollow, follow}),
    withAuthRedirect
)(UsersContainer)