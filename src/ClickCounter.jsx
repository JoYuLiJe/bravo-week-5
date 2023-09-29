//Create a functional component called Click Counter.
// It should have a paragraph tag that displays the current 'count'
// and a button element that increments the count whenever it is clicked
// Import and use this component in app.jsx

import { useState } from "react";

const ClickCounter = () => {
    /* UseState is a function that returns an array that conatains two things;
    a variable and a function whose only job is to change that variable (or SET it)
    the parameter you give useState sets the initial value of the variable
    */

    const [count, setCount] = useState(0);

    // const = count + 5; BAD
    // setCount(count + 5); GOOD

    return (
        <>
            <h2>Exercise 2</h2>
            <p>The current count is: {count}</p>
            <button style={{ color: 'blue'}} onClick={() => setCount(count + 1)}>Increment the count!</button>
            <p>Add button that resets the count</p>
            <button onClick={() => setCount(0)}>Reset counter to zero!</button>
            
            {/* <p>{count > 10 ? "BIG" : "SMALL"}</p> */}
            <p>{count > 10 ? (count > 50 ? "HUGE" : "BIG"): "SMALL"}</p>

        </>

    )
}

export default ClickCounter;
