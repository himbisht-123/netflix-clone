import React from 'react';
import './card-list6.css';
import Youtube from 'react-youtube';
import movieTrailer6 from 'movie-trailer';

export class Cardlist6 extends React.Component{
  constructor(props){
    super(props);
    this.state={
      props:{...props},
      trailerUrl6:"",
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
    left:"10",
    playerVars:{
      autoplay:1
    },
  };
  const handleClick6=(item6)=>{
      // const {movieurl}=item;
      if(this.state.trailerUrl6){
        this.setState({trailerUrl6:""})
      }
      else{
         movieTrailer6(item6?.movieurl6||"")
         const url6=item6.movieurl6.split('=')[1];
         //https://www.youtube.com/watch?v=xLTdy6PfotA//
         this.setState({trailerUrl6:url6});  
      }
  
  }
  const{title,Items6}=this.state.props;

  
  return(
    <div className="card-row6">
    <h2>{title}</h2>
    <div>
   <div className="card-list6">
     {
         Items6.map(item6=>(
            <img className="card-poster6" key={item6.id} onClick={()=>handleClick6(item6)} src={item6.imageUrl} alt=""></img> 
         ))
     }
   </div>
   {this.state.trailerUrl6 && <Youtube videoId={this.state.trailerUrl6} opts={opts}></Youtube>}
   </div>
   </div>
)
}
}