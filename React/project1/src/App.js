import logo from './logo.svg';
import './App.css';

import Info from './info';
import Addition from './add';
import Address from './address';
import Information from './Information';
import SalarySlip from './Salary';
import Result from './Result';


function App() {
  return (
    <>
      <h1>
        <center>
          Welcome To ReactJS Training
          <br/>
          <Info/>
        </center>
      </h1>
      <Info/><br/>
      <Addition/><br/>
      <Address/><br/>
      <Information name="Emmanuel" address="Middlesbrough"/><br/>
      <Information name="Akonuche" address="Chicago"/><br/>
      <SalarySlip name="Rebel" salary={3000}/><br/>
      <SalarySlip name="James Bond" salary={100000}/><br/>
      <br/>
      <Result name="Emmanuel" phy={95} chem={60} mat={121}/>

      
    </>
  );
}

export default App;
