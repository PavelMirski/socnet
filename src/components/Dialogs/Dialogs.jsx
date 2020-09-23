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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Petr" id="1"/>
                <DialogItem name="Ishak" id="2"/>
                <DialogItem name="Juri" id="3"/>
                <DialogItem name="Alex" id="4"/>
                <DialogItem name="Roman" id="5"/>
                <DialogItem name="Sergei" id="6"/>
            </div>
            <div className={s.message}>
                <Message message="Hi"/>
                <Message message="Kto segodnja provodit?"/>
                <Message message="ja"/>
                <Message message="ja"/>
                <Message message="ja"/>
                <Message message="ja"/>
            </div>


        </div>
    )
}

export default Dialogs;