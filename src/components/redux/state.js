let state = {
    dialogPage: {
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
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hello friends', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'How are you', likesCount: 1},
            {id: 4, message: 'Go home', likesCount: 111}
        ]
    },
    /*sidebar: {
        profile:
        messages:
        news:
        music:
        settings:
    }
*/
}

export default state;