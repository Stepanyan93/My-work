import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReduser from "./profile_reduser";
import dialogsReduser from "./dialogs_reduser";
import navbarReduser from "./navbar_reduser";
import usersReduser from "./users_reduser";
import authReduser from "./auth_reduser";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import appReduser from "./app_reduser";

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogPage :dialogsReduser,
    navBarPage: navbarReduser,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReducer,
    app: appReduser
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
// let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store = store;
export default store;