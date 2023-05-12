import React from "react";
import Comic from "./Comic";
import Comic1 from "./../img/Comic1.jpg";
import Comic2 from "./../img/Comic2.jpg";

const mainComicList = [
  {
    title: "this is a comic",
    condition: "F-",
    date: "some date",
    price: "$10",
    image: Comic1
  },
  {
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
        title={comic.title}
        condition={comic.condition}
        date={comic.date}
        price={comic.price}
        image={comic.image}
        key={index}
        />
      )}

    </React.Fragment>
  );
}

export default ComicList;
