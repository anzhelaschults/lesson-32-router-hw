
// import libraries, than styles, than components

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';

// we create functionality that will display content when we open other page without reloading
// we should NOT reload page each time when we click hyperlink to the next page
//toDo https://reactrouter.com/

// we allow browser to work with our router

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,
  document.getElementById('root')
);

