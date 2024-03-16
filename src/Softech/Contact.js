import './design1.css'
import call from './call.png';
import time from './time.png';
import email from './email.png';
import address from './address2.webp';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';




function Contact(){
    return(
      
<div className='contact'>
    <center>
        <br></br>
 <h3>Get Connected With</h3>
 <h1 className='softech'>Softech Infoways</h1>
 </center><br></br><br></br>
 <center>
    <Carousel className='goyal'>
        <Carousel.Item > 
        <div className='mobile'>
   <img src={call} className='call'></img>
    <br></br><br></br><br></br>
    <h6 className='all1'>+91 99966-70050</h6>
    <h6 className='all1'>Gagan Goyal</h6>
    <br></br>
    <h6 className='all1'>Phone Number</h6>
</div>
        </Carousel.Item>      
        <Carousel.Item>
        <div className='mobile'>
        <img src={email} className='call'></img>
<br></br><br></br><br></br>
    <h6 className='all1'>info123@gmail.com</h6>
    <br></br><br></br>
    <h6 className='all1'>Email-Address</h6>
  </div>
        </Carousel.Item>
        
        <Carousel.Item>
            <div className='mobile'>
    <img src={time}className='call'></img>
<br></br><br></br><br></br>
    <h6 className='all1'>Monday-Sunday</h6>
    <h6 className='all1'>7:00 am-7:00 pm</h6>
    <br></br>
    <h6 className='all1'>Business Hour</h6>
    </div>
   

        </Carousel.Item>
        <Carousel.Item>
        <div className='mobile'>
  
        <img src={address}className='call'></img>
    <br></br><br></br>
    <h6 className='all1'>Suvidha Marg,Aggersen Colony,Sirsa(125055)<br></br>Haryana</h6>
    <br></br>
    <h6 className='all1'>Office Address</h6>

    </div>
        </Carousel.Item>
       
    </Carousel>
    </center> 

 <br></br>
<center>
 <div id="message">
  <h2 className="softech">Send us a message</h2>
  If you are satisfied in visiting our website and looking for any of our services.<br></br>
  Then feel free to contact us. Here are our contact details and adressess for your convenience.<br></br>   
  </div>  
  </center>
 
  <div className='d-flex align-items-center justify-content-center text-left min-vh-100'>

  <Form >
      <Row>
        <Col>
        <Form.Label>Name</Form.Label>
          <Form.Control placeholder="First name"  />
        </Col>
        <Col>
        <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Haryana</option>
            <option>Punjab</option>
            <option>Kerala</option>
            <option>Rajasthan</option>
            <option>Jammu & Kashmir</option>
            <option>Himachal Pardesh</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="I agree to the Terms of Service and Privacy Policy" />
      </Form.Group>
   <center>
      <Button variant="primary " type="submit">
        Submit
      </Button>
      </center>
    </Form>
       
        
   
   


    <br></br><br></br>
   
   
  </div>
 
</div>
    );
}
export default Contact;