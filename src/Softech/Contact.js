import './design1.css'
import call from './call.png';
import time from './time.png';
import email from './email.png';
import address from './address2.webp';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';





function Contact(){
    function details(){
        let name=document.getElementById("name").value;
        let phone=document.getElementById("phone").value;
        let email=document.getElementById("email").value;
        let address=document.getElementById("address").value;
        let query=document.getElementById("query").value;
        if(name=="")
        {
            alert("Please Input Valid Name");
        }
        else
        if(phone=="" || phone.length<10 || phone.length>10)
        {
            alert("Please Input Valid Phone Number");
        }
        else 
        if(email=="")
        {
            alert("Invalid Email");
        }
        else
        if(address=="")
        {
            alert("Address must important");
        }
        else
        if(query=="")
        {
            alert("Please Input Your Query");
        }
        else{
         document.write("Thanks for your Feedback.....✌");
         <br></br>
         document.write("We are trying to give you Response very soon...👍");
        document.getElementById("name").value="";
        document.getElementById("phone").value="";
        document.getElementById("email").value="";
        document.getElementById("address").value="";
        document.getElementById("query").value="";
        }
       
    }
    return(
<div className='contact'>
    <center>
        <br></br>
 <h3>Get Connected With</h3>
 <h1 className='softech'>Softech Infoways</h1>
 </center><br></br>
 <center>
    <Carousel>
        <Carousel.Item>
        <div className='mobile'>
   <img src={call} className='call'></img>
    <br></br><br></br><br></br>
    <h6 className='all'>+91 99966-70050</h6>
    <h6 className='all'>Gagan Goyal</h6>
    <br></br>
    <h6 className='all'>Phone Number</h6>
</div>
        </Carousel.Item>      
        <Carousel.Item>
        <div className='email'>
        <img src={email} className='call'></img>
<br></br><br></br><br></br>
    <h6 className='all'>info123@gmail.com</h6>
    <br></br><br></br>
    <h6 className='all'>Email-Address</h6>
  </div>
        </Carousel.Item>
        
        <Carousel.Item>
            <div className='time'>
    <img src={time}className='call'></img>
<br></br><br></br><br></br>
    <h6 className='all'>Monday-Sunday</h6>
    <h6 className='all'>7:00 am-7:00 pm</h6>
    <br></br>
    <h6 className='all'>Business Hour</h6>
    </div>
   

        </Carousel.Item>
        <Carousel.Item>
        <div className='address'>
  
        <img src={address}className='call'></img>
    <br></br><br></br>
    <h6 className='all'>Suvidha Marg,Aggersen Colony,Sirsa(125055)<br></br>Haryana</h6>
    <br></br>
    <h6 className='all'>Office Address</h6>

    </div>
        </Carousel.Item>
    </Carousel>
    </center> 

 <br></br><br></br>
<center>
 <div id="message">
  <h2 className="softech">Send us a message</h2>
  If you are satisfied in visiting our website and looking for any of our services.<br></br>
  Then feel free to contact us. Here are our contact details and adressess for your convenience.<br></br>   
  </div>  
  </center>
 
  <div className='textfield'>
    <br></br>
    &nbsp;&nbsp;&nbsp; Name   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Phone
    <br></br>
    <input type="text" className='input'placeholder='Enter Name'id='name'></input>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="number" className='input'placeholder='Enter Phone Number'id='phone'></input>

    <br></br><br></br>
    &nbsp;&nbsp;&nbsp; Email   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Address
    <br></br>
    <input type="email" className='input'placeholder='Enter Email'id='email'></input>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="text" className='input'placeholder='Enter Address'id='address'></input>
    
    <br></br><br></br>
    &nbsp;&nbsp;&nbsp; Query
    <br></br>
    <Form as="textarea" rows={3}className='input1' placeholder='Enter your query in description'id='query'/>
<br></br><br></br><br></br>
    
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="submit"id="btn1"onClick={details}></input>

   
        
     
   


    <br></br><br></br>
    <br></br><br></br>
   
  </div>
</div>
    );
}
export default Contact;