import profileReduser from "./profile_reduser";
import dialogsReduser from "./dialogs_reduser";
import navbarReduse from "./navbar_reduser";


let store = {
    _state: {
        dialogPage: {
            dialogsData: [
                {name: 'John', id: '1'},
                {name: 'Jana', id: '2'},
                {name: 'Lana', id: '3'},
                {name: 'Jenifer', id: '4'},
                {name: 'Smith', id: '5'},
                {name: 'Lauren', id: '6'}
            ],

            messageUsersData: [
                {message: 'hello,how are you'},
                {message: 'Fine,Thank you!!!'}
            ],
            messageMyData: [
                {message: ''}
            ],
            newMessageData: ''
        },
        profilePage: {
            postData: [
                {message: "hello how w are you?", likeCount: '45'},
                {message: "What'is your name", likeCount: '56'},
                {message: "hello how w are you?", likeCount: '3'},
                {message: "hello how w are you?", likeCount: '5'},
                {message: "hello how w are you?", likeCount: '15'}
            ],
            newPostData: ""
        },
        navBarPage: {
            friendOnlineData: [
                {name: 'John'},
                {name: 'Jana'},
                {name: 'Lana'},
                {name: 'Jenifer'},
                {name: 'Smith'},
                {name: 'Lauren'}
            ]
        },
    },
    _renderAllTree() {

    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._renderAllTree = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogPage = dialogsReduser(this._state.dialogPage, action);
        this._state.navBarPage = navbarReduse(this._state.navBarPage, action);
        this._renderAllTree(this._state);

    }
};


export default store;