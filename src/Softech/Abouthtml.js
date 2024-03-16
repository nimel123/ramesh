import './Aboutus.css';
import css from './htmlicon.jfif';
import htmlrank from './htmlrank.png';
function HTML(){
    return(
        <div className='all'>
            <center>
                <br/>
                <img src={css} />
                <br/>
                <h1>What is HTML ?</h1>
            </center>
            <br/>
            HTML stands for HyperText Markup Language, 
            which is the standard document format for web
             pages that is supported by all modern browsers. HyperText is the 
             ability to turn a piece of text into a hyperlink (which we
              can call simply a “link”) that HTML makes so that viewers can
               visit any document. A Markup Language is a set of instructions that uses
                the opening & closing tags with having the content in it, which helps to
                 render the content in the structured format.
                 <br/> <br/>
                 HTML was invented by Tim Berners-Lee who was founded in 1990,
                  a physicist at the CERN research institute in Switzerland.
                   When working with HTML, we just use a simple code structure that contains 
                   tags and attributes to build the structure of a webpage, and it is displayed 
                   as such by the browser.
                   <br/>
                   <center>
                    <img src={htmlrank} className='rank'/>
                    <br/><br/>
                    <h1>What is CSS ?</h1>
                   </center>
                   <br/>
                   CSS stands for Cascading Style Sheets and plays an important role in providing the styles to the HTML elements, which helps to make web pages presentable. 

CSS is essential for providing distinctive styles to elements and ensuring responsiveness across diverse screen sizes. Inline CSS commands the highest priority in styling.
 Web browsers implement the default styles to elements, which can be customized using CSS.
 <br/>
 <center>
    <h1>Why Use CSS?</h1>
 </center>
 <br/>
 CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.
 <br/><br/>
 <center>
    ---------------------
 </center>
 <br/><br/>
        </div>
    )
}
export default HTML;