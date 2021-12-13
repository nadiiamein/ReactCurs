import React from 'react';
import './App.css';
import Navbar from './componets/Navbar/Navbar.jsx';
import ProfileContainer from './componets/Profile/ProfileContainer.jsx';
import DialogsContainer from './componets/Dialogs/DialogsContainer.jsx';
import UsersContainer from './componets/Users/UsersContainer.jsx';
import {Route} from 'react-router-dom';
import HeaderContainer from './componets/Header/HeaderContainer';
import LoginPage from "./componets/Login/Login.jsx";


const App =() => {
  return (
    <div className='app-wrapper'>
   <HeaderContainer />
    <Navbar />
    <div className='app-wrapper-content'>
    <Route path='/dialogs' render={ () => <DialogsContainer /> } />

    <Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />
    <Route path='/users' render={ () => <UsersContainer /> } />

    <Route path='/login' render={ () => <LoginPage /> } />

    </div>
    </div>
  );
}

export default App;
