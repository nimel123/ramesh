import {BrowserRouter as Router,Link,Routes,Route} from "react-router-dom";
import Home from './Home';
import About from "./About";
import Contact from "./Contact";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactAbout from "./React1";
import Python from "./AboutPython";
import Java from "./AboutJava";
import JS from "./AboutJS";
import Cplus from "./AboutCplus";
import Cicon from "./C";
import Sharp1 from "./AboutSharp";
import Php1 from "./Aboutphp";
import HTML from "./Abouthtml";
import Button from 'react-bootstrap/Button';

function Softech(){


    return(
      
      <Router>

        <Navbar expand="lg" variant="dark"  className="bg-dark" >
      <Container >      
        <Navbar.Brand>Softech-Infoways</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">     
        <Nav className="me-auto">
        <Nav.Link as={Link} to="/Home">Home </Nav.Link>
        <Nav.Link as={Link} to="/About">About us</Nav.Link>
        <Nav.Link as={Link} to="/Contact">Contact us</Nav.Link>
      
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
        </Navbar.Collapse>
      </Container>      
    </Navbar>
    <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/AboutReact" element={<ReactAbout />}></Route>
            <Route path="/PythonAbout" element={<Python />}></Route>
            <Route path="/JavaAbout" element={<Java />}></Route>
            <Route path="/JavaSAbout" element={<JS />}></Route>
            <Route path="/CplusAbout" element={<Cplus />}></Route>
            <Route path="/CAbout" element={<Cicon />}></Route>
            <Route path="/Sharp" element={<Sharp1 />}></Route>
            <Route path="/PHP" element={<Php1 />}></Route>
            <Route path="/html" element={<HTML />}></Route>
          
     
            
            </Routes>
    
    </Router>
   
    );
}
export default Softech;