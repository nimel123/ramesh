import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './Aboutus.css';
import react from './react.jpg';
import react1 from './react4.jpg';
import react2 from './react3.jpg';
import native from './react native.jpg';
import python from './python.jfif';
import js from './js.jpg';
import cplus from './c++.jfif';
import c from './c.jpg';
import sharp from './sharp.jfif';
import php from './php.jpg';
import css from './css.jfif';
import study from './study.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {BrowserRouter as Router,Link,Routes,Route} from "react-router-dom";
import Footer from './Footer';
import special from './class.svg';
import { useEffect } from 'react';
function About() {

  return (
    <>
    <div className='slider'>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src={react} className='slide'></img>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src={react1} className='slide'></img>
      </Carousel.Item>
      <Carousel.Item>
      <img src={react2} className='slide'></img>
      </Carousel.Item>
    </Carousel>
    </div >
    <div className='slider border-top'>
     <h1 className='slider1'><u>About Us</u></h1>
     <br/><br/>
    
     <Container>
    
      <Row>
        <Col>
        <br/>
        <p className='detail'>
     We are suited in Sirsa Haryana 125076 since 25 years. We are working from since 2000 in the field of teaching programming language to students in effective way to boost their carrier. We are teaching back-end and frount-end development and  full stack in best and easy way.
     with programming we are teaching coaching for Data Structure, BCA, MCA, MSC, and PGDCA Tally and DCA.
     </p>

        </Col>
        <Col >
          <img src={study} className='study'></img>
        </Col>
      </Row>
   
     </Container>
     
     <br/><br/>
    </div>
    <div className='border-top slider'>
        <h1 className='slider1'><u>Our Special Languages</u></h1>
        <br/><br/>
        <center>
        <Container>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src={native} className='logo'/>
      <Card.Body>
        <Card.Title>React</Card.Title>
        <Card.Text>
        React in used to develop single-page, server-rendered applications with frameworks like Next.js.
        </Card.Text>
      <Button variant="primary" as={Link} to="/AboutReact">Read more</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={python} className='logo'/>
      <Card.Body>
        <Card.Title>Python</Card.Title>
        <Card.Text>
       Python is an excellent choice for beginners. It’s widely used in data science, AI and more.
        </Card.Text>
        <Button variant="primary" as={Link} to="/PythonAbout">Read more</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.EhX3HPw7HvuTlvqbdmNaGQAAAA?w=337&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"className='logo' />
      <Card.Body>
        <Card.Title>Java</Card.Title>
        <Card.Text>
        Java remains a robust language,App development and large-scale enterprise applications.
        </Card.Text>
        <Button variant="primary" as={Link} to="/JavaAbout">Read more</Button>
      </Card.Body>
    </Card> 
        </Col>
      </Row>
<br/><br/><br/>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={js} className='logo'/>
      <Card.Body>
        <Card.Title>Java Script</Card.Title>
        <Card.Text>
        A key player for both front-end and back-end development, JavaScript is essential for web technologies.
        </Card.Text>
        <Button variant="primary"as={Link} to="/JavaSAbout">Read more</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cplus} className='logo' />
      <Card.Body>
        <Card.Title>C++</Card.Title>
        <Card.Text>
        C++ is a cross-platform language that can be used to create high-performance applications.
        </Card.Text>
        <Button variant="primary" as={Link} to="/CplusAbout">Read more</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={c} className='logo1'/>
      <Card.Body>
        <Card.Title>C</Card.Title>
        <Card.Text>
        C is a general-purpose programming language that is extremely flexible to use.
        </Card.Text>
        <Button variant="primary" as={Link} to="/CAbout">Read more</Button>
      </Card.Body>
    </Card> 
        </Col>
      </Row>
      
      <br/><br/><br/>   
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sharp} className='logo'/>
      <Card.Body>
        <Card.Title>C#</Card.Title>
        <Card.Text>
        C# is primarily used for Windows application development, game development (with Unity), and enterprise software1.
        </Card.Text>
        <Button variant="primary" as={Link} to="/Sharp">Read more</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={php} className='logo'/>
      <Card.Body>
        <Card.Title>PHP</Card.Title>
        <Card.Text>
        Although its popularity has waned a bit, PHP is still used for web development, especially in server-side scripting.
        </Card.Text>
        <Button variant="primary" as={Link} to='/PHP'>Read more</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={css} className='logo'/>
      <Card.Body>
        <Card.Title>HTML & CSS</Card.Title>
        <Card.Text>
        CSS is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML.
        </Card.Text>
        <Button variant="primary" as={Link} to="/html">Read more</Button>
      </Card.Body>
    </Card> 
        </Col>
      </Row>
    </Container>
    </center>
    <br/><br/>
    <div className='border-top slider'>
        <h1 className='slider1'><u>Our Special Classes</u></h1>
   
    <Container>
    
      <Row>
        <Col>
      
       <img src={special} />
   
        </Col>
        <Col >
        <br/><br/><br/> <br/><br/>
        <p className='detail'>
       <h1 className='hoverclass'>1. BCA</h1>
       <h1 className='hoverclass'>2. MCA</h1>
       <h1 className='hoverclass'>3. PGDCA</h1>
       <h1 className='hoverclass'>4. MSC</h1>
       <h1 className='hoverclass'>5. DCA</h1>
       <h1 className='hoverclass'>6. DATA STRUCTURE</h1>
    </p>      
        </Col>
      </Row>
   
     </Container>
<br/>
    </div>

    <Footer/>
    </div>
    </>
  );
}

export default About;