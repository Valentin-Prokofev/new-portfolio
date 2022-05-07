import React from 'react';
import './App.css';
import {Sidebar} from "./Saidbar/Sidebar";
import {Content} from "./Content/Content";

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <Content/>
        </div>
    );
}

export default App;
