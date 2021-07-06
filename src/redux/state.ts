let rerenderTree = (state: StateType) => {
    console.log('State changed')
}

export type PostType = {
    id: string
    message: string
    likeCounts: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state: StateType = {

    profilePage: {

        posts: [
            {id: '1', message: "trust me", likeCounts: '0'},
            {id: '2', message: "love you", likeCounts: '11'}
        ],
        newPostText: ""
    },

    dialogsPage: {

        dialogs: [
            {id: "1", name: "Artem"},
            {id: "2", name: "Sergey"},
            {id: "3", name: "Andrey"}
        ],
        messages: [
            {id: "1", message: "Hello"},
            {id: "2", message: "How are you?"},
            {id: "3", message: "Bye"}
        ]
    }
}


export type NewPost = {
    id: string
    message: string
    likeCounts: string
}


export const addPost = () => {
    let newPost: NewPost = {
        id: "5",
        message: state.profilePage.newPostText,
        likeCounts: "0"
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    rerenderTree(state)

}


export const updatePostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderTree(state)

}

export const subscribe = (observer: any) => {
    rerenderTree = observer
}

export default state