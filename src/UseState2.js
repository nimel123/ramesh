import { useState } from "react";
import App from "./App";
function State(){
    const[data,setData]=useState(null);
    const[print,setPrint]=useState(false);
    function getData(val){
        console.log(val.target.value);
        setData(val.target.value);
    }
    return(
      <div>
        {
            print?<h1>Data is {data}</h1>:null
        }
        <input type="text"onChange={getData}/>
        <button onClick={()=>setPrint(!print)}>Toggle Data</button>
      </div>
    );
}
export default State; 