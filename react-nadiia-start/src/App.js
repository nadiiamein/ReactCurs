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
    <div claasName='app-wrapper-content'>
    <Route path='component'={Dialogs} />
    <Route path='component'={Profile} />
    <Route path='component'={Dialogs} />
    <Route path='component'={Dialogs} />
    <Route path='component'={Dialogs} />


    </div>
    </div>
    </BrowserRouter>
  );
}



export default App;
