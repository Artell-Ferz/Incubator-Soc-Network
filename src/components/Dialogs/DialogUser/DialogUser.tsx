import React from "react";
import styles from './../Dialogs.module.css'
import {NavLink} from "react-router-dom"

type UserDialogType = {
    name: string
    id: string
}

const DialogUser: React.FC<UserDialogType> = (props) => {

    let path = '/dialogs/' + props.id

    return (

        <NavLink to={path}>
            <div className={styles.dialog}>{props.name}</div>
        </NavLink>
    )
}




export default DialogUser