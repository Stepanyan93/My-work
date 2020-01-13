import React from 'react';
import s from './Dialogs.module.css';
import DialogUser from "./DialogItems/DialogUser";
import MessageUsers from "./Message/MessageUsers";
import MessageMy from "./Message/MessageMy";
import {Field, reduxForm} from "redux-form";
import {MaxLengthCreator, required} from "../utils/validators/validators";
import {Textarea} from "../common/FormControls/FormControls";

const maxLength50 = MaxLengthCreator(50);

const OnAddMessageForm = (props) => {
return(
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} validate={[required,maxLength50]} name={'addNewMessage'} className={"form-control"}/>
        </div>
        <div>
            <button className={"btn btn-outline-secondary"}>Add Message</button>
        </div>
    </form>
)
};

const OnAddMessageReduxForm = reduxForm({form:'addNewMessage'})(OnAddMessageForm);

const Dialogs = (props) => {

    let dialogsElement = props.dialogPage.dialogsData.map(dialog => <DialogUser name={dialog.name} id={dialog.id}/>);
    let messageUserElement = props.dialogPage.messageUsersData.map(m => <MessageUsers message={m.message}/>);
    let messageMyElement = props.dialogPage.messageMyData.map(m => <MessageMy message={m.message}/>);

    let onAddMessage = (value) => {
        props.addMessage(value.addNewMessage);
        value.addNewMessage = '';
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsContent}>
                {dialogsElement}
            </div>
            <div className={s.messageContent}>
                <div className={s.messageRead}>
                    {messageUserElement}
                    {messageMyElement}
                </div>
                <OnAddMessageReduxForm onSubmit={onAddMessage} />
            </div>
        </div>
    );
};
export default Dialogs;