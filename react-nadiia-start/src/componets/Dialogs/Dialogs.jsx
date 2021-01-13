import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

const Dialogs = () => {
    let dialogs=[
        {id: 1, name: 'Peter'},
        {id: 2, name: 'Petra'},
        {id: 3, name: 'Angela'},
        {id: 4, name: 'Domian'},
        {id: 5, name: 'Tomas'},
        {id: 6, name: 'Martin'},

]
let messages=[
    {id: 1, message: 'Hallo'},
    {id: 2, message: 'Wie geht es dir?'},
    {id: 3, message: 'Ich lerne ReactJS'},
    {id: 4, message: 'Ich auch'},
    {id: 5, message: 'Ich bin kaputt'},
    {id: 6, message: 'Peter?'},

]

let dialogsElements= dialogs
.map( d => <DialogItem name={d.name} id={d.id} />
);

let messagesElements = messages.map( m => <Message message={m.message}/>
);


 return   (
        <div className={s.dialogs}>
<div className={s.dialogsItems}>
    {dialogsElements}

</div>
       <div className={s.messages}>
           {messagesElements}
       </div>
        </div>
    );
}

export default Dialogs; 