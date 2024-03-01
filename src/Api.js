import { useEffect, useState } from "react";

function App1(props){
    const[arraylist,setArraylist]=useState(null);
    useEffect(()=>{
        console.log("called");
        fetch('https://reqres.in/api/users').then(response => response.json())
  .then(item=>{
    console.log(item.data)
    setArraylist(item.data)
  })
  .catch(error => console.error('Error:', error));
    })

console.log("dom created");
return(
    <div>
{JSON.stringify(arraylist)}
    </div>
);
}
export default App1;
