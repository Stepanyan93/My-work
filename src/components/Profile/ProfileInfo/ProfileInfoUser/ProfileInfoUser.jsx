import React,{useState} from 'react';
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../common/FormControls/FormControls";
import s from './../../../common/FormControls/FormControls.module.css'
import style from './../ProfileInfo.module.css';



const ProfileInfoUser = (props) => {
    let userId = props.setProfileInfo.userId;
    let boolId = props.authUserId === userId;

    let [editOnValue,setEditOn] = useState(false);

    let onSubmit = (formData) => {
        props.setProfileInfoUser(formData).then(() => {setEditOn(false)})
    };
    let editOn = () => {
        setEditOn(true);
    };
    return(

        <div>
            {props.isAuth && boolId && editOnValue===false &&
            <div>
                <button onClick={editOn} className={style.infoButton}>Edit</button>
            </div>
            }
            {editOnValue &&
            <ProfileInfoUserReduxForm setProfileInfo={props.setProfileInfo} onSubmit={onSubmit}/>
            }
            {!editOnValue &&
            <div className={style.infoItems}>
                <p><b>Full Name :</b>{props.setProfileInfo.fullName}</p>
                <p><b>About me :</b>{props.setProfileInfo.aboutMe}</p>
                <p><b>Looking For A Job :</b>{props.setProfileInfo.lookingForAJob ? 'Yes' : 'No'}</p>
                <p><b>Profesional Kills :</b>{props.setProfileInfo.lookingForAJobDescription}</p>
                <h4>Contacts</h4> {Object.entries(props.setProfileInfo.contacts).map(([key,value]) =>  <ContactsUser keyContact={key} valueContact={value}/>)}
            </div>
            }
        </div>
    );
};
const ContactsUser = ({keyContact,valueContact}) => {
    return (
        <div className={style.contactItems}>
            <b>{keyContact} :</b> <span>{valueContact}</span>
        </div>
    );
};

const ProfileInfoUserForm = (props) => {
  return(
      <form onSubmit={props.handleSubmit} className={style.formItem}>
          {props.error &&
          <div className={s.errorGroup}>
              {props.error}
          </div>
          }
          <div className={"form-group"}>
              <b>Full Name :</b><Field component={Input} placeholder={'Full Name'} name={'fullName'} className={"form-control"} />
          </div>
          <div className={"form-group"}>
              <b>About me :</b><Field component={Textarea} placeholder={'About Me'} name={'aboutMe'} className={"form-control"}/>
          </div>
          <div className={"form-group"}>
              <b>Looking For A Job :</b>
              <div className={"custom-control custom-radio"}>
                  <Field component={'input'} type={'radio'} id={"customRadio1"} name={'lookingForAJob'}  value={'true'} className={"custom-control-input"}/>
                  <label className="custom-control-label" htmlFor="customRadio1">Yes</label>
              </div>
              <div className={"custom-control custom-radio"}>
                  <Field component={'input'} type={'radio'} id={"customRadio2"} name={'lookingForAJob'} value={'false'} className={"custom-control-input"}/>
                  <label className="custom-control-label" htmlFor="customRadio2">No</label>
              </div>
          </div>
          <div className={"form-group"}>
              <b>Profesional Kills :</b><Field component={Textarea} placeholder={'Profesional Kills'} name={'lookingForAJobDescription'} className={"form-control"}/>
          </div>
          <div className={"form-group"}>
              <b>Contacts</b> {Object.keys(props.setProfileInfo.contacts).map(key =>  <ContactsUser key={key} keyContact={key} valueContact={<Field component={Input} placeholder={key} name={'contacts.'+key} className={"form-control"} />}/>)}
          </div>
          <div>
              <button className={style.infoButton}>Change</button>
          </div>
      </form>
  )
};
const ProfileInfoUserReduxForm = reduxForm({form:'profileUserInfo'})(ProfileInfoUserForm);

export default ProfileInfoUser;