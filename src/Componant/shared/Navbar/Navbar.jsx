
import React, {  useContext, useState } from "react";
import { Link } from "react-router-dom";


import img2 from '../../../assets/Moon.svg'
function Navbar() {

  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  const toggleNavbar = () => {
  setNavbarCollapsed(!navbarCollapsed);
  };



  const changeTheme=()=>{
    const icon=document.getElementById('theme')
    document.body.classList.toggle("darktheme")
console.log('click')
  //  if(document.body.classList.contains("darktheme"))
  //  {
  //   icon.src={img}
  //  }
  //  else{
  //   icon.src={img2}
  //  }
  }
  const handleLogout=()=>{
  
  
  
  
  
  
  
  
  
  
    logOut()
}
  return (
    <nav className="navbar navbar-expand-lg   bg-design">
    <div className="container-fluid ">
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarTogglerDemo01"
        aria-expanded={navbarCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse fs-6 fw-semibold ${
          navbarCollapsed ? "show" : ""
        }`}
        id="navbarTogglerDemo01"
      >
        <a className="navbar-brand ps-5 fs-2 fw-bold">
      <img className="w-50" src="https://glamchic.ancorathemes.com/wp-content/uploads/2017/11/logo.png" alt="" />
       
       
        </a>
        <ul className="navbar-nav  ms-auto mb-2 mb-lg-0 pe-5">
          
          <li className="nav-item  ">
            <a className="nav-link text-info active" href="#">
             Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link a active" href="#about">
          Catergory
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link a active" href="#portfolio">
          Post
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link a active" href="#contact">
             Contact
            </a>
          </li>
        
          

         


        </ul>
<img  id="theme"  className="moon" onClick={changeTheme} src={img2} alt="" srcset="" />


        {/* {
                                      user ? <><span> {user.photoURL?<img  title={user.displayName} src={user.photoURL} className='userPhoto rounded' alt='img'></img>:  <FontAwesomeIcon icon={faUser} size="2x" title={user.displayName} />} </span>  <Link  onClick={handleLogout}><button className='button2 ms-2'>Logout</button></Link></> :<> <Link className='' to="/login"><button className='button2'>Login</button></Link> <Link  to="/reg"> <button className='button2 ms-2'>SignUp</button></Link></>
        } */}
      </div>
    </div>
  </nav>
  );
}

export default Navbar;


