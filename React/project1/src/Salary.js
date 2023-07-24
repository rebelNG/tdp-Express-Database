function SalarySlip(props){

    let salary = props.salary
    let tax=0
    
    if(salary>=2000){
        tax = salary * (21/100)
    }else{
        tax = salary * (15/100)
    }
    let net = salary - tax
    return(
        <>
            <h2>Salary Slip of {props.name}</h2><br/>

            Salary: {salary}<br/>
            Tax is: {tax} <br/>
            Net Salary: {net}
        </>
    )
}

export default SalarySlip;