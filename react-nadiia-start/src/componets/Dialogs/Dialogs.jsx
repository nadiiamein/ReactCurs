import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "dialogs/1" + props.id;
    return (
<div className={s.dialog + '' + s.active}>
<NavLink to={path}>{props.name}</NavLink>
    </div>
    );
}

const Message = (props) => {
    return (       <div className={s.dialog}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    let DialogsData=[
        {id: 1, name: 'Peter'},
        {id: 2, name: 'Petra'},
        {id: 3, name: 'Angela'},
        {id: 4, name: 'Domian'},
        {id: 5, name: 'Tomas'},
        {id: 6, name: 'Martin'},

]

let messagesData=[
    {id: 1, message: 'Hallo'},
    {id: 2, message: 'Wie geht es dir?'},
    {id: 3, message: 'Ich lerne ReactJS'},
    {id: 4, message: 'Ich auch'},
    {id: 5, message: 'Ich bin kaputt'},
    {id: 6, message: 'Peter?'},

]

 return   (
        <div className={s.dialogs}>
<div className={s.dialogsItems}>

<DialogItem name={DialogsData[0].name} id = {DialogsData[0].id} />
<DialogItem name={DialogsData[1].name} id = {DialogsData[1].id} />
</div>
       <div className={s.messages}>
       <Message message={messagesData[0].message}/>
       <Message message={messagesData[1].message}/>
       


       </div>
        </div>
    );
}

export default Dialogs; 