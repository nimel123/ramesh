import React from "react";
import { useState,useEffect } from "react";
function Post(){
    const[name,setName]=useState(null);
    const[response,setResponse]=useState(null);
     useEffect(()=>
     {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'Fetch POST Request Example' })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => 
                
                setResponse(data)
                );
     })
    return(
        <div>
            {
            response?response.map(item=>
                {
                  <h1>{item.data}</h1>
                }):null  
            }
        </div>
    );
}
export default Post;
