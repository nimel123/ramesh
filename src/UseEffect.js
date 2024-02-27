import { useState, useEffect } from "react";
import User from "./User";
function Hello(){
    const[data,setData]=useState(10);
    const[counter,setCounter]=useState(0);
    useEffect(()=>{
    console.log("Data Updated");
    }
    ,[data])
    useEffect(()=>{
console.log("Counter Updated");
    }
    ,[counter])
    return(
    <div>
        <User data={data} counter={counter}/>
        <button onClick={()=>setData(data+1)}>Increase Data</button>
        <button onClick={()=>setCounter(counter+2)}>Increase Counter</button>
    </div>
    );
}
export default Hello;