function Table(){
    function Apple(){
        let i=1,t=0;
        let n=eval(prompt("Enter number for table"));
    for( ; i<=10; i++)
    {   
        t=n*i;
        document.write("<br>"+t)
    } 
   }
    return(

<button onClick={Apple}>ADD</button>
    );
}
export default Table;