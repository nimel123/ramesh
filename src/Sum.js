
function Sum(){
    var a=12;
    var b=12;
    var c=a+b;
    return(
        <div>
        <button type="button"onClick={()=>Sum(alert(c))}>SUM</button>
        </div> 
    );
}
export default Sum;