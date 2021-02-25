import React from 'react';
import './ProfileScreen.css';
import firebase from 'firebase'; 
import Nav from '../component/navbar/nav';
import { auth } from '../firebase';
import PlansScreen from '../Screens/PlansScreen';
const ProfileScreen=()=>{
  
     var user=firebase.auth().currentUser;
    
    if(user!=null){
      var useremail=user.email; 
    }
    return(
        <div className="profileScreen">
          <Nav/>
          <div className="profileScreen_body">
            <h1>Edit Profile</h1>
            <div className="profileScreen_info">
              <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt=""/>
              <div className="profileScreen_details">
                <h2>{useremail}</h2>
                <div className="profileScreen_plans">
                  <h2>Plans</h2>
                  <PlansScreen/> 
                
                 <button className="profileScreen_signout" onClick={()=>auth.signOut()}>Sign Out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
export default ProfileScreen;