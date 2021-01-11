import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
 return   (
        <div className={s.dialogs}>
<div className={s.dialogsItems}>

    <div className={s.dialog + '' + s.active}>
Peter
    </div>
    <div className={s.dialog}>
Petra
    </div>
    <div className={s.dialog}>
Angela
    </div>
    <div className={s.dialog}>
Domian
    </div>
    <div className={s.dialog}>
Tomas
    </div>
    <div className={s.dialog}>
Martin
    </div>
</div>
       <div className={s.messages}>
       <div className={s.message}>Hallo</div>
       <div className={s.message}>Was macht du den gerade?</div>
       <div className={s.message}>Kod schreiben</div>

       </div>
        </div>
    );
}

export default Dialogs; 