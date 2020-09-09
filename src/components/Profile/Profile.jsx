import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return  <div className={s.content}>
        <div>
            <img src='https://assetsnffrgf-a.akamaihd.net/assets/m/102018087/univ/art/102018087_univ_lsr_xl.jpg'></img>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
}

export default Profile;
