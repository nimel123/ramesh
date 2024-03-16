import './logincss.css';
function Login1(){
    return(

        <div >
            <body>
            <div className="box">
            <form>
                <h2>Login Here</h2>
                <div className='inputbox'>
                <input type="text" required="required"></input>
                <span>User Name</span>
                <i></i>
                </div>
                <div className='inputbox'>
                <input type="password" required="required"></input>
                <span>Password</span>
                <i></i>
                </div>
                <br></br>
                 <input type='submit' value='Login'></input>
            </form>
            </div>
            </body>
        </div>
    )
}
export default Login1;