
import about from './softech.jfif';
import main from './softech4.jpg';
import lang from './language.jpg';
import './design1.css';
import Carousel from 'react-bootstrap/Carousel';
function About(){
    return(  
       
         <div className='contact'>
                
              <img src={main}id="softech1"></img>
            <div className='white'></div>
            <img src={about}className='about'></img>
            <div className='about1'>---------About Us---------</div>
            <div className='about3'>We are working from since 2000 in the field of teaching programming language to students in effective way to<br></br> boost their carrier.</div>
            <div className='white1'></div>
            <img src={lang}className='lang'></img>
            <div className='about2'>------Our Special Coaching------</div>
            <div className='about4'>We are provided a special coaching for Web-Designing <br></br>Back-end development , Front-end development , Full Stack<br></br>and special coaching for BCA , MCA , PGDCA , BBA , MBA<br></br>and M.Sc.</div>
            <br></br><br></br>
            <div className='marquee1'> 
<marquee behaviour scrollamount="10">
    <h2>🙏Thanks for Visiting our site🙏</h2>
    </marquee>
    </div>
           <br></br>
          
          
            </div>
            
    );
}
export default About;