import React from "react";
import Star from "../Layout/Stars";


const Container = ({
  fullTitle,
  year,
  releaseDate,
  runtimeStr,
  plot,
  image,
  stars,
  actorList,
  tagline,
  imDbRating
}) => {
  // const [actorList, setactorList] = useState([]);

  return (
    <div>
      <div
        className="background"
        style={{ backgroundImage: `url("${image}")` }}>
        <div className="foreground">
          <div className="showcase-top">
            <div className="poster">
              <img src={image} alt="" className="poster-image" />
            </div>
            <div className="flex-top-right">
              <h1 className="movie-name">{fullTitle}</h1>
              <p className="release text-secondary">
                Release Date : {releaseDate}
              </p>
              <p className="runtime text-secondary">Runtime : {runtimeStr}</p>
              <p className="starring text-secondary">Starring : {stars}</p>
              <p className="rating text-secondary">Rating: {imDbRating}</p>
              <h2 className="tagline text-secondary">{tagline}</h2>
            </div>
          </div>
          <div className="showcase-mid">
            <div className="plot">
              <p className="text-secondary plot-text">{plot}</p>
            </div>
          </div>
          <div className="showcase-bottom">
            {actorList.map((actor) => (
              <Star
              id={actor.id}
                name={actor.name}
                image={actor.image}
                as={actor.asCharacter}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
