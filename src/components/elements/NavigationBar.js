import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const NavigationBar = () => {
    return(
    <nav className="navbar shadow navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">Redux Posts</Link>                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" href="#!">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a href="#!" className="nav-link">Posts</a>
                        </li>
                        <li className="nav-item">
                            <a href="#!" className="nav-link">Contact</a>
                        </li>
                    </ul>                        
                    </div>
                    <Link to="/post/add" className="btn btn-dark ml-auto">Add Posts</Link>
                </div>
    </nav>        
    );
}
export default NavigationBar;