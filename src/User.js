import { useState,useEffect } from "react";
function User(Props){
   useEffect(()=>{
  console.log("user Updated");
   }
   ) 
    return(
    <div>
    <h1>User Called</h1>
    <h1>Data value is {Props.data}</h1>
    <h1>Counter value is {Props.counter}</h1>

    </div>
    );
}
export default User;