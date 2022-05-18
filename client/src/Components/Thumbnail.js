// import React, {useEffect, useState} from 'react';


export default function Thumbnail(props) {
    
      
    return (
      <div>
        <img src={props.picture.download_url} width="40" height="50" alt="nj"></img>
      </div>
    );
  }