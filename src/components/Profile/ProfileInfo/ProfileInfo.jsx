import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHook from "./ProfileStatus/ProfileStatusWithHook";
import ProfileInfoUser from "./ProfileInfoUser/ProfileInfoUser";
import UserDefaultPhoto from './../../../assets/img/user.png';


const ProfileInfo = (props) => {
    let onUploadPhoto = (e) => {
        props.uploadPhotoCreator(e.target.files[0]);
    };

    if (!props.setProfileInfo) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="http://dgdesign.ru/uploads/posts/2018-04/1524225588_shapka-sayta-informatika-253742446445.jpg" alt="" className={s.profileImg}/>
                <div className={s.container}>
                    <div className={s.containerItem}>
                        <div className={s.leftItem}>
                            <div>
                                <img src={props.setProfileInfo.photos.large || UserDefaultPhoto} alt=""/>
                            </div>
                            <div>
                                {!props.isOwner &&
                                <input type="file" onChange={onUploadPhoto} className={s.customFileInput}/>}
                            </div>
                        </div>
                        <div >
                            <ProfileStatusWithHook profileStatus={props.profileStatus} setuserprofilestatus={props.setuserprofilestatus}/>
                        </div>
                    </div >
                    <div className={s.containerItem}>
                        <div className={s.rightItem}>
                            <ProfileInfoUser setProfileInfoUser={props.setProfileInfoUser} authUserId={props.authUserId} isAuth={props.isAuth} setProfileInfo={props.setProfileInfo}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ProfileInfo;