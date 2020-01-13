import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../utils/validators/validators";
import {Input} from "../common/FormControls/FormControls";
import {connect} from "react-redux";
import {loginUserThunkCreator} from "../../redux/auth_reduser";
import {Redirect} from "react-router-dom";
import style from './../common/FormControls/FormControls.module.css';
import s from './login.module.css'



const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <Field component={Input} name={'email'} validate={required} placeholder={'Email'}
                       className={"form-control"}/>
                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <Field component={Input} name={'password'} validate={required} placeholder={'Password'}
                       className={"form-control"}/>
            </div>
            <div className="form-group form-check">
                <Field component={'input'} type={'checkbox'} name={'rememberMe'}/> remember me
            </div>
            {props.error && <div className={style.errorGroup}>
                {props.error}
            </div>}
            <div className="form-group">
                <button className={"btn btn-primary"}>Login</button>
            </div>

        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    let onSubmit = (formData) => {
        props.loginUserThunkCreator(formData.email, formData.password, formData.rememberMe)
    };


    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }
    return (
        <div className={s.container}>
            <div >
                <h1 className={s.headerLogin}>Login</h1>
            </div>
            <div >
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>

        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};
export default connect(mapStateToProps, {loginUserThunkCreator})(Login);