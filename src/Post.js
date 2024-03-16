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
            .then(data => {
                console.log(data)
                setResponse(data)
            }
                );
     })
    return(
        <div>
               <h1>response from api is {JSON.stringify(response)}</h1>
        </div>
    );
}
export default Post;
