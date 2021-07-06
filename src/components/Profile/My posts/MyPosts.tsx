import React from "react";
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: () => void
    updatePostText: (newText: string) => void
    newPostText: string
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(el => <Post message={el.message} likeCounts={el.likeCounts}/>)

    let postElement: any = React.createRef()

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = postElement.current.value
        props.updatePostText(text)
    }


    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea ref={postElement} onChange={onPostChange} value = {props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            {postsElements}
        </div>
    )
}
export default MyPosts