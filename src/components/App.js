import React from "react";
import Header from "./Header";
import ComicList from "./ComicList";
import ComicDetails from "./ComicDetails";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<ComicList />} />
      <Route path="/comic/:id" element={<ComicDetails />} />
    </Routes>
    </>
  )
}

export default App;

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