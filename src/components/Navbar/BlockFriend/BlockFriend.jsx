import React from 'react';
import s from './BlockFriend.module.css';
import FriendOnline from "./FriendOnline/FriendOnline";

const BlockFriend = (props) => {
    let arrFriend = props.setUserIsFollowed.filter(u => u.followed === true);
    let friendOnlineElement = arrFriend.map(friend => <FriendOnline name={friend.name} img={friend.photos.large} id={friend.id} key={friend.id} isAuth={props.isAuth}/>);
    console.log(arrFriend);
    return (
        <div>
            <div className={s.blockFriendHeader}>My Friend</div>
            <div>
                {friendOnlineElement}
            </div>
        </div>
    )
};
export default BlockFriend;