
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [ ...state.messages, {id: 6, message: body}]
            };

        default:
            return state;
    }

}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;