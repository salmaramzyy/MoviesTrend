import React from 'react'
import style from '../Home/Home.module.css'
import Movies from '../Movie/Movie.jsx'
import Tv from '../Tv/Tv.jsx'
import People from '../People/People.jsx'


export default function Home() {
  return (
    <div className={style['home-background']}>
      <h1 className={style['home-title']}>IMDB</h1>
      <Movies/>
      <Tv/>
      <People/>
      
    </div>
    
    
  );
}
