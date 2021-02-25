import React from 'react';
import './PlansScreen.css';
class PlansScreen extends React.Component{
  
     handleClick=(e)=>{
         e.preventDefault();
         e.target.style.backgroundColor='grey';
         e.target.innerText='Current Plan';
     }
    
    render()
    {

    return(
         <div className="plansScreen">
          
           <div className="plansScreen_info">
             <h4>Basic 720p</h4>
             <button onClick={this.handleClick}>Subscribe </button>
                         
             <h4 >Standard 1080p </h4>
             <button onClick={this.handleClick}>Subscribe </button>  
             <h4 >Premium 4k+HDR </h4>
             <button onClick={this.handleClick}>Subscribe </button>
             
            
           </div>
          
       
           </div>
    
    )}
}
export default PlansScreen;