import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegCircleUser } from "react-icons/fa6";
import './style.css';
import { handleUserLogin } from '../../redux/actions';
import { ToastContainer, toast } from 'react-toastify';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {

  const isUserLogin = useSelector(state=> state.isUserLogin);
  console.log("Header",isUserLogin);
  const dispatch = useDispatch();

  const[toggle, setToggle] = useState(false);

  if(window.innerWidth <= 992) {
       
  }
  

  return (
    <nav>
        <h1>Daily blog</h1>
        {/* <ul>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/myBlog">My Blog</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            {
              isUserLogin? 
              <li>
                <FaRegCircleUser /> 
                <a 
                  style={{fontSize: '14px', textTransform: 'capitalize' }}
                  href='#'
                  onClick={()=> {
                    setTimeout(()=> {
                      dispatch(handleUserLogin(false));
                    },1000)
                }}>
                 Sign out
                </a>
              </li> 
              :
              <>
                <NavLink to="/sign-up">
                  <Button className='btn btn-dark'>Sign Up</Button>
                </NavLink>

                <NavLink to="/sign-in">
                  <Button className='btn btn-danger'>Sign In</Button>
                </NavLink>
              </>
            }            
        </ul> */}
    <ul>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={()=>{
            setToggle(!toggle);
          }} />
          <Navbar.Collapse className={`${toggle? 'activeMobileHeight' : 'inActiveMobileHeight'}`} id="responsive-navbar-nav">
            <Nav>
              <li><NavLink to="/" >Home</NavLink></li> 
              <li><NavLink to="/myBlog">My Blog</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              {
                isUserLogin? 
                <li>
                  <FaRegCircleUser /> 
                  <a 
                  style={{fontSize: '14px', textTransform: 'capitalize' }}
                  href='#'
                  onClick={()=> {
                    setTimeout(()=> {
                      dispatch(handleUserLogin(false));
                    },1000)
                  }}>
                    Sign out
                  </a>
                </li> 
                :
                <>
                  <NavLink to="/sign-up">
                    <Button className='btn btn-dark'>Sign Up</Button>
                  </NavLink>

                  <NavLink to="/sign-in">
                    <Button className='btn btn-danger'>Sign In</Button>
                  </NavLink>
                </>
              } 
            </Nav>
            {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </ul>

    </nav>
  )
}

export default Header;