import { Component } from "react";
 class Hello extends Component
 {
    constructor(){
        super();
        this.state={
            email:"rnimel5@gmail.com"
        }
        console.log("Constructor called");
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentDidUpdate(preProps,preState,snapshot)
    {
       console.log("old email is",preState);
       console.log("new email is",this.state.email);
    }
    render(props){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.state.email}</h1>
                <button onClick={()=>this.setState({email:"mamta@gmail.com"})}>Change Email</button>
            </div>
        )
    }
 }
 export default Hello;