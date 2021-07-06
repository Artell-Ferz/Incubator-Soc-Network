import React from "react";
import styles from './Profile.module.css'
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./My posts/Post/Post";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updatePostText: (newText: string) => void

}


const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts = {props.profilePage.posts}
                addPost={props.addPost}
                updatePostText={props.updatePostText}
                newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}

export default Profile