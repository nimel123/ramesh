import Softech from './Softech';
import './design1.css';
import softech from './softech.jfif';
import softech1 from './softech2.jpeg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home(){
    return(
        <div className='contact'>
     
            <br></br>
            <div className='marquee'> 
<marquee behaviour scrollamount="10">
    <h1>Welcome to Softech Infoways</h1>
    </marquee>
    <Container>
    <Row>
        <Col> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>"holder.js/100px180"
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
        <Col> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
        <Col> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
      </Row>
      </Container>
   
</div>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<br></br>
</div>
    );
}
export default Home;