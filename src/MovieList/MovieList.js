import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";
function MovieList({ Movielist }) {
  return (
    <div className="cardlist">
      {Movielist.map((el, i) => (
        <MovieCard
          key={i}
          imgSrc={el.imgSrc}
          title={el.title}
          desc={el.desc}
          posterUrl={el.posterUrl}
          rate={el.rate}
        />
      ))}
    </div>
  );
}

export default MovieList;
