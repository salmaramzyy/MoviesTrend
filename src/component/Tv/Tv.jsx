import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../Tv/Tv.module.css';
import { Link } from 'react-router-dom';

export default function Tv() {
  let [tv, setTV] = useState([]);

  async function TvTrend() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=44ee5523e457e74020effc2bddc4592e`
    );
    console.log(data.results);
    setTV(data.results);
  }

  useEffect(() => {
    TvTrend();
  }, []);

  return (
    <>
      <div className={style['Tv-background']}>
        <h1 className={style['Tv-title']}>Top TV Shows</h1>
        <div className="container">
          <div className="row">
            {tv.slice(0, 10).map((item, index) => (
              <div className="col-md-3" key={index}>
                <div className={style['Tv-card']}>
                  <img
                    src={'https://image.tmdb.org/t/p/w500/' + item.poster_path}
                    className="w-100"
                    alt={item.name}
                  />
                  <h1>{item.name}</h1>
                  <Link to={`/detailstv/${item.id}`}  className={style['learn-more-btn']}>
                    Learn More
                  </Link>
                  <p className={style['vote-average']}>⭐ {item.vote_average.toFixed(1)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
