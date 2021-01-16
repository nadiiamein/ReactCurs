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
    <Route path='/dialogs' render={ () => <Dialogs 
    state={props.state.dialogsPage} />} />
    

    <Route  path='/profile' render={ () => <Profile 
     state={props.state.profilePage} />} />

    </div>
    </div>
    </BrowserRouter>
  );
}



export default App;
