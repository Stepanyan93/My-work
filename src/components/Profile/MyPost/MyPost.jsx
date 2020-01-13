import React from 'react';
import Post from './Post/Post'
import s from './MyPost.module.css';
import {Field, reduxForm} from "redux-form";
import {MaxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

let maxLength50 = MaxLengthCreator(50);

const OnAddPostForm = (props) => {
  return(
      <form onSubmit={props.handleSubmit}>
          <div>
              <Field component={Textarea} validate={[required,maxLength50]} name={'addNewPost'} className={"form-control"}/>
          </div>
          <div>
              <button className={"btn btn-outline-secondary"}>Add Post</button>
          </div>
      </form>
  )
};

const OnAddPostReduxForm = reduxForm({form:'addNewPost'})(OnAddPostForm);

const MyPost = React.memo(props => {

    let myPostElement = props.profilePage.postData.map(post => <Post message={post.message} like={post.likeCount}/>);

    let onAddPost = (value) => {
        props.addNewPostActionCreator(value.addNewPost);
        value.addNewPost = '';
    };

    return (
        <div className={s.myPost}>
            <OnAddPostReduxForm onSubmit={onAddPost}/>
            <div>
                {myPostElement}
            </div>
        </div>
    )
});
export default MyPost;