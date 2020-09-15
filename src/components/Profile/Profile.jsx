import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return  <div>
        <div>
            <img src='https://assetsnffrgf-a.akamaihd.net/assets/m/2015402/univ/art/2015402_univ_lsr_lg.jpg'></img>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
}

export default Profile;
