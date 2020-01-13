const addMessageType = 'Add-Message';

let initialState = {
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
};

const dialogsReduser = (state = initialState,action) => {
    switch(action.type){
        case addMessageType:
            let addMessageData = {
                message: action.newMessage
            };
            return{
                ...state,
                messageMyData: [...state.messageMyData,addMessageData],
            };
        default:
            return state;

    }
};
export const addMessageActionCreator = (newMessage) => ({type:addMessageType,newMessage});
export default dialogsReduser