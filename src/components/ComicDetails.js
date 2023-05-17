import React from "react";
import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";

  const imageStyle = {
    width: "200px",
    height: "300px", 
  };

function ComicDetails({ comics }) {
  const { id } = useParams();
  const comic = comics.find((c) => c.id === parseInt(id));
  const navigate = useNavigate();

  if (!comic) {
    return <div>Comic not found.</div>;
  }

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <img src={comic.image} alt="Comic" style={imageStyle}/>
      <h2>{comic.title}</h2>
      <p><strong>Condition:</strong> {comic.condition}</p>
      <p><strong>Date:</strong> {comic.date}</p>
      <p><strong>Price: </strong>{comic.price}</p>
      <button onClick={handleBack}>Back</button>
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