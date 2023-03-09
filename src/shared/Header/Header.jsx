import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {NavLink} from 'react-router-dom';
import styled from '@emotion/styled';


const Tabs = styled(NavLink)`
fonst-size: 20px;
margin-right: 20px;
color: white;
`


function Header(){
  return (
    <Navbar fixed='top' collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand><Tabs to="/">Traveller</Tabs></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Tabs to="/">Home</Tabs></Nav.Link>
            <Nav.Link><Tabs to="/Contact">Contact</Tabs></Nav.Link>
            <NavDropdown title="Blogs" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                    <NavLink to="/all">Blog Archive</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                    {/* <NavLink to="/Single">Single</NavLink> */}
              </NavDropdown.Item>
              <NavDropdown.Item>
                     <NavLink to="/category">Blogs by Category</NavLink>
              </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link><Tabs to="/Compose">Compose</Tabs></Nav.Link>
            <Nav.Link><Tabs to="/MyBlogs">My Blogs</Tabs></Nav.Link>
            <Nav.Link><Tabs to="/login">Logout</Tabs></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
  
      

  













/* 





 */


 
 
 
  );
}

export default Header;