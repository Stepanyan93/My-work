import React from 'react';
import {addMessageActionCreator} from "../../redux/dialogs_reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



const mapStateToProps = (state) => {

    return{
        dialogPage: state.dialogPage,
    }
};

const mapDispatchToProps = (dispatch) => {
return{
    addMessage : (newMessage) => {
        dispatch(addMessageActionCreator(newMessage));
    }
}
};
export default compose (
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)