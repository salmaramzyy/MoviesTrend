import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../Movie/Movie.module.css'; // Assuming you have a similar CSS file for movies
import { Link } from 'react-router-dom';

export default function Movie() {
  let [movie, setMovie] = useState([]);

  async function MovieTrend() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=44ee5523e457e74020effc2bddc4592e`
    );
    console.log(data.results);
    setMovie(data.results);
  }

  useEffect(() => {
    MovieTrend();
  }, []);

  return (
    <>
      <div className={style['movie-background']}>
        <h1 className={style['movie-title']}>Top Movies</h1>
        <div className="container">
          <div className="row">
            {movie.slice(0, 10).map((item, index) => (
              <div className="col-md-3" key={index}>
                <div className={style['movie-card']}>
                  <img
                    src={'https://image.tmdb.org/t/p/w500/' + item.poster_path}
                    className="w-100"
                    alt={item.title}
                  />
                  <h1>{item.title}</h1>
                  <Link to={`/detailsmovie/${item.id}`} className={style['learn-more-btn']}>
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
