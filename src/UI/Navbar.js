import React from 'react';
import classes from './Navbar.module.css';
const Navbar = (props) => {
    return (
        <div className={classes.topnav}>
            <div className={classes.icon}>
                <span className={classes.headingname}>WEBICOUN</span>
            </div>
            <div className={classes.navbuttons}>
                <a href="/home">Home</a>
                <a className={classes.active} href="/blogs">Blogs</a>
                <a href="/pricing">Pricing</a>
                <a href="/contact">Contact</a>
                <button className={classes.logout}>{props.isLoggedIn ? 'Logout' : 'Login'}</button>
            </div>
        </div>
    )
}

export default Navbar