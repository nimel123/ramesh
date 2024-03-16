import { useMemo, useState } from "react";

function Memo(){
    const[data,setData]=useState(10);
    const[multi,setMulty]=useState(10);
   
    const user=useMemo(
        function hello(){
            console.log("multiple by 10");
            return data*10;
            
        },[multi]
    )
    return(
        <>
        <h3>Count is:{data}</h3>
        <h3>Multiple is:{multi}</h3>
       
        {
            user
        }
         <br/><br/>
        <button onClick={()=>setData(data+1)}>Data Increment</button>
        <button onClick={()=>setMulty(multi*2)}>Multiple</button>
        
        
        </>
    )
}
export default Memo;