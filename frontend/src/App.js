import React, {useEffect, useState} from 'react';
import {Deploy} from "./components/deploy/Deploy";
import './App.css';


function App() {
    const [state, setState] = useState({});
    useEffect(() => {
        fetch('/api')
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }
            }).then(data => {
            console.log(data)
            setState(data)
        })
    },[])


    return (
        <div className="App">
            <Deploy resp={state}/>
        </div>
    );
}

export default App;
