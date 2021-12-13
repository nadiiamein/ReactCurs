import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';


const Profile = (props) => {
    return (
    <div>
<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updatestatus}/>
    <MyPostsContainer />
  </div>
  );
}

export default Profile;