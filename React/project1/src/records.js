function Records(){
    let employees=[
        {
            "name":"Emmanuel",
            "salary": 2000,
            "Department": 'IT'
        },
        {
            "name":"Petre",
            "salary": 5000,
            "Department": 'Sales'
        },
        {
            "name":"Maestro",
            "salary": 3000,
            "Department": 'HR'
        }
    ]
    // function mapIt(rec){
    //     return rec.name
    // }
    // function check(rec){
    //     if(rec.Department==="IT"){
    //         return true
    //     } else{
    //         return false
    //     }
    // }
    // let names = employees.map(mapIt)
    // let name1 = employees.filter(check)

    // let list1 = employees.map(name1)

    return(
        <>
            <table border="1">
                {
                    employees.map( (record)=>
                                            <tr>
                                                <td> {record.name} </td>
                                                <td> {record.salary}</td>
                                                <td> {record.dept} </td>
                                                <td> {(record.salary) *(21/100)} </td>
                                            </tr>
                                )
                }
            </table>
        </>
    )
}

export default Records;