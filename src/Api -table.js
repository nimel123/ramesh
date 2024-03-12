import React from "react";
import './design.css';
import { useState,useEffect } from "react";
function Api()
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
            <table id="table1">
              <tr>
                <th>Sr. No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email id</th>
                <th>User Photo</th>
              </tr>
              {
               tabledata?tabledata.map(item=>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td>{
                            <img src={item.avatar}className="api" />
                            }</td>
                    </tr>
                    ):null
              }
            </table>
        </div>
    );
}
export default Api;