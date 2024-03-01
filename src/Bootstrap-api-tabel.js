import React from "react";
import './design.css';
import { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';
function Bootapi()
{
    const[tabledata,setTabledata]=useState(null);
    useEffect(()=>{
        console.log("called");
        fetch('https://reqres.in/api/users').then(response => response.json())
  .then(item=>{
    console.log(item.data)
    setTabledata(item.data)
  })
  .catch(error => console.error('Error:', error));
    })

    return(
        <div >
           <Table striped bordered hover >
      <thead>
        <tr>
          <th>Sr. No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>User-Photo</th>
        </tr>
      </thead>
      <tbody>
          {
            tabledata?tabledata.map(item=>
              <tr>
                 <td>{item.id}</td>
                 <td>{item.first_name}</td>
                 <td>{item.last_name}</td>
                 <td>{item.email}</td>
                 <td>
                    <img src={item.avatar} />
                 </td>
              </tr>      
                ):null
            } 
      </tbody>
    </Table>
        </div>
    );
}
export default Bootapi;