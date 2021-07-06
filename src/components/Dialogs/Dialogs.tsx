import React from "react";
import styles from './Dialogs.module.css'
import DialogUser from "./DialogUser/DialogUser"
import UserMessage from "./UserMessage/UserMessage"
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(el => <DialogUser name={el.name} id={el.id}/>)

    let messagesElements = props.dialogsPage.messages.map(el => <UserMessage message={el.message}/>)

    let messageValue: any = React.createRef()

    let sendMessage = () => {
        alert(messageValue.current.value)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                {messagesElements}
            </div>
            <div>
                <textarea ref={messageValue}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs