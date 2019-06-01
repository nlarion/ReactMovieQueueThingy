import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Flex } from "react-flex-material";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const Movies = ({ movies, addToQueue }) => (
  <Fragment>

    <Flex layout layoutWrap className="movie__list">
    <h1 flex="layoutfill" >Available Movies</h1>
      {movies &&
        movies.map(movie => (
          <Flex key={movie.id}>
            <img src={movie.poster} alt={movie.alt} />
            <div>{movie.title}</div>
            <Button variant="contained" className={useStyles.button} onClick={() => addToQueue(movie.id)}>
              {" "}
              Add
            </Button>
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
