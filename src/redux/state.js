import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hello friends', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'How are you', likesCount: 1},
                {id: 4, message: 'Go home', likesCount: 111}
            ],
            newPostText: 'pavel mirski'
        },
        sidebar: {}
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;

    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}




export default store;
window.store = store;