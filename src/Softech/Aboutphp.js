import php from './php2.png';
import './Aboutus.css';
function Php1(){
    return(
        <div className='all'>
            <center>
                <br/>
                <img src={php}></img>
                <br/><br/>
                <h1>What is PHP ?</h1>
                <br/>
                </center>
                The term PHP is an acronym for – Hypertext Preprocessor. PHP is a server-side scripting language designed specifically for web development. It is open-source which means it is free to download and use. It is very simple to learn and use. The file extension of PHP is “.php”. 
                PHP was introduced by Rasmus Lerdorf in the first version and participated in the later versions. It is an interpreted language and it does not require a compiler.<br/><br/>
                <center>
                <h1>Characteristics of PHP</h1>
                </center>
                <br/>
                1. PHP code is executed in the server.<br/>
2. It can be integrated with many databases such as Oracle, Microsoft SQL Server, MySQL, PostgreSQL, Sybase, and Informix.<br/>
3. It is powerful to hold a content management system like WordPress and can be used to control user access.<br/>
4. It supports main protocols like HTTP Basic, HTTP Digest, IMAP, FTP, and others.<br/>
5. Websites like www.facebook.com and www.yahoo.com are also built on PHP.<br/>
6. One of the main reasons behind this is that PHP can be easily embedded in HTML files and HTML codes can also be written in a PHP file.<br/>
7. The thing that differentiates PHP from the client-side language like HTML is, that PHP codes are executed on the server whereas HTML codes are directly rendered on the browser. PHP codes are first executed on the server and then the result is returned to the browser.<br/>
8.The only information that the client or browser knows is the result returned after executing the PHP script on the server and not the actual PHP codes present in the PHP file. Also, PHP files can support other client-side scripting languages like CSS and JavaScript.<br/>
        <br/><br/>
        <center>
            ----------------------
        </center>
        
        <br/><br/>
        </div>
    )
}
export default Php1;