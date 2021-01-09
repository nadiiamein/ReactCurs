import React from 'react';
import s from './Profile.module.css';


const Profile = () => {
    return (
    <div className={s.content}>

    <div className={s.image}>
      <img src='https://w-dog.ru/wallpapers/10/0/431531185389227/podsolnux-solnce-leto-priroda.jpg'></img>
    </div>

    <div>
    ava + description
    </div>

    <div>Mein Posts

      <div>
        Nue Post
      </div>
<div className={s.posts}>
      <div className={s.item}>
        Post1
      </div>

      <div className={s.item}>
        Post2
      </div>

      <div className={s.item}>
        Post3
      </div>

    </div>
    </div>
  </div>);
}

export default Profile;