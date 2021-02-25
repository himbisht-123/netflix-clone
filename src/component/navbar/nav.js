import React from 'react';
import {withRouter} from 'react-router-dom';
import './nav.css';

class Nav extends React.Component{
    constructor(props){
      super(props);
      this.state={
          handleshow:false

      }
    }
     redirectProfilePage=()=>{
       const {history}=this.props;
       if(history) history.push("/profile");
       
     }
     redirectHomePage=()=>{
      const {history}=this.props;
      if(history) history.push("/");
      
    }
   componentDidMount(){
    //  const {handleshow}=this.state;
     window.addEventListener('scroll',()=>{
       if(window.scrollY>100){
           return this.setState({handleshow:true});
   
       }
       else{
        return this.setState({handleshow:false});
        // return handleshow(false);
       }
     });
      
   }

  render(){
    const {handleshow}=this.state;
    // const {history}=this.props;
    return(
      <div className={`nav ${handleshow && "nav_black"}`}>
        <img 
        className="nav_logo"
        onClick={this.redirectHomePage}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo"></img>
        <img className="nav_avatar"
        onClick={this.redirectProfilePage}
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Netflix logo"
        ></img>
      </div>
  )
  
  }

}
export default withRouter(Nav);