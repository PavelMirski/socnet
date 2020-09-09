import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://assetsnffrgf-a.akamaihd.net/assets/m/802018868/univ/art/802018868_univ_lsr_lg.jpg'/>
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;
