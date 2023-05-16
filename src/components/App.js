import React from "react";
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Header from "./Header";
import ComicList from "./ComicList";
import ComicDetails from "./ComicDetails";

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

function App() {
  return (
    <>
      <NavBar />
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<ComicList comics={mainComicList} />} />
        <Route path="/comic/:id" element={<ComicDetails comics={mainComicList} />} />
      </Routes>
    </>
  )
}

export default App;

// import React from "react";
// import Header from "./Header";
// import ComicList from "./ComicList";
// import ComicDetails from "./ComicDetails";
// import ReactDOM from "react-dom";
// import NavBar from './NavBar';
// import { Route, Routes } from 'react-router-dom';

// import Comic1 from "./../img/Comic1.jpg";
// import Comic2 from "./../img/Comic2.jpg";

// const mainComicList = [
//   {
//     id: 1,
//     title: "this is a comic",
//     condition: "F-",
//     date: "some date",
//     price: "$10",
//     image: Comic1
//   },
//   {
//     id: 2,
//     title: "this is a comic also",
//     condition: "F",
//     date: "some other date",
//     price: "$40",
//     image: Comic2
//   }
// ];

// function App() {
//   return (
//     <>
//     <NavBar />
//     <Header />
//     <Routes>
//     <Route path="/" element={<ComicList comics={mainComicList} />} />
//       {/* <Route path="/" element={<ComicList />} /> */}
//       {/* <Route path="/comic/:id" element={<ComicDetails />} /> */}
//       <Route
//         path="/comic/:id"
//         element={<ComicDetails comics={mainComicList}
//     />
//   }
// />
//     </Routes>
//     </>
//   )
// }

// export default App;

// function App(){
//   return (
//     <React.Fragment>
//       <Header />
//       <ComicList />

//       <hr/>
//     </React.Fragment>
//   );
// }

// export default App;

//