import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let Path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={Path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}
const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Petr'},
        {id: 2, name: 'Ishak'},
        {id: 3, name: 'Juri'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Roman'},
        {id: 6, name: 'Sergei'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Kto segodnja provodit?'},
        {id: 3, message: 'ja'},
        {id: 4, message: 'ja'},
        {id: 6, message: 'ja'},
        {id: 5, message: 'ja'}
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = messages.map( m => <Message message={m.message} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.message}>
                { messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;