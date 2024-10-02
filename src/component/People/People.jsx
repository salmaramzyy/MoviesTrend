import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from '../People/People.module.css'

export default function People() {
  let [people,setPeople]=useState([]);

  async function PeopleTrend(){
    let {data}=await axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=44ee5523e457e74020effc2bddc4592e`);
    console.log(data.results);
    setPeople(data.results);
  }

  useEffect(()=>{
    PeopleTrend();
  },[])

  return <>
  {/* <h1>People</h1>
  <div className="container">
    <div className="row">
      {people.map((item)=><div className="col-md-3">
        <img src={'https://image.tmdb.org/t/p/w500/'+item.profile_path} className='w-100' alt="" />
        <h1>{item.name}</h1>
      </div>)}
    </div>
  </div> */}


<div className={style['people-background']}>
      <h1 className={style['people-title']}>Trending People</h1>
      <div className="container">
        <div className="row">
          {people.map((item) => (
            <div className="col-md-3" key={item.id}>
              <div className={style['people-card']}>
                <img
                  src={'https://image.tmdb.org/t/p/w500/' + item.profile_path}
                  className="w-100"
                  alt={item.name}
                />
                <h1>{item.name}</h1>
                <a href={`/people/${item.id}`} className={style['learn-more-btn']}>
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  </>
}
