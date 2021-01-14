import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';


const Profile = () => {

     let posts=[
       {id: 1, message: 'Hallo!Wie geht es?', likesCount: 12},
        {id: 2, message: 'Das ist mein erste Post', likesCount: 42}
      
    ]

    return (
    <div >
<ProfileInfo/>
    <MyPosts posts={} />
  </div>);
}

export default Profile;