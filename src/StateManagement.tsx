
import {useState} from 'react';

const dummyName = "Abhimanyu";

function StaterManagement() {
    const [count, setCount] = useState<number>(0); // Initializing count state with 0
    const [name, setName] = useState<string>(dummyName); // Initializing name state with dummyName
  return (

    <div>
      <h2> State Management in React </h2>
        // Count State Management
        // Displaying and updating count state
        // Using inline styles for margin
        // Using arrow functions in onClick handlers
        // Conditional logic in state updates
      <p>Count: {count}</p>
      <button onClick={() =>count < 50 ?setCount(count + 1) : setCount(count)}>Increment</button>
        <button style={{marginLeft: "20px"}} onClick={() =>  count >0 ? setCount(count - 1): setCount(0)}>Decrement</button>

        <hr />
        // Name State Management
        // Displaying and updating name state
        // Resetting name to dummyName
        // Using inline styles for margin
        // Using arrow functions in onClick handlers
        // Conditional logic in state updates
        <p>Name: {name}</p>
        <button onClick={() => setName("John")}>Set Name</button>
        <button style={{marginLeft: "20px"}} onClick={() => setName(dummyName)}>Reset Name</button>
    </div>

  );
}

export default StaterManagement;
// This file demonstrates basic state management in React using the useState hook
// useState allows you to add state variables to functional components
// The state variable and its setter function are returned as an array from useState
// You can update the state using the setter function, which triggers a re-render of the component
// In this example, we manage a count and a name state variable with buttons to update them\

function setValue(value: string): void {
    // This function is just a placeholder to demonstrate setting a value
    console.log("Value set to:", value);
    // setName(value);
}