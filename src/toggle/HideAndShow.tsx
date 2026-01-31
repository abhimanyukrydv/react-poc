
import { useState} from "react";
import  User from "./User";


function HideAndShow() {
    const [isVisible, setIsVisible] = useState<boolean>(true); // state to track visibility

    function toggleVisibility(elementId: string): void {    // function to toggle visibility of an element by its ID

        const element = document.getElementById(elementId); // get the element by ID
        
        if (element) { // check if element exists
            if (element.style.display === "none") { // toggle display style
                element.style.display = "block"; // show element
            } else {
                element.style.display = "none"; // hide element
            }
        }
    }

    return (
        <div>
            <button onClick={() => toggleVisibility("myElement")}>Toggle Visibility</button> 
            <h2 id="myElement">This is a toggleable element.</h2>

            <button onClick={() => setIsVisible(!isVisible)}>Toggle Component</button>
            {
                isVisible ? <User /> : null
            }

        </div>
    );
}

export default HideAndShow;
// This file defines a function to toggle the visibility of an HTML element by its ID
// The function checks the current display style and switches between "none" and "block"
// It uses TypeScript for type safety, specifying the parameter type as string and return type as void
// The function is exported as the default export for use in other files