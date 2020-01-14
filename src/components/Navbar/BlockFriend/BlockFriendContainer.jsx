import React from 'react';
import {connect} from "react-redux";
import BlockFriend from "./BlockFriend";
import {compose} from "redux";
import {setFriendsThunkCreator} from "../../../redux/navbar_reduser";


class BlockFriendContainer extends React.Component{
    componentDidMount() {
            this.props.setFriendsThunkCreator(this.props.currentPage,this.props.pageFriendsCount);
    }
    onPageChanged = (pageNumber) => {
        this.props.setFriendsThunkCreator(pageNumber,this.props.pageFriendsCount);
    };
    render(){
        return(
            <BlockFriend isFetching={this.props.isFetching} pageFriendsCount={this.props.pageFriendsCount} getFriends={this.props.getFriends} isAuth={this.props.isAuth} friendsCount={this.props.friendsCount} onPageChanged={this.onPageChanged}/>
            )
    }
}

const mapStateToProps = (state) => {

    return{
        isAuth: state.auth.isAuth,
        getFriends:state.navBarPage.friendsData,
        pageFriendsCount:state.navBarPage.pageFriendsCount,
        friendsCount:state.navBarPage.friendsCount,
        currentPage:state.navBarPage.currentPage,
        isFetching:state.navBarPage.isFetching
    }
};


export default compose(
    connect(mapStateToProps,{setFriendsThunkCreator})
)(BlockFriendContainer);