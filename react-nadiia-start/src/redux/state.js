let store = { 
  _state : {

    profilePage: {
        posts:
 [
    {id: 1, message: 'Hallo!Wie geht es?', likesCount: 12},
     {id: 2, message: 'Das ist mein erste Post', likesCount: 42}
   
  ],
  newPostText: 'naddia programmerin'
  
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
 
  },
  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('State is changed');
  },
  
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';

    this._callSubscriber(this._state);
  },
  updateNewpPostsText (newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
subscribe(observer) {
  this._callSubscriber = observer;
  }
}

window.state = store;
  export default store;
