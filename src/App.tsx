import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter} from 'react-router-dom';
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
    addPost: () => void
    updatePostText: (newText: string) => void
}


const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"} render={() =>
                        <Profile
                            profilePage={props.state.profilePage}
                            addPost={props.addPost}
                            updatePostText={props.updatePostText}/>}/>
                    <Route path={"/dialogs"} render={() =>
                        <Dialogs
                            dialogsPage={props.state.dialogsPage}/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
