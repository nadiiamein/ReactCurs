import React from 'react';
import './App.css';
import Header from './componets/Header.jsx';
import Navbar from './componets/Navbar.jsx';
import Profile from './componets/Profile.jsx';

const App =() => {
  return (
    <div className='app-wrapper'>
   <Header />
    <Navbar/>
   <Profile/>
    </div>
  );
}



export default App;
