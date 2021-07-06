import React from "react";
import styles from './../Dialogs.module.css'



type MessageUserType = {
    message: string
}



const UserMessage: React.FC<MessageUserType> = (props) => {
    return (
        <div className={styles.messages}>
            <div className={styles.message}>{props.message}</div>
        </div>
    )
}




export default UserMessage