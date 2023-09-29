//Create a functional component named ToggleText.
//This component should have a button. 
//When the button is clicked, it should toggle a p tag displaying "Button was clicked!" text below it. 
//Import and use this component in App.jsx.

import { useState } from "react";

const ToggleText = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <>
            <h2>Exercise 3</h2>
            <button onClick={() => setClicked(!clicked)}>Toggle Me!</button>
            <p>{clicked ?"" : "Click button to hide me"}</p>
        </>
    )
}


export default ToggleText;
