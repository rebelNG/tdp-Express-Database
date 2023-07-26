
function displayData(records){
    console.log(records);
}

function processResponse(response){
    let promise2 = response.json()
    promise2.then(displayData)
}

let promise1 = fetch('https://jsonplaceholder.typicode.com/comments')

promise1.then(processResponse)