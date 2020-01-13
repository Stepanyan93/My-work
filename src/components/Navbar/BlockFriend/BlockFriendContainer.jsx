import React from 'react';
import {connect} from "react-redux";
import BlockFriend from "./BlockFriend";
import {compose} from "redux";
import {getUsers} from "../../../redux/users_reduser";


class BlockFriendContainer extends React.Component{
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageUsersCount)
    }
    render(){
        return(
            <BlockFriend setUserIsFollowed={this.props.setUserIsFollowed} navBarPage={this.props.navBarPage} isAuth={this.props.isAuth}/>
            )
    }
}

const mapStateToProps = (state) => {

    return{
        isAuth: state.auth.isAuth,
        navBarPage: state.navBarPage,
        setUserIsFollowed:state.usersPage.users,
        currentPage:state.usersPage.currentPage,
        pageUsersCount:state.usersPage.pageUsersCount
    }
};


export default compose(
    connect(mapStateToProps,{getUsers})
)(BlockFriendContainer);