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
 return   (
        <div className={s.dialogs}>
<div className={s.dialogsItems}>

<DialogItem name="Peter" id = "1" />
<DialogItem name="Petra" id = "2" />
<DialogItem name="Angela" id = "3" />
<DialogItem name="Domian" id = "4" />
<DialogItem name="Tomas" id = "5" />
<DialogItem name="Martin" id = "6" />
</div>
       <div className={s.messages}>
       <Message message="Hallo"/>
       <Message message="Wie geht es dir?"/>
       <Message message="Ich lerne ReactJS"/>

       </div>
        </div>
    );
}

export default Dialogs; 