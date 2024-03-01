import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fullstack from './fullstack1.webp';
import coaching from './coching.jfif';
import place from './place.jfif';
import './design1.css';

function Service() {
  return (
    <div className="border-top bg-c-light"><br />
    <div className="text-center">
    <h2 className="main-hadding">Our Special Services</h2>
    <center>
      <div className="underline"></div>
      </center><br />  
    </div>
    <center>
    <div className="bg-c-light">
<Container>
<Row>
 <Col>
 <Card style={{ width: '18rem' }}className='hover'>   
      <Card.Img variant="top" src={fullstack} className='fullstack' />
      <Card.Body>
        <Card.Title>Full Stack Development</Card.Title>
      </Card.Body>
      <Card.Text>
       <p id='stack'> In our coaching center provide special coaching for Back-end Frount-end and Full-Stack Development.</p>
      </Card.Text>
    </Card>
 </Col>
 <Col>
 <Card style={{ width: '18rem' }}className='hover'>   
        <Card.Img variant="top" src={coaching} />
        <Card.Body>
          <Card.Title>Special Coaching</Card.Title>  
        </Card.Body>
        <Card.Text>
            <p id='stack'>Our coaching center give special coaching for BCA, MCA, PGDCA, MSC, Summer Tranning, Tally etc.</p>
        </Card.Text>
      </Card>
 </Col>
 <Col>
 <Card style={{ width: '18rem' }}className='hover'>      
        <Card.Img variant="top" src={place} className='place'></Card.Img>
        <Card.Body>
          <Card.Title>Job Placement</Card.Title>   
        </Card.Body>
        <Card.Text>
            <p id='stack'>Our coaching center provide special offers for job placement and provide intership opportunities.</p>
        </Card.Text>
      </Card>
      </Col>
</Row>
</Container>
</div>
</center> 

   

<br></br>
    </div>
  );
}

export default Service;