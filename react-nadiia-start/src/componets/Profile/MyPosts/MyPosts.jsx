import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {

  let postData=[
    {id: 1, message: 'Hallo!Wie geht es?', likesCount: 12},
    {id: 2, message: 'Das ist mein erste Post', likesCount: 42}
  
]


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
  <Post message={postData[0].message} likesCount= {postData[0].likesCount}/>
  <Post message={postData[1].message} likesCount= {postData[1].likesCount}/>
    </div>
    </div>
    );
}

export default MyPosts;