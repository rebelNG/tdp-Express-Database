import { useState } from "react";
function Data(){
    let records = [
        {
            "name": "Emmanuel",
            "Dept": "Sales",
            "salary": 2000
        },
        {
            "name": "John",
            "Dept": "Sales",
            "salary": 5000
        }
    ]

    function addEmployee(){
        setEmployee( (oldRecords)=> {
            let newRecord=   {"name":"Jason Bourn","dept":"Tred Stone","salary":40000}
                return [...oldRecords,newRecord]
            })
    }

    let [employees, setEmployee]= useState(records)

    return(
        <>
            <input type="button" value="New Employee" onClick={addEmployee}/>
            <table>
                <tr>
                    <td>Name</td>
                    <td>Department</td>
                    <td>Salary</td>
                </tr>
                {
                    employees.map((rec)=>
                                    <tr>
                                        <td>{rec.name}</td>
                                        <td>{rec.Dept}</td>
                                        <td>{rec.salary}</td>
                                    </tr>
                    )
                }
            </table>
        </>
    )
}

export default Data