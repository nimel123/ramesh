import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from'./Home';

function Footer() {
  return (
    <div className='footer'>
        <br></br>
    <Container>
      <Row>
        <Col> 
        <p id='stack1'><u>Company Information</u></p>
        <p id='stack'>
            Softech Infoways company and coaching <br />center situated in Sirsa(125076), Haryana.<br /> This company work since 2006.
        </p>
        </Col>
        <Col>
        <p id='stack1'><u>Quick Links</u></p>
        <p id='stack'>  
                1.<Link to="/Home" className='link'>Home</Link><br />
                2.<Link to="/About" className='link'>About Us</Link><br />
                3.<Link to="/Contact" className='link'>Contact</Link>  
                <Routes>
                    <Route path='/Home' element={<Home />}></Route>
                    <Route path='/About' element={<About />}></Route>
                    <Route path='/Contact' element={<Contact />}></Route>
                </Routes>
        </p>
        </Col>
        <Col >
        <p id='stack1'><u>Contact Information</u></p>
        <p id='stack'>
          #64, Suvidha Marg Sirsa(125076)<br />
          Gagan Goyal &nbsp; +91 99966-70050<br />
          Info@gmail.com
        </p>
        
        </Col>
      </Row>
    </Container>
    <br></br>
    </div>
  );
}

export default Footer;