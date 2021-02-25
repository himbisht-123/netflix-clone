import React from 'react';
import './card-list.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
export class Cardlist extends React.Component{
    constructor(props){
      super(props);
      this.state={
        props:{...props},
        trailerUrl:"",
        // movieTrailer:''
      }
    }  
   render(){
    const opts={
      height:"390",
      width:"90%",
      display:"block",
      position:"absolute",
      top:"0",
      left:"20",
      playerVars:{
        autoplay:1
      },
    };
    const handleClick=(item)=>{
        // const {movieurl}=item;
        if(this.state.trailerUrl){
          this.setState({trailerUrl:""})
        }
        else{
           movieTrailer(item?.movieurl||"")
           const url=item.movieurl.split('=')[1];
           //https://www.youtube.com/watch?v=xLTdy6PfotA//
           this.setState({trailerUrl:url});  
        }
    
    }
    const{title,Items}=this.state.props;
    return(
    <div className="card-row">
     <h2>{title}</h2>
    <div>
    <div className="card-list">
      {
          Items.map(item=>(
             <img className="card-poster" onClick={()=>handleClick(item)} key={item.id} src={item.imageUrl} alt=""></img> 
          ))
      }
    
    </div>
    {this.state.trailerUrl && <Youtube videoId={this.state.trailerUrl} opts={opts}></Youtube>}
    
    </div>
    <br></br>
     
       </div>

)}
};