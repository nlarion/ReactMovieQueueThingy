import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Flex } from "react-flex-material";

const Movies = ({ movies, addToQueue }) => (
  <Fragment>
    <h1 flex>Available Movies</h1>
    <Flex layout layoutWrap className="movie__list">
      {movies &&
        movies.map(movie => (
          <Flex key={movie.id}>
            <img src={movie.poster} alt={movie.alt} />
            <div>{movie.title}</div>
            <button className="button" onClick={() => addToQueue(movie.id)}>
              {" "}
              Add
            </button>
          </Flex>
        ))}
    </Flex>
  </Fragment>
);

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      poster: PropTypes.string,
      releaseDate: PropTypes.string
    })
  )
};

Movies.defaultProps = {
  movies: []
};

export default Movies;
