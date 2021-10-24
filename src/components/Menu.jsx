import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css"
const Menu = () => {
    return (
        <>
           <div className="row">
            <div className="col-lg-3" className="spinner-border"><b>LOGO</b></div>
            
        </div>
        <ul>
        <NavLink exact activeClassName="ac" className="a"to="/" >Home</NavLink>
        <NavLink activeClassName="ac" className="a" to="/about">About</NavLink>
        <NavLink activeClassName="ac" className="a" to="/games">Games</NavLink>
        <NavLink activeClassName="ac" className="a" to="/movies">movies</NavLink>
        <NavLink activeClassName="ac" className="a" to="/pricing">Pricing</NavLink>
        <NavLink activeClassName="ac" className="a" to="/downloads">Downloads</NavLink>
        </ul>
            
        </>
    );
};

export default Menu;