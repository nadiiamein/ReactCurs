import React from 'react';
import './App.css';
import Header from './componets/Header/Header.jsx';
import Navbar from './componets/Navbar/Navbar.jsx';
import Profile from './componets/Profile/Profile.jsx';
import Dialogs from './componets/Dialogs/Dialogs.jsx';

const App =() => {
  return (
    <div className='app-wrapper'>
   <Header />
    <Navbar/>
    <div claasName='app-wrapper-content'>
    <Dialogs/>
    </div>
   <Profile/>
    </div>
  );
}



export default App;
