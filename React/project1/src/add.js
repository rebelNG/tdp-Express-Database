function Addition(){
    let a = 200
    let b = 300
    let c = a+b
    return(
        <>
            <table border = "2">
                <tr>
                    <td> First Number</td>
                    <td>{a}</td>
                </tr>
                <tr>
                    <td> Second Number</td>
                    <td>{b}</td>
                </tr>
                <tr>
                    <td> Result</td>
                    <td> {c} </td>
                </tr>
            </table>
        </>
    )
}

export default Addition;