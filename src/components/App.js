import React from 'react';
import Navigation from "./Navigation";
import RouterSwitch from "./RouterSwitch";

// yarn add react-router-dom bootstrap

// 2 parts: Navigation component for displaying all the hyperlinks
// and RouterSwitch (logic to open page without reloading)

function App() {
    return (
        <div className="container">
            <Navigation />
            <RouterSwitch />
        </div>
    );
}

export default App;