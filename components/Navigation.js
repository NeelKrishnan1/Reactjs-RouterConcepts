import React from 'react';
import {Link} from "react-router-dom";
import './Navigation.css';
export default function Navigation() {
    return (
<div className='Navigation-container'>
 <ul>
    <li><Link to={"/home"}><h1 className='Link-text'>Home</h1></Link></li>
    <li><Link to={"/signup"}><h1 className='Link-text'>Signup</h1></Link></li>
    <li><Link to={"/login"}><h1 className='Link-text'>Login</h1></Link></li>
</ul>
</div>
    )
}