// import { useState } from "react";
// import {  useNavigate } from "react-router-dom";
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom";
// import './logincss.css';
// function Login(){
//       const navigate=useNavigate();
//       const [username,setUsername]=useState("");
//       const [password,setPassword]=useState("");

//       function handleLogin(e){
//          e.preventDefault();
//          if(username!="ramesh")
//          {
//           alert("Error");
//          }
//          else{
//           navigate("/Softech")
//          }
//       }
//     return(    
       
//        <div className="box">
     
//      <form onSubmit={handleLogin}>
     
//         <center>
        
//             <legend>Login Here</legend><br/><br/>
            
//       <InputGroup >
//         <InputGroup.Text >User Name</InputGroup.Text>
//         <Form.Control 
//           id="user"
//           placeholder="Enter Username"
//           aria-label="Username"
//           aria-describedby="basic-addon1"
//           onChange={(e)=>setUsername(e.target.value)}
//         />
//         </InputGroup>
//         <br/>
//         <InputGroup >
//         <InputGroup.Text >Password</InputGroup.Text>
//         <Form.Control
//           id="password"
//           placeholder="Enter Password"
//           aria-label="Recipient's username"
//           aria-describedby="basic-addon2"
//           onChange={(e)=>setPassword(e.target.value)}
//         />
//       </InputGroup>
//       <br/>
//       <Button variant="outline-info" type="submit">Login</Button>
//       </center>
     
//       </form>
      
//     </div>
  
//     );
// }
// export default Login;