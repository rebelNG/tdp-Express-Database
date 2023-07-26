import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home';
import Team from './Team';
import Services from './Services';
import Aboutus from './Aboutus';
import Footer from './Footer';
import WebData from './webData';
import WebData1 from './webData1';
import WebData2 from './webData2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1><center> Welcome To Nationwide</center></h1>

    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/aboutus"> About Us </Link></li>
          <li><Link to="/services"> Services </Link></li>
          <li><Link to="/myteam"> Team </Link></li>
          <li><Link to="/comments"> Comments</Link></li>
          <li><Link to="/specComments"> Specific Comments</Link></li>
          <li><Link to="/title"> Title</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/myteam' element={<Team/>}></Route>
        <Route path='/aboutus' element={<Aboutus/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/comments' element={<WebData/>}></Route>
        <Route path='/specComments' element={<WebData1/>}></Route>
        <Route path='/title' element={<WebData2/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
