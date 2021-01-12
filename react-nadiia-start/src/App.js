import React from 'react';
import './App.css';
import Header from './componets/Header/Header.jsx';
import Navbar from './componets/Navbar/Navbar.jsx';
import Profile from './componets/Profile/Profile.jsx';
import Dialogs from './componets/Dialogs/Dialogs.jsx';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
const App =() => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
   <Header />
    <Navbar/>
    <div className='app-wrapper-content'>
    <Route  exact path='/profile' component={Profile} />
    <Route path='/dialogs' component={Dialogs} />
    {/* <Route path='/news' component={News} />
    <Route path='/music' component={Music} />
    <Route path='/settings' component={Settings} /> */}


    </div>
    </div>
    </BrowserRouter>
  );
}



export default App;
