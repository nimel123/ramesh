import react from './iconreact.png';
import './Aboutus.css';
function ReactAbout(){
    return(
        <div className='all'>
            <center>
                <br/>
           <img src={react} className="all" /><br/><br/>
           <h1>What is React?</h1>
          </center>
           React is a framework that employs Webpack to automatically compile React, JSX, and ES6 code while handling CSS file prefixes.
            React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development.
             The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.
           React offers various extensions for entire application architectural support, such as Flux and React Native, beyond mere UI.
           <br/><br/><br/>
           <center>
           <h1>ReactJS History</h1>
           </center>
          
When compared to other technologies on the market, React is a new technology.
 Jordan Walke, a software engineer at Facebook, founded the library in 2011, giving it life. 
 The likes of XHP, a straightforward HTML component framework for PHP, have an influence on React. 
 React's newsfeed was its debut application in 2011. Later, 
 Instagram picks it up and incorporates it into their platform.
 <br/><br/>
 <center>
 --------------------------
 <br/>  <br/>
           
           </center>
        </div>
    )
}
export default ReactAbout;