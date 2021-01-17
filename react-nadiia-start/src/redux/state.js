import {renderEntireTree} from '../render.js';

  let state = {

    profilePage: {
        posts:
 [
    {id: 1, message: 'Hallo!Wie geht es?', likesCount: 12},
     {id: 2, message: 'Das ist mein erste Post', likesCount: 42}
   
  ]
  
    },
    
    dialogsPage: {
        dialogs:
  [
    {id: 1, name: 'Peter'},
    {id: 2, name: 'Petra'},
    {id: 3, name: 'Angela'},
    {id: 4, name: 'Domian'},
    {id: 5, name: 'Tomas'},
    {id: 6, name: 'Martin'},
  
  ],
        messages: 
        [
        {id: 1, message: 'Hallo'},
        {id: 2, message: 'Wie geht es dir?'},
        {id: 3, message: 'Ich lerne ReactJS'},
        {id: 4, message: 'Ich auch'},
        {id: 5, message: 'Ich bin kaputt'},
        {id: 6, message: 'Peter?'},
        
        ]
      

    }
 
  };

   export let addPost = (postMessage) => {
     debugger;
    let newPost = {
      id: 5,
      message: postMessage,
      likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
  };

  export default state;
