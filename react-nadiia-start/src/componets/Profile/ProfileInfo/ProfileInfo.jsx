import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (<div>
<div className={s.image}>
      <img src='https://w-dog.ru/wallpapers/10/0/431531185389227/podsolnux-solnce-leto-priroda.jpg'></img>
    </div>

    <div className={s.descriptionBlock}>
    ava + description
    </div>
    </div>

    );
}

export default ProfileInfo;

