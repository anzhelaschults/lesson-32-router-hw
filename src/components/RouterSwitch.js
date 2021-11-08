import React from 'react'
import {Switch, Route} from "react-router-dom";
import TodoList from "./TodoList";

// if path="/" exact={true} - - - we render Home ---- route for Home page
// if path="/about"> - - - we render About - - - route for About page
//  path="/to do"> we call component <TodoList />


export default props => (
    <Switch>
        <Route path="/" exact={true}>
            <h2>Home</h2>
        </Route>
        <Route path="/about">
            <h2>About</h2>
        </Route>
        <Route path="/todo">
            <TodoList />
        </Route>
    </Switch>
)
