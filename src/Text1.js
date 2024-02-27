function Text1(){
    function add(){
        var a=parseInt(document.getElementById("t1").value);
        var b=parseInt(document.getElementById("t2").value);
        var c=a+b;
        document.getElementById("t3").value=c;

    }
    return(
        <div>
            First Number<input type="number"id="t1"></input>
            Second Number<input type="number"id="t2"></input>
            Second Number<input type="number"id="t3"></input>
           <button type="button"onClick={add}>ADD</button>
        </div>
    );
}
export default Text1;