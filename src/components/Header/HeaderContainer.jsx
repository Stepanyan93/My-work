import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {loginOutUserThunkCreator, profilePhotoAuthUser} from "../../redux/auth_reduser";


class HeaderContainer extends React.Component {
componentDidMount() {
    if(this.props.authUserId !== null){
        let userId = this.props.authUserId;
        this.props.profilePhotoAuthUser(userId);
    }

}


    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        authUserId: state.auth.id,
        login: state.auth.login,
        authPhoto:state.auth.photo

    }
};

export default connect(mapStateToProps, {loginOutUserThunkCreator,profilePhotoAuthUser})(HeaderContainer);
