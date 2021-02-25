import React from 'react';
import './cardlist.css';
import Youtube from 'react-youtube';
import movieTrailer2 from 'movie-trailer';
export class Cardlist2 extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      props:{...props},
      trailerUrl2:"",
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
  const handleClick2=(item2)=>{
      // const {movieurl}=item;
      if(this.state.trailerUrl2){
        this.setState({trailerUrl2:""})
      }
      else{
         movieTrailer2(item2?.movieurl2||"")
         const url2=item2.movieurl2.split('=')[1];
         //https://www.youtube.com/watch?v=xLTdy6PfotA//
         this.setState({trailerUrl2:url2});  
      }
  
  }
  const{title,Items2}=this.state.props;

  
  return(
    <div className="card-row2">
    <h2>{title}</h2>
    <div>
   <div className="card-list2">
     {
         Items2.map(item2=>(
            <img className="card-poster2" onClick={()=>handleClick2(item2)} key={item2.id} src={item2.imageUrl} alt=""></img> 
         ))
     }
   </div>
   {this.state.trailerUrl2 && <Youtube videoId={this.state.trailerUrl2} opts={opts}></Youtube>}
   
   </div>

   </div>
    
)
}    
};