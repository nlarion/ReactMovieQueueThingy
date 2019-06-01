import React, { Fragment } from "react";
import PropTypes from "prop-types";
// TODO:
// Fill out the list item card with Title, Image, year
// Create a button that will remove a movie from the queue
// create a button that will clear the queue

const Queue = ({ queue, removeFromQueue }) => (
  <Fragment>
    <h2>Queue</h2>
    <ul>
      {queue.map(({ id, movieId }) => (
        <li key={id}>
          {id}-{movieId}
          <button className="button" onClick={() => removeFromQueue(id)}>
            {" "}
            -
          </button>
        </li>
      ))}
    </ul>
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
