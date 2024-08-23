import React from "react";
import Bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Navbar.css';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const HandleNavigate = () =>{
    navigate("/home");
  }
  const GotoAbout= () =>{
    navigate("/about");
  }
  const GotoProducts=() =>{
    navigate("/products");
  }
  var Search;
  const GotoSearch=() =>{
    Search=document.getElementById("search").value;
    navigate(`/${Search}`);
  }
  const GotoContact= ()=>{
    navigate("/contact");
  }
    return(
        <>
        <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="">Laptops</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" onClick={HandleNavigate} href="">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={GotoProducts} href="">Products</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="">
              More
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" onClick={GotoAbout} style={{cursor: "pointer"}} href="">About Us</a></li>
              <li><a className="dropdown-item" style={{cursor: "pointer"}} onClick={GotoContact} href="">Contact us</a></li>
              <li>
              </li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search"/>
          <button className="btn btn-success" type="submit" onClick={GotoSearch} >Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}