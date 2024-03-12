import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import './design1.css';
function Misson(){
    return(
        
<div className="bg-c-light">
<Container>
<Row>
 <Col>
 <div className="text-center">
 <h5>Our Vision</h5>
<p >To be a company that inspires and fulfills your curiosity.</p>
</div>
 </Col>
 <Col>
 <div className="text-center">
 <h5>Our Misson</h5>
<p >Meaningful transparency and thoughtful design. We’re on a mission to change the world, one product at a time.</p>
</div>
 </Col>
 <Col>
 <div className="text-center">
 <h5>Our Value</h5>
<p >We take the time to celebrate each other wholeheartedly.</p>
</div>
 </Col>
</Row>
</Container>
<br />
</div>
    );
}
export default Misson;