import React from "react";
import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // width: "300px",
  width: "30%",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  backgroundColor: "white",
};

const imageStyle = {
  width: "200px",
  height: "300px",
};

const buttonStyle = {
  marginTop: "20px",
  padding: "8px 16px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
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
    <div style={containerStyle}>
      <img src={comic.image} alt="Comic" style={imageStyle} />
      <h2>{comic.title}</h2>
      <h3>{comic.description}</h3>
      <p>
        <strong>Condition:</strong> {comic.condition}
      </p>
      <p>
        <strong>Date:</strong> {comic.date}
      </p>
      <p>
        <strong>Price: </strong>
        {comic.price}
      </p>
      <button style={buttonStyle} onClick={handleBack}>
        Back
      </button>
    </div>
  );
}

ComicDetails.propTypes = {
  comics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      condition: PropTypes.string,
      date: PropTypes.string,
      price: PropTypes.string,
    })
  ),
};

export default ComicDetails;