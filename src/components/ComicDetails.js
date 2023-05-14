import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import Comic1 from "./../img/Comic1.jpg";
import Comic2 from "./../img/Comic2.jpg";


  const imageStyle = {
    width: "200px",
    height: "300px", 
  };

function ComicDetails({ comics }) {
  const { id } = useParams();
  const comic = comics.find((c) => c.id === parseInt(id));

  if (!comic) {
    return <div>Comic not found.</div>;
  }

  return (
    <div>
      <img src={comic.image} alt="Comic" style={imageStyle}/>
      <h2>{comic.title}</h2>
      <p><strong>Condition:</strong> {comic.condition}</p>
      <p><strong>Date:</strong> {comic.date}</p>
      <p><strong>Price: </strong>{comic.price}</p>
    </div>
  );
}

ComicDetails.propTypes = {
  comics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      condition: PropTypes.string,
      date: PropTypes.string,
      price: PropTypes.string,
    })
  ),
};

export default ComicDetails;

// function ComicDetails(props) {
//   return (
//   <div>
//     <h2>{props.title}</h2>
//     <p>Condition: {props.condition} </p>
//     <p>Date: {props.date}</p>
//     <p>Price: {props.price}</p>
//   </div>
//   );
// }

// ComicDetails.propTypes = {
//   title: PropTypes.string,
//   condition: PropTypes.string,
//   date: PropTypes.string,
//   price: PropTypes.string,
// };

// export default ComicDetails;