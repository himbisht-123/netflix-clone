import React from 'react';
import './card-list5.css';
import Youtube from 'react-youtube';
import movieTrailer5 from 'movie-trailer';


export class Cardlist5 extends React.Component
{

  constructor(props){
    super(props);
    this.state={
      props:{...props},
      trailerUrl5:"",
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
    const handleClick5=(item5)=>{
        // const {movieurl}=item;
        if(this.state.trailerUrl5){
          this.setState({trailerUrl5:""})
        }
        else{
           movieTrailer5(item5?.movieurl5||"")
           const url5=item5.movieurl5.split('=')[1];
           //https://www.youtube.com/watch?v=xLTdy6PfotA//
           this.setState({trailerUrl5:url5});  
        }
    
    }
    const{title,Items5}=this.state.props;
  
    
    return(
    <div className="card-row5">
    <h2>{title}</h2>
    <div>
   <div className="card-list5">
     {
         Items5.map(item5=>(
            <img className="card-poster5" key={item5.id}  onClick={()=>handleClick5(item5)} src={item5.imageUrl} alt=""></img> 
         ))
     }
   </div>
   {this.state.trailerUrl5 && <Youtube videoId={this.state.trailerUrl5} opts={opts}></Youtube>}
   </div>
   </div>
)}}