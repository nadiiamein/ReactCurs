import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

const Dialogs = (props) => {
   
let state = props.dialogsPage;
let dialogsElements= state.dialogs
.map( d => <DialogItem name={d.name} key={d.id} id={d.id} /> );

let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} /> );
let newMessageBody = state.newMessageBody;
    

let onSendMessageClick = () => {
    props.sendMessage();
}
let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
}

if(!props.isAuth) return <Redirect to={"/login}/>;

 return   (
        <div className={s.dialogs}>
<div className={s.dialogsItems}>
    {dialogsElements}

</div>
       <div className={s.messages}>
           {messagesElements}
       </div>
       <div>
           <div><textarea value={newMessageBody}
           onChange={onNewMessageChange}
           placeHolder='Schreiben Sie Ihre Nachricht'></textarea></div>
           <div><button onClick={ onSendMessageClick } >Send</button></div>
       </div>
        </div>
    );
}

export default Dialogs; 