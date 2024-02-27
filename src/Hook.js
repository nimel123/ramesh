import { useState } from "react";
import './design.css';
function Hook(){
    const [data,setData]=useState("Ramesh")
    function Apple(){
        
        if(data=="Ramesh"){
            setData("Mamta");
        }
        else{
            setData("Ramesh");
        }
    }
   //function Change(){
   // setData("Ramesh");
 
    return(
     <div id="div">
        <center>
        <h1>Welcome {  data}</h1>
        <button type="button"onClick={Apple} id="btn1">Click</button>
        </center>
     </div>
    
    );
}
export default Hook;
