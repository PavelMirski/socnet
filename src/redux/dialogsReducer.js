
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Petr'},
        {id: 2, name: 'Ishak'},
        {id: 3, name: 'Juri'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Roman'},
        {id: 6, name: 'Sergei'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Kto segodnja provodit?'},
        {id: 3, message: 'ja'},
        {id: 4, message: 'ja'},
        {id: 6, message: 'ja'},
        {id: 5, message: 'ja'}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})

export default dialogsReducer;