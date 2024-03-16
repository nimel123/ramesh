import { useState } from "react";

function Fact(){
    const[fact,setFact]=useState();
    const[fact2,setFact1]=useState();
    function Fact1(){
        var c,i;

        for(i=c=1; i<=fact; i++){
             c=c*i;
        }
   setFact1(c);
    }
    return(
        <>
         <h1>Factorial is:{fact2}</h1>
        <input type="number" onChange={(e)=>setFact(e.target.value)} />
        <button onClick={Fact1}>Factorial</button>
        </>
    )
}
export default Fact;