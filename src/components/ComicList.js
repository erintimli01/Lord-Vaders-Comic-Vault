import React from "react";
import Comic from "./Comic";


function ComicList() {
  return (
    <React.Fragment>
    <Comic 
    // <img src={Comic1} alt="Fake Comic" />
    title="this is a comic"
    condition="F-"
    date="some date"
    price="$10"/>
    <Comic
    title="this is a comic also"
    condition="F"
    date="some other date"
    price="$40"/>
    </React.Fragment>
  );
}

export default ComicList;
