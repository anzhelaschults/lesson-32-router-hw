import React from 'react'
import {Link, NavLink} from "react-router-dom";

// styles from bootstrap
// we create 3 hyperlinks (nav-link): Home, About, to Do

// link to= analyses domain name and everything after "/" considers as home page by default,
// to avoid it we specify exact={true} to="/">Home (only for home page)


export default props => (
    <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid">
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <NavLink className="nav-link" exact={true} to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    <NavLink className="nav-link" to="/todo">ToDo</NavLink>
                </div>
            </div>
        </div>
    </nav>
)