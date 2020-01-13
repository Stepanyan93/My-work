import React from 'react';
import {addNewPostActionCreator} from "../../../redux/profile_reduser";
import MyPost from "./MyPost";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return{
      profilePage: state.profilePage
  }
};

const MyPostContainer = connect(mapStateToProps,{addNewPostActionCreator})(MyPost);
export default MyPostContainer;