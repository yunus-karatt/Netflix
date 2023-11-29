import axios from "../../axios";
import "./RowPost.css";

import React, { useEffect, useState } from "react";
import { imageUrl, API_KEY } from "../../constants/constants";
import YouTube from "react-youtube";

const RowPost = (props) => {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");

  useEffect(() => {
    axios
      .get(props.url)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleClick = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0].key);
        } else {
          console.log("trailer not availabe");
        }
      })
      .catch((err)=>alert('sorry'))
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie.id)}
            key={movie.id}
            className={props.isSmall ? "small-poster" : "poster"}
            src={`${imageUrl + movie.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId} />}
    </div>
  );
};

export default RowPost;
