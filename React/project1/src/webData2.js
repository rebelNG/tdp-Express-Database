import { useState } from "react";

function WebData(){

            let[posts, setPosts]=useState([])
            let[comments, setComments]=useState([])

            function getDatum(data){
                setComments(data)
            }

            function getData(data){
                setPosts(data)
            }

            function processResponse(response){
                let jsonPromise = response.json()
                jsonPromise.then(getData)
            }
            function processComments(response){
                let jsonPromise = response.json()
                jsonPromise.then(getDatum)
            }
            function clickButton(){
                let postId = document.getElementById("td1").value
                let url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`

                let commentPromise = fetch(url)
                commentPromise.then(processComments)
            }

            let responsePromise = fetch('https://jsonplaceholder.typicode.com/posts')
            responsePromise.then(processResponse)
    return(
        <>

            
            <table>
            
                {
                    posts.map((rec)=>
                        <tr>
                            
                            <td id="td1">{rec.title}</td>
                            <td><input type="Button" value="Comments" onClick={()=>clickButton(rec.id)}></input></td>
                        </tr>
                    )
                }
            </table>
        </>
    )
}

export default WebData