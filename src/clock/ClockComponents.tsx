import { useState } from "react";
import Clock from "./Clock";

function ClockComponents() {

    const currentTime = new Date().toLocaleTimeString();
    const [time,] = useState(currentTime);
    const [color, setColor] = useState<string>("blue");


    return (
        <>
            <div>
                <label>
                    Pick color:
                    <select value={color} onChange={(e) => setColor(e.target.value)} >
                        <option style={{ color: "red" }} value="red">Red</option>
                        <option style={{ color: "green" }} value="green">Green</option>
                        <option style={{ color: "yellow" }} value="yellow">Yellow</option>
                    </select>
                </label>

                <p>Selected color: <strong style={{ color }}>{color}</strong></p>

            </div>

            <h1>Clock Component</h1>
            <Clock time={time} color={color} />
        </>
    )
}

export default ClockComponents;