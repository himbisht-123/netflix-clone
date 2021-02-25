import React from 'react';
import Nav from '../component/navbar/nav';
import {Banner} from '../component/banner/banner';
import {data2} from '../data2'
import {data} from '../data';
import {data3} from '../data3';
import {data4} from '../data4';
import {data5} from '../data5';
import {data6} from '../data6';
import { Cardlist} from '../component/card-list';
import { Cardlist2} from '../component/cardlist2';
import {Cardlist3} from '../component/card-list3';
import {Cardlist4} from '../component/card-list4';
import {Cardlist5} from '../component/card-list5';
import {Cardlist6} from '../component/card-list6';


class HomeScreen extends React.Component{
    constructor(props){
        super(props);
  
        this.state={
          Items:data,
          Items2:data2,
          Items3:data3,
          Items4:data4,
          Items5:data5,
          Items6:data6,
          // Content:backdata
        }
      }
      render(){
          return(
            <div className="homescreen">  
            <Nav></Nav>
            <Banner></Banner> 
           <h2 className="subtitle">NETFLIX ORIGINALS</h2>
          <Cardlist Items={this.state.Items}></Cardlist>
      
           <h2>TRENDING MOVIES</h2>
          <Cardlist2 Items2={this.state.Items2}></Cardlist2>
          
          <h2>TOP RATED MOVIES</h2>
          <Cardlist3 Items3={this.state.Items3}></Cardlist3>
      
          <h2>ROMANTIC MOVIES</h2>
          <Cardlist4 Items4={this.state.Items4}></Cardlist4>   
      
          <h2>ACTION MOVIES</h2>
          <Cardlist5 Items5={this.state.Items5}></Cardlist5>
          
          <h2>HORROR MOVIES</h2>
          <Cardlist6 Items6={this.state.Items6}></Cardlist6> 
          </div>            
          )
      }
     
}
export default HomeScreen; 