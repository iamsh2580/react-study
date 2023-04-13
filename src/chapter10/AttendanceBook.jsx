import React from "react";

const students=[
    {
        id:1,
        name:"James"
    },
    {
        id:2,
        name:"Steve"
    },
    {
        id:3,
        name:"Mina"
    },
    {
        id:4,
        name:"Stella"
    }
];

function AttendanceBook(props){
    return(
        <ul>
            {students.map((student)=>{
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    );

}

export default AttendanceBook;