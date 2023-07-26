import { useState } from "react";

function WebData(){

        let[records, setRecords]=useState([])

        function getData(data){
            setRecords(data)
        }

    function processResponse(response){
        let jsonPromise = response.json()
        jsonPromise.then(getData)
    }

    let responsePromise = fetch('https://jsonplaceholder.typicode.com/comments')
    responsePromise.then(processResponse)
    return(
        <>
            <table>
            <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Body</td>
                </tr>
                {
                    records.map((rec)=>
                        <tr>
                            <td>{rec.name}</td>
                            <td>{rec.email}</td>
                            <td>{rec.body}</td>
                        </tr>
                    )
                }
            </table>
        </>
    )
}

export default WebData