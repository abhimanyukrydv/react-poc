import Loops from "./Loops";

const college = [
    {
        name: "Engineering",
        courses: [
            {
                name: "Computer Science",
                subjects: ["Data Structures", "Algorithms", "Operating Systems"]
            },
            {
                name: "Mechanical",
                subjects: ["Thermodynamics", "Fluid Mechanics", "Dynamics"]
            }
        ]
    }
];

const NestedLoop = () => {
    return (
        <div>
            {college.map((dept) => ( // First level map
                <Loops dept={dept} key={dept.name} />
            ))}
        </div>
    );
}
// End of NestedLoop component
// Exporting the NestedLoop component
// This component demonstrates nested mapping over a complex data structure
// representing a college with departments, courses, and subjects.
// Each level of the structure is rendered appropriately using React JSX.
// The outermost map iterates over departments, the middle map over courses,
// and the innermost map over subjects.
// Each item is given a unique key for efficient rendering.
// The component is styled with simple indentation for clarity.
export default NestedLoop;