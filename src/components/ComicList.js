import React from "react";
import Comic from "./Comic";
import PropTypes from "prop-types";

function ComicList({ comics}) {

  if (!comics) {
    return null;
  }


  return (
    <React.Fragment>
      {comics.map((comic) =>
        <Comic 
        key={comic.id}
        id={comic.id}
        title={comic.title}
        condition={comic.condition}
        date={comic.date}
        price={comic.price}
        image={comic.image}
        // key={index}
        // onclick={() => handleClick(comic)}
        />
      )}
    </React.Fragment>
  );
}

ComicList.propTypes = {
  comics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      condition: PropTypes.string,
      date: PropTypes.string,
      price: PropTypes.string,
      image: PropTypes.string

    })
  )
}


export default ComicList;
