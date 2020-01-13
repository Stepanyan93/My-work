import React from 'react';
import s from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";
import UserDefaultPhoto from './../../assets/img/user.png';


const Header = (props) => {

    return (
        <header className={s.header}>
           <div className={s.container}>
              <div className={s.containerItem}>

              </div>
              <div className={s.containerItem}>
                  <div>
                      {props.isAuth && <img src={props.authPhoto || UserDefaultPhoto} className={s.userPhoto} alt=""/>}
                  </div>
                 <div className={s.userName}>
                    {props.isAuth
                        ?  <div className={s.containerLogin}>
                            <div>
                                <p className={s.userNameText}>{props.login}</p>
                            </div>
                            <div>
                                <button className={"btn btn-light"} onClick={props.loginOutUserThunkCreator}> Log Out</button>
                            </div>
                        </div>
                        : <div>
                            <Redirect to='/login'/>
                            <NavLink className={"btn btn-light"} to='/login'>Login</NavLink>
                        </div>

                    }

                 </div>
              </div>
           </div>


        </header>
    );
};

export default Header;