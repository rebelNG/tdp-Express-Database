function Result(props){
    let name = props.name
    let phy = props.phy
    let chem = props.chem
    let mat = props.mat

    let totalMark = phy + chem + mat
    let perc = ((totalMark/450)*100)
    let remark;
    if(perc > 90){
        remark = 'A+'
    } else if (perc >= 80 && perc < 90){
        remark = 'A-'
    } else if (perc >= 70 && perc < 80){
        remark ='B'
    } else if (perc >= 60 && perc < 70){
        remark = 'c'
    } else{
        remark = 'Fail!'
    }

    return(
        <>
            <b>Name: </b> {name}<br/>
            <b>Physics: </b> {phy}<br/>
            <b>Chemistry: </b> {chem}<br/>
            <b>Maths: </b> {mat}<br/>
            Your total score is {totalMark}<br/>
            Your Percentage is {perc}%<br/>
            Remark: <b>{remark}</b> 
        </>
    )
}

export default Result;