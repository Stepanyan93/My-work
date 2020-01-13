import React, {Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {BrowserRouter, HashRouter, Route, withRouter} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializedThunkCreate} from "./redux/app_reduser";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import 'bootstrap/dist/css/bootstrap.css';
import store from "./redux/store-redux";


const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializedThunkCreate();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='site'>
                <HeaderContainer/>
                <Navbar/>
                <div className='containerSite'>
                    <Route path='/profile/:userId?' render={() => {
                        return <Suspense fallback={<div>...Loading</div>}>
                            <ProfileContainer/>
                        </Suspense>
                    }}/>
                    <Route path='/dialogs' render={() => {
                        return <Suspense fallback={<div>...Loading</div>}>
                            <DialogsContainer/>
                        </Suspense>
                    }}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    };
};

let MyApp = compose(
    withRouter,
    connect(mapStateToProps, {initializedThunkCreate})
)(App);


export default class AppContainer extends React.Component {
    render() {
        return (
            <HashRouter>
                <Provider store={store}>
                    <MyApp/>
                </Provider>
            </HashRouter>
        )
    }
}


