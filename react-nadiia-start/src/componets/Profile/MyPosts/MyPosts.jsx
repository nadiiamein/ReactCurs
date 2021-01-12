import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
          <h3>Mein Posts</h3>
      <div>
        <div>
       <textarea></textarea>
       </div>
       <div>
       <button>Add post</button>
       </div>
      </div>
<div className={s.posts}>
     <Post message='Hallo!Wie geht es?'/>
     <Post message='Das ist mein erstePost'/>
    </div>
    </div>
    );
}

export default MyPosts;