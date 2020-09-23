import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return <div>
        <div>
            <img src='https://assetsnffrgf-a.akamaihd.net/assets/m/2015402/univ/art/2015402_univ_lsr_lg.jpg'></img>
        </div>
        <div className={s.deskriptionBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;