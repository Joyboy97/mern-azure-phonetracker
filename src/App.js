// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.component';
import ExcersizeList from './components/excersize-list.component';
import EditExcersize from './components/edit-excersize.component';
import CreateExcersize from './components/create-excersize.component';
import CreateUser from './components/create-user.component';
// import Wierd from './pages/Wierd';
// import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <br />
        Hey routes where yall at?
        <Routes>
          <Route path="/" element={<ExcersizeList/>}/>
            {/* <Route path="wierd" element={<Wierd />} />
            <Route path="home" element={<Home />} /> */}
            <Route path="/edit/:id" element={<EditExcersize/>} />
            <Route path="create" element={<CreateExcersize/>} />
            <Route path="user" element={<CreateUser/>} />
            
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

