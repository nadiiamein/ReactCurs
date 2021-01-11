import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  
    return (
       
      <div className={s.item}>
        <img src=''></img>
        {props.message}
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