import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.post}>
            <img src="https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg" alt=""/>
            <p>{props.message}</p>
            <div>
                <button className={"btn btn-primary"}>Like <span className={"badge badge-light"}>{props.like}</span></button>
            </div>

        </div>
    )
};
export default Post;