import {useState} from 'react'

function Events(){

    let [x, ChangeData]=useState(10)
    let [alo, aloData] = useState(35)
    function doAlert(){
        
        ChangeData(++x)
    }
    function aloFunc(){
        aloData(2*alo)
    }

    return(
        <>
            <input type="Button" value="Click" onClick={doAlert}/>
            <h5>{x}</h5><br/>
            <input type="Button" value="Press Me" onClick={aloFunc}/>
            <h3>{alo}</h3>
        </>
    )
}

export default Events