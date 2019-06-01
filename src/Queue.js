import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Flex } from "react-flex-material";

// TODO:
// Fill out the list item card with Title, Image, year
// Create a button that will remove a movie from the queue
// create a button that will clear the queue

const Queue = ({ queue, removeFromQueue, movies }) => (
  <Fragment>
    <h2>Queue</h2>
    <Flex layoutWrap>
      {queue.map(({ id, movieId }) => (
        <Flex key={id}>
          <div>{(movies.filter(x => x.id === movieId)[0] || []).title}</div>
          <img
            width="200px"
            src={(movies.filter(x => x.id === movieId)[0] || []).poster}
            alt={(movies.filter(x => x.id === movieId)[0] || []).Title}
          />
          <button className="button" onClick={() => removeFromQueue(id)}>
            {" "}
            Remove
          </button>
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
