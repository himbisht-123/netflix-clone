import React from 'react';
import './card-list4.css';
import Youtube from 'react-youtube';
import movieTrailer4 from 'movie-trailer';

export class Cardlist4 extends React.Component
{

  constructor(props){
    super(props);
    this.state={
      props:{...props},
      trailerUrl4:"",
      // movieTrailer:''
    }
  }



   render()
 { 
  const opts={
    height:"390",
    width:"80%",
    display:"block",
    position:"absolute",
    top:"0",
    left:"20",
    playerVars:{
      autoplay:1
    },
  };
  const handleClick4=(item4)=>{
      // const {movieurl}=item;
      if(this.state.trailerUrl4){
        this.setState({trailerUrl4:""})
      }
      else{
         movieTrailer4(item4?.movieurl4||"")
         const url4=item4.movieurl4.split('=')[1];
         //https://www.youtube.com/watch?v=xLTdy6PfotA//
         this.setState({trailerUrl4:url4});  
      }
  
  }
  const{title,Items4}=this.state.props;


  return(
    <div className="card-row4">
    <h2>{title}</h2>
    <div>
   <div className="card-list4">
     {
         Items4.map(item4=>(
            <img className="card-poster4" onClick={()=>handleClick4(item4)} key={item4.id} src={item4.imageUrl} alt=""></img> 
         ))
     }
   </div>
   {this.state.trailerUrl4 && <Youtube videoId={this.state.trailerUrl4} opts={opts}></Youtube>}
   </div>
   </div>
)}
}