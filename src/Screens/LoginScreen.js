import React from 'react';
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';
class LoginScreen extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            signIn:false
        }
    }
    
    render(){
       const {signIn}=this.state;   
    return (<div className="loginScreen">
       <div className="loginScreen_background">
         <img className="loginScreen_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt=""
         >
         </img>
    <button className="loginScreen_button" onClick={()=>this.setState({signIn:true})}>
          Sign In
         </button>
         <div className="loginScreen_gradient"></div>
       </div>
       <div className="loginScreen_body">
       {
           signIn?(
               <SignUpScreen></SignUpScreen>
           ):(
            <>
            <h1>Unlimited films, Tv programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="loginScreen_input">
                <form>
                 <input type="email"
                 placeholder="Email Address"
                 />
                 <button className="loginScreen_getstarted" onClick={()=>this.setState({signIn:true})}>
                  GET STARTED
                 </button>
                </form>
            </div>
         </>
           )
       }
         
       </div>
    </div>)}
}
export default LoginScreen;