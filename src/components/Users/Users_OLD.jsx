import React from "react";
import styles from "./users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/user_man.png";

let getUsers = (props) => {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers( response.data.items   /*[
                    {
                        id: 1,
                        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTcCMa7jFeCw2I1bQBwxjXv_ysp1lCyXTTw&usqp=CAU',
                        followed: false,
                        fullName: 'Pavel',
                        status: 'Developer',
                        location: {city: 'Tallinn', country: 'Estonia'}
                    },
                    {
                        id: 2,
                        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTcCMa7jFeCw2I1bQBwxjXv_ysp1lCyXTTw&usqp=CAU',
                        followed: true,
                        fullName: 'Dima',
                        status: 'Elder',
                        location: {city: 'Narva', country: 'Estonia'}
                    },
                    {
                        id: 3,
                        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTcCMa7jFeCw2I1bQBwxjXv_ysp1lCyXTTw&usqp=CAU',
                        followed: false,
                        fullName: 'Sasha',
                        status: 'Pioner',
                        location: {city: 'Tartu', country: 'Estonia'}
                    }

                ]*/
            );

        });



    }
    return <div>
        <button onClick={getUsers}>Get users</button>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small !=null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
             </span>
            </div>)
        }
    </div>
}

export default getUsers;