// import { render } from '@testing-library/react';
import React from 'react';
import './card-list3.css'
import Youtube from 'react-youtube';
import movieTrailer3 from 'movie-trailer';

export class Cardlist3 extends React.Component
{ 
  constructor(props){
    super(props);
    this.state={
      props:{...props},
      trailerUrl3:"",
      // movieTrailer:''
    }
  }

     render(){
      const opts={
        height:"390",
        width:"80%",
        display:"block",
        position:"absolute",
        top:"0",
        left:"10",
        playerVars:{
          autoplay:1
        },
      };
      const handleClick3=(item3)=>{
          // const {movieurl}=item;
          if(this.state.trailerUrl3){
            this.setState({trailerUrl3:""})
          }
          else{
             movieTrailer3(item3?.movieurl3||"")
             const url3=item3.movieurl3.split('=')[1];
             //https://www.youtube.com/watch?v=xLTdy6PfotA//
             this.setState({trailerUrl3:url3});  
          }
      
      }
      const{title,Items3}=this.state.props;
    

     return(
    <div className="card-row3">
    <h2>{title}</h2>
    <div>
   <div className="card-list3">
     {
         Items3.map(item3=>(
            <img className="card-poster3" onClick={()=>handleClick3(item3)} key={item3.id} src={item3.imageUrl} alt=""></img> 
         ))
     }
   </div>
   {this.state.trailerUrl3 && <Youtube videoId={this.state.trailerUrl3} opts={opts}></Youtube>}
   </div>
   </div>
)
}
}