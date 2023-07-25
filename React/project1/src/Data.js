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
        records.push({
            "name":"James",
            "Dept":"HR",
            "salary":10000
        })
        alert(records.length)
    }

    let [employees, setEmployee]= useState(records)

    function doAlert(){
        setEmployee = addEmployee
        return setEmployee()
    }

    return(
        <>
            <input type="button" value="New Employee" onClick={doAlert}/>
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