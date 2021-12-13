import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        ],
      newMessageBody: ""

    },
    sidebar: {}
 
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
    },


  _callSubscriber() {
    console.log('State is changed');
  },
  
    dispatch(action){
      
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);

      this._callSubscriber(this._state);
    
  }
}

window.state = store;
  export default store;
