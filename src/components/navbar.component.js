import React,{Component} from 'react';
import {Outlet,Link} from 'react-router-dom';

export default class Navbar extends Component{

    render(){
        return(
            // this is the navbar that is displayed on every page
            //these are bootstrap classes look em up
            <>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    {/* // the links are used to navigate to the different pages */}
                    <Link to="/" className="navbar-brand">Excersize Tracker</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/excersizes" className="nav-link">Excersizes</Link>
                            </li> 
                            <li className="navbar-item">
                                <Link to="/wierd" className="nav-link">Wierd Comp</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/home" className="nav-link">Home</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link">Create Excersize Log</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/user" className="nav-link">Create User</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/edit/:id" className="nav-link">Edit Excersize</Link>
                            </li>
                           
                        </ul>
                    </div>
                </nav>

                <Outlet />
            </>
        );
    }
}