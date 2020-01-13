import React from 'react';
import s from './../Dialogs.module.css';


const MessageUsers = (props) => {
    return (
        <div className={s.messageUsersItem}>{props.message}</div>
    )
};

export default MessageUsers;