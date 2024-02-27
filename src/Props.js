
import './design.css';
function Props(props){
    var a=props.name;
    var b=props.last;
    function Apple(){     
    var c=document.getElementById("t1").value;
   var d= document.getElementById("t2").value;
   if(c=="" && d==""){
    document.getElementById("t1").value=a;
    document.getElementById("t2").value=b;
   }
   else{
    document.getElementById("t1").value="";
    document.getElementById("t2").value="";
   }
    }
    return(
        <div>
             <center>
            <fieldset id="field">
            <h1>Welcome </h1><br></br>
            First Name: <input type="text"id="t1"></input><br></br><br></br>
            Last Name: <input type="text"id="t2"></input><br></br><br></br>        
            <button type="button"id="btn1"onClick={Apple}>SET DATA</button><br></br>
              
                </fieldset>
                </center>
        </div>
    );
    }
    export default Props;