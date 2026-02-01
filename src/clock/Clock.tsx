
import { useEffect, useState } from "react";

type ClockProps = { time?: string; color?: string };

const Clock = (props: ClockProps) => {

    const [time, setTime] = useState<string>(props.time ?? new Date().toLocaleTimeString());

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return (
        <div>
            <h3 style={{ color: props.color ?? "inherit" }}>The time is: {time}</h3>
        </div>
    );
};

export default Clock;