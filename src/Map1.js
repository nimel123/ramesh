import './design.css';
function Map1(props){
    const user=[
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
        item.contact==8222098246?
        <tr key={i}>
            <td>{i+1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.contact}</td>
        </tr>:null
        )
       }
       </tbody>
       </table>
       </center>  
    </div>   
    );
}
export default Map1;