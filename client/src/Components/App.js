import React, {useEffect, useState} from 'react';
import Picture from './Picture';
import PictureList from './PictureList';

export default function App(props) {
  const [pictures, setPictures] = useState("");
 

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/picture`)
    console.log("hi")
      .then(response => response.json())
      .then(result =>  {
        setPictures(result)
      })    
  },[])

  return (
    <div>
     <Picture picture={pictures[0]}></Picture>
     <PictureList pictures={pictures} ></PictureList>
    </div>
  );
}