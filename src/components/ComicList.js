import React, { useState } from "react";
import Comic from "./Comic";
import ComicDetails from "./ComicDetails";
import { Link } from "react-router-dom";

import Comic1 from "./../img/Comic1.jpg";
import Comic2 from "./../img/Comic2.jpg";

const mainComicList = [
  {
    id: 1,
    title: "this is a comic",
    condition: "F-",
    date: "some date",
    price: "$10",
    image: Comic1
  },
  {
    id: 2,
    title: "this is a comic also",
    condition: "F",
    date: "some other date",
    price: "$40",
    image: Comic2
  }
];


function ComicList() {

  return (
    <React.Fragment>
      {mainComicList.map((comic, index) =>
        <Comic 
        id={comic.id}
        title={comic.title}
        condition={comic.condition}
        date={comic.date}
        price={comic.price}
        image={comic.image}
        key={index}
        // onclick={() => handleClick(comic)}
        />
      )}
    </React.Fragment>
  );
}

export default ComicList;
