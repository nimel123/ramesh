import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import pc from './react 2.png';
import pc1 from './react3.jpg';
import pc2 from './react4.jpg';
import Button from 'react-bootstrap/Button';
import Misson from "./Misson";
import Service from "./Service";
import Footer from "./Footer";
import './design1.css';
function Example() {
  return (
    <div className="border-top bg-c-light">
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src={pc} id="pc"></img>
        <Carousel.Caption className="caption">
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <Carousel.Caption className="caption">
           
        </Carousel.Caption>
      <img src={pc1} id="pc"></img>
      </Carousel.Item>
      <Carousel.Item>
       <img src={pc2} id="pc"></img>
       <Carousel.Caption className="caption">
           
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br />
    <div className="size">
    <center>
        <h2 className="main-hadding">Softech Infoways</h2>
        <div className="underline"></div>
        <p className="detail">Software Infoways is a best coatching center and<br />
             company of Information Technology situated in Sirsa(125076) Haryana.
              This company working since 2006.</p>
              <Button variant="outline-warning">Read More</Button>
    </center>
    </div>
    <br></br>

    <div className="border-top "><br />
    <div className="text-center">
      <div className="size">
    <h2 className="main-hadding">Vision Misson and Value</h2>
    <center>
      <div className="underline"></div>
      </center>
      <br />
    <Misson />
    </div>
    </div>
    </div>
    <Service />
    <br></br>
    <Footer />

    </div>
    
  );
}

export default Example;