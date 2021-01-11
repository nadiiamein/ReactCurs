import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';


const Profile = () => {
    return (
    <div >

    <div className={s.image}>
      <img src='https://w-dog.ru/wallpapers/10/0/431531185389227/podsolnux-solnce-leto-priroda.jpg'></img>
    </div>

    <div>
    ava + description
    </div>

    <MyPosts />
  </div>);
}

export default Profile;