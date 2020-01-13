import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    setuserprofileinfo,
    getuserprofilestatus,
    setuserprofilestatus,
    setProfileInfoUser, uploadPhotoCreator
} from "../../redux/profile_reduser";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    refreshProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.setuserprofileinfo(userId);
        this.props.getuserprofilestatus(userId);
    };

    componentDidMount() {
        this.refreshProfile()

    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.userId !== this.props.match.params.userId){
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props} isOwner={this.props.match.params.userId} setProfileInfoUser={this.props.setProfileInfoUser}
                     authUserId={this.props.authUserId} isAuth={this.props.isAuth}
                     setProfileInfo={this.props.setProfileInfo} profileStatus={this.props.profileStatus}
                     setuserprofilestatus={this.props.setuserprofilestatus}
                     uploadPhotoCreator={this.props.uploadPhotoCreator}/>

        );
    }
}


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        setProfileInfo: state.profilePage.setProfileInfo,
        profileStatus: state.profilePage.profileStatus,
        authUserId: state.auth.id

    }
};
export default compose(
    connect(mapStateToProps, {setuserprofileinfo, getuserprofilestatus, setuserprofilestatus, setProfileInfoUser,uploadPhotoCreator}),
    withRouter,
)(ProfileContainer);