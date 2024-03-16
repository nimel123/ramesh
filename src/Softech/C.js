import './Aboutus.css';
import c from './cicon.jfif';
import Rank from './rank.webp';
function Cicon(){
    return(
        <div className='all'>
            <center>
                <br/>
                <img src={c}/>
                <br/>
                <h1>What is C Programming Langauge?</h1>
                <br />
                </center>
                C is a general-purpose programming language that is extremely popular, simple, and flexible to use. It is a structured programming language that is machine-independent and extensively used to write various applications, Operating Systems like Windows, and many other complex programs like Oracle database, Git, Python interpreter, and more.<br/><br/>

                It is said that ‘C’ is a god’s programming language. One can say, C is a base for the programming. If you know ‘C,’ you can easily grasp the knowledge of the other programming languages that uses the concept of ‘C’<br/><br/>
                <center>
                <img src={Rank} className='rank' />
                </center>
                <br/><br/><br/><br/>
                <center>
              ---------------------------
              <br/><br/>
            </center>
        </div>
    )
}
export default Cicon;