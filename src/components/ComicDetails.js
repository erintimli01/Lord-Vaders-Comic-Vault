import React from "react";
import PropTypes from "prop-types";

function ComicDetails(props) {
  return (
  <div>
    <h2>{props.title}</h2>
    <p>Condition: {props.condition} </p>
    <p>Date: {props.date}</p>
    <p>Price: {props.price}</p>
  </div>
  );
}

ComicDetails.propTypes = {
  title: PropTypes.string,
  condition: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.string,
};

export default ComicDetails;