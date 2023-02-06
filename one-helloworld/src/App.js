import React from 'react';
import "./index.css";
import Button from "./Button";

const App = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Hello world !</h1>
            <Button title="Appe Store"/>
            <Button title="Play Store"/>
            <Button />
            {/* <button className="button">Play Store</button> */}
        </div>
    );
}

export default App;