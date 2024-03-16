import { useState } from "react";
function Small(){
    var b,i,j;
   let m='';
    const d='h';
    const[name,setName]=useState();
    const[Palin,setPalin]=useState();
    function getdata(){
        var z=d.charCodeAt(0);
         for(i=0; i<=name.length; i++)
         {
            j=name.charAt(i);
            b=j.charCodeAt(0);
            if(z>b)
            {
            m=m+j;
            }
        }
        setPalin(m);  
    }
    return(
        <>
        <h3>Name is:{name}</h3>
        <h3>New Name is:{Palin}</h3>
      <input type="text" onChange={(e)=>setName(e.target.value)}/> 
      <button type="button"onClick={getdata}>Get Name</button>
        </>
    )
}
export default Small;