function ToDo(){

    return(
        <div>
            <h1>To Do Component</h1>
            <img src="react.svg" alt="To Do React Image" className="reactodo-image"/>
            <ul>
                <li>Learn to add HTML in React</li>
                <li>Build a ToDo App</li>
                <li>Master TypeScript</li>
            </ul>
            <button onClick={() => alert("Button clicked!")}>Click Me!</button>
        </div>
    )
}
export default ToDo;

// This file defines a ToDo component in React using TypeScript
// The component returns a div containing a heading, an image, and a list of tasks
// The component is exported as the default export for use in other files