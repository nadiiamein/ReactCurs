import React from 'react';
import './App.css';
import Header from './componets/Header/Header.jsx';
import Navbar from './componets/Navbar/Navbar.jsx';
import Profile from './componets/Profile/Profile.jsx';
import Dialogs from './componets/Dialogs/Dialogs.jsx';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

const App =(props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
   <Header />
    <Navbar/>
    <div className='app-wrapper-content'>
    <Route  path='/profile' render={ () => <Profile posts={props.posts} />} />
    <Route path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}/>} />

    </div>
    </div>
    </BrowserRouter>
  );
}



export default App;
