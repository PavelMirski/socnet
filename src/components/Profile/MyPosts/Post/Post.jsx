import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://assetsnffrgf-a.akamaihd.net/assets/m/802018868/univ/art/802018868_univ_lsr_lg.jpg'/>
            {props.message}
            <div>
                <span>Like</span> {props.likecount}
            </div>
        </div>
    )
}

export default Post;
