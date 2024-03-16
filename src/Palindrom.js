import { useState } from "react";

function Palin(){
    const[name,setName]=useState("");
    const[palin,setPalin]=useState("");
    function Check()
    {
       var i,a;
       let v="";   
        v=name.split('').reverse().join('');
         if(name==v)
         {
            setPalin("Name is Palindrom");
         }
         else
         {
            setPalin("Not Palindrom");
         }
    }
    return(
        <div>
  <h1>Palindrom Check</h1><br/>

  <h1>{palin}</h1>
  <h1>{name}</h1>
  <input type="text" onChange={(e)=>setName(e.target.value)}></input>
  <button onClick={Check}>Check Palindrom</button>
        </div>
    )
}
export default Palin;