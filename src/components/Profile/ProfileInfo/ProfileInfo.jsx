import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from './ProfileInfo';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
    <div>
        {/*<div>
            <img
                src='https://assetsnffrgf-a.akamaihd.net/assets/m/2015402/univ/art/2015402_univ_lsr_lg.jpg'>
            </img>
        </div>*/}
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            < ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
    )

}

export default ProfileInfo;