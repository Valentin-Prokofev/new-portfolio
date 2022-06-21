import React, {useState} from 'react';
import './App.css';
import {Sidebar} from "./Saidbar/Sidebar";
import {Content} from "./Content/Content";

function App() {

    let [toggle, setToggle] = useState<boolean>(false)

    const onClickHandler = () => {
        setToggle(toggle = !toggle)
    }

    return (
        <div className="App">
            <Sidebar />
            <Content changeToggle={onClickHandler} toggle={toggle}/>
        </div>
    );
}

export default App;
