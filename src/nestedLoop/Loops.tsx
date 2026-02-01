
const Loops = ({dept}: any) => {
    return (
        <div key={dept.name}>
            <h2>College Type :  {dept.name}</h2>
            {dept.courses.map((course: any) => (
                <div key={course.name} style={{ marginLeft: '20px' }}>
                    <h3>Course Name : {course.name}</h3>
                    <ul>
                        {course.subjects.map((subject: any) => (
                            <li key={subject}> Subject : {subject}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
};

export default Loops;