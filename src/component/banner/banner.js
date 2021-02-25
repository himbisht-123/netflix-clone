import React from 'react';
import './banner.css';
// import {BannerImage} from '../../BackPage';
export class Banner extends React.Component{


    render()
    {
      return(
     
    <header className="banner"
    
    style={{
      backgroundSize:"cover",
      height:"450px",
      backgroundImage:`url("https://wallpapercave.com/wp/wp1867294.jpg")`,
      backgroundPosition:"center center",
      // backgroundSize:""
    }}>
    <div className="banner-contents">   
      <h1 className="banner-title">THE JOHN WICK</h1>
      <div className="banner-buttons">
        <button className="banner_button">Play</button>
        <button className="banner_button">My List</button>
      </div>
      <h1 className="banner_description">John Wick is a fictional character and the titular protagonist of the John Wick film series. He is portrayed by Keanu Reeves. John Wick is a legendary hitman who retired until a gang invades his house, steals his car, and kills the puppy his late wife Helen had given him.</h1>
    </div>
      
    </header>
)}}