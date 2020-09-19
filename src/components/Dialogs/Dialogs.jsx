import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Petr</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Ishak</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Juri</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Roman</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Sergei</NavLink>
                </div>
            </div>

            <div className={s.message}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>Kto segodnja provodit</div>
                <div className={s.dialog}>ja</div>
            </div>


        </div>
    )
}

export default Dialogs;