import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Flex } from "react-flex-material";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// TODO:
// Fill out the list item card with Title, Image, year
// Create a button that will remove a movie from the queue
// create a button that will clear the queue


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));
const Queue = ({ queue, removeFromQueue, movies, removeAll }) => (
  <Fragment>
    <Flex layoutWrap>
    <h2>Queue</h2>
    <Button variant="contained" color="primary" className={useStyles.button} onClick={() => removeAll()}>
            {" "}
            Remove All
          </Button>
      {queue.map(({ id, movieId }) => (
        <Flex key={id}>
          <div>{(movies.filter(x => x.id === movieId)[0] || []).title}</div>
          <img
            width="200px"
            src={(movies.filter(x => x.id === movieId)[0] || []).poster}
            alt={(movies.filter(x => x.id === movieId)[0] || []).Title}
          />
          <Button variant="contained"  color="secondary" className={useStyles.button} onClick={() => removeFromQueue(id)}>
            {" "}
            Remove
          </Button>
        </Flex>
      ))}
    </Flex>
  </Fragment>
);

Queue.propTypes = {
  queue: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      movieId: PropTypes.number
    })
  )
};

Queue.defaultProps = {
  queue: []
};


export default Queue;
