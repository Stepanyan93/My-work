import React from 'react';
import s from './BlockFriend.module.css';
import FriendOnline from "./FriendOnline/FriendOnline";
import PaginationApp from "../../common/Pagination/Pagination";

const BlockFriend = (props) => {
    let PaginationHoc = (pageCount,UsersCount,isFetching,pageChanged) => {
        return (
            <PaginationApp usersCount={UsersCount} pageUsersCount={pageCount} onPgaeChanged={pageChanged} isFetching={isFetching} />
        )
    };

    let friendOnlineElement = props.getFriends.map(friend => <FriendOnline name={friend.name} img={friend.photos.large} id={friend.id} key={friend.id} isAuth={props.isAuth}/>);
    if(props.isAuth ){
        return (

                        <div>
                            <div className={s.blockFriendHeader}>Friends</div>
                            <div className={s.pagination}>
                                <div className={s.paginationItem}>
                                    {PaginationHoc(props.pageFriendsCount,props.friendsCount,props.isFetching,props.onPageChanged)}
                                </div>
                            </div>
                            <div>
                                {friendOnlineElement}
                            </div>
                        </div>

        )
    }
    return <div> </div>
};
export default BlockFriend;