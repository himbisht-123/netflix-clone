// import logo from './logo.svg';
import React from 'react';
import './App.css';
import HomeScreen from './Screens/Homescreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import  ProfileScreen from './Screens/ProfileScreen';
import {auth} from './firebase';
import LoginScreen from './Screens/LoginScreen';

class App extends React.Component{
    constructor(props){
      super(props);

      this.state={
        user:null
      }
    }
    
   componentDidMount(){
    auth.onAuthStateChanged((user)=>{
      if(user){
      this.setState({user})
    }
    else{
      auth.signOut().then((result)=>{
        this.setState({user:null})
      })
    }
     })
   } 
    render()
  {
    
    const {user}=this.state;
    return(
    <div className="App">
     
     <Router>
     {!user?(
       <LoginScreen></LoginScreen>
     ):(
      <Switch>
      <Route path="/profile">
        <ProfileScreen props={this.state.user}/>
      </Route> 
      <Route exact path="/">
      <HomeScreen></HomeScreen>
      </Route>
    
     </Switch>
     )

     }
       
     </Router>
    </div>
  )
}}
export default App;
