import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
    return (
        <div>Mein Posts

      <div>
        Nue Post
      </div>
<div className={s.posts}>
     <Post message='Hallo!Wie geht es?'/>
     <Post message='Das ist mein erstePost'/>
     

    </div>
    </div>
    );
}

export default MyPosts;