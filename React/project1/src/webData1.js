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

    function clickButton(){
        let postId = document.getElementById("t1").value
        let url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`

        let responsePromise = fetch(url)
        responsePromise.then(processResponse)
    }

    // let responsePromise = fetch('https://jsonplaceholder.typicode.com/comments')
    // responsePromise.then(processResponse)
    return(
        <>

            <input type="text" id="t1"></input>
            <input type="Button" id="btn1" onClick={clickButton}/>
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