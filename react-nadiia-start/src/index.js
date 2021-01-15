import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts=[
  {id: 1, message: 'Hallo!Wie geht es?', likesCount: 12},
   {id: 2, message: 'Das ist mein erste Post', likesCount: 42}
 
];
let dialogs=[
  {id: 1, name: 'Peter'},
  {id: 2, name: 'Petra'},
  {id: 3, name: 'Angela'},
  {id: 4, name: 'Domian'},
  {id: 5, name: 'Tomas'},
  {id: 6, name: 'Martin'},

];
let messages=[
{id: 1, message: 'Hallo'},
{id: 2, message: 'Wie geht es dir?'},
{id: 3, message: 'Ich lerne ReactJS'},
{id: 4, message: 'Ich auch'},
{id: 5, message: 'Ich bin kaputt'},
{id: 6, message: 'Peter?'},

];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
