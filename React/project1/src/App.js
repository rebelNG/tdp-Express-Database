import logo from './logo.svg';
import './App.css';

import Info from './info';
import Addition from './add';
import Address from './address';
import Information from './Information';


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
      <Information name="Akonuche" address="Chicago"/>
      
    </>
  );
}

export default App;
