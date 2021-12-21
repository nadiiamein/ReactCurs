import React from 'react';
import s from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
      <header className={s.header}>
        <img src="https://media.baamboozle.com/uploads/images/217318/1607845230_119790">
          alt='' width='100' height='50'
        </img>
        <div className={s.loginBlock}>
          {props.isAuth 
          ? <div> {props.login} - <button onClick={props.startLogout}>Log out</button> </div>
          : <NavLink to={"/login"}>Login</NavLink>}
        </div>
      </header>
    );
 
    
};

export default Header;