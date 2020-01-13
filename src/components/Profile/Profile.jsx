import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo isOwner={props.match.params.userId} setProfileInfoUser={props.setProfileInfoUser} authUserId={props.authUserId} isAuth={props.isAuth} setProfileInfo={props.setProfileInfo} profileStatus={props.profileStatus} setuserprofilestatus={props.setuserprofilestatus} uploadPhotoCreator={props.uploadPhotoCreator}/>
            <MyPostContainer/>
        </div>
    );
};

export default Profile;