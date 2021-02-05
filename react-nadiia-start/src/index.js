import App from './App';
import store, {subscribe} from './redux/state.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


 let renderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} addPost={store.addPost.bind(store)} updateNewpPostsText={store.updateNewpPostsText.bind(store)}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
    
  }




renderEntireTree(store.getState());
store.subscribe(renderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
