import './design.css';
function Map(props){
    const user=[
        {
            name:"Ramesh",email:"rnimel5@gmail.com",contact:8222098246
        },
        {
            name:"Mamta",email:"mamta9053@gmail.com",contact:123456655
        },
          {
            name:"Ramesh",email:"rnimel5@gmail.com",contact:8222098246
        },
        {
            name:"Mamta",email:"mamta9053@gmail.com",contact:123456655
        },
    ]
    return(
    <div>
        <center>
       <table id='table'>
        <tbody>
       <tr>
        <th>Sr.No</th>
        <th>Name</th>
        <th>Email</th>
        <th>Contact</th>
       </tr>
       {
        user.map((item,i)=>
        <tr key={i}>
            <td>{i+1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.contact}</td>
        </tr>
        )
       }
       </tbody>
       </table>
       </center>  
    </div>   
    );
}
export default Map;
