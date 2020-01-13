import React from 'react';
import s from './../Dialogs.module.css';


const MessageMy = (props) => {
    return (
        <div className={s.messageMyItem}>{props.message}</div>
    )
};

export default MessageMy;