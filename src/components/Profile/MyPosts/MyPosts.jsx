import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="Hello friends" likecount="5"/>
                <Post message="It'smy first post" likecount="8"/>
               {/* <Post likecount="Like 4"/>
                <Post likecount="Like 7"/>*/}

            </div>
        </div>
    )
}

export default MyPosts;
