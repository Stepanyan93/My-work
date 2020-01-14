import React from 'react';
import s from './Users.module.css';
import userPhotoDefault from '../../assets/img/user.png';
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import PaginationApp from "../common/Pagination/Pagination";

const Users = (props) => {
    let PaginationHoc = (pageCount,UsersCount,isFetching,pageChanged) => {
        return (
            <PaginationApp usersCount={UsersCount} pageUsersCount={pageCount} onPgaeChanged={pageChanged} isFetching={isFetching} />
        )
    };
    return (
        <div>
            <div className={s.pagination}>
                <div className={s.paginationItem}>
                    {PaginationHoc(props.pageUsersCount,props.usersCount,props.isFetching,props.onPgaeChanged)}
                </div>
            </div>
            <div className={s.container}>
                {
                    props.users.map(u => <div className={s.usersItem} key={u.id}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhotoDefault} className={s.userImg} alt=""/>
                            </NavLink>
                            <p className={s.userName}>{u.name}</p>
                            <div>
                                {u.followed
                                    ? <button className={"btn btn-outline-secondary"} disabled={props.followingProcess.some(id => id === u.id)} onClick={() => {props.unfollow(u.id)}}>UnFollow</button>
                                    : <button className={"btn btn-outline-secondary"} disabled={props.followingProcess.some(id => id === u.id)} onClick={() => {props.follow(u.id)}}>Follow</button>}
                            </div>
                        </div>

                    </div>)
                }
            </div>
            <div className={s.pagination}>
                <div className={s.paginationItem}>
                    <PaginationApp usersCount={props.usersCount} pageUsersCount={props.pageUsersCount} currentPage={props.currentPage} onPgaeChanged={props.onPgaeChanged}  />
                </div>
            </div>

        </div>
    )
};
export default Users;