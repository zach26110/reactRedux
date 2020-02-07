import React, {useState} from 'react';
import './App.css';
import Header from "./html/Header";

function App() {
    const [link, setLink] = useState('/');

    return (
        <div className="App">
            <Header setLink={setLink}/>
            <h1>{link}</h1>

        </div>
    );
}

export default App;
