import React from "react";
import Button from 'react-bootstrap/Button';
import Misson from "./Misson";
import Service from "./Service";
import Footer from "./Footer";
import video from './office.mp4';
import './design1.css';
function Example() {
  return (
    <div className="border-top bg-c-light">
     <video autoPlay loop muted className="video " src={video} type="video/mp4" />
     <div className="name">
        <h1 className="back">Welcome</h1>
        <h1 className="back1">To Softech Infoways</h1>
        </div>
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
    <br />
    <Service />
    <br></br><br /><br />
    <Footer />

    </div>
    
  );
}

export default Example;