import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
       
      <div className={s.item}>
        <img src=''></img>
        Post1
        <div>
        <span>like</span>
        </div>
        <div>
        <span>dislike</span>
        </div>
      </div>
    );
}

export default Post;